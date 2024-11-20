import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { SkillDataService } from '../../shared/service/skill_data/skill-data.service';

@Component({
  selector: 'app-skill-components',
  templateUrl: './skill-components.component.html',
  styleUrls: ['./skill-components.component.css']
})
export class SkillComponentsComponent {

  skillsForm: FormGroup;
  pdfPreviews: { name: string, type: string, url: string }[] = [];
  websiteInvalid: any;
  i: number | undefined;

  constructor(
    private fb: FormBuilder,
    private skillsDataService: SkillDataService,
    private router: Router
  ) {
    this.skillsForm = this.fb.group({
      workExperience: [''],
      educationFields: this.fb.array([this.createEducationField()]),
      certifications: [''],
      currentOccupation: [''],
      notes: [''],
      files: [[]]
    });
  }

  validateWebsite(control: AbstractControl): ValidationErrors | null {
    const url = control.value;
    const pattern = /^www\.[a-zA-Z0-9\-]+\.[a-zA-Z]+$/;
    if (!url || !pattern.test(url)) {
      console.log("URL non valido:", url);
      return { invalidUrl: true };
    }
    console.log("URL valido:", url);
    return null;
  }

  createEducationField(): FormGroup {
    return this.fb.group({
      degree: [''],
      institution: [''],
      website: ['', [Validators.required, this.validateWebsite]],
      grade: ['']
    });
  }

  get educationFields(): FormArray {
    return this.skillsForm.get('educationFields') as FormArray;
  }

  addEducationField() {
    this.educationFields.push(this.createEducationField());
  }

  removeEducationField(index: number) {
    this.educationFields.removeAt(index);
  }

  onFileChange(event: any) {
    const files = event.target.files;
    if (files) {
      const newFiles = [...this.skillsForm.value.files];
      for (let file of files) {
        const reader = new FileReader();
        reader.onload = () => {
          const fileData = {
            name: file.name,
            type: file.type,
            url: reader.result as string,
          };
          newFiles.push(fileData);
          this.skillsForm.patchValue({ files: newFiles });
        };
        if (file.type.startsWith('application/pdf') || file.type.startsWith('image')) {
          reader.readAsDataURL(file);
        }
      }
    }
  }

  onFilesAdded(event: any) {
    const files = event.target.files;
    if (files) {
      const currentFiles = this.skillsForm.value.files || [];
      const fileData: { name: string; type: string; url: string }[] = [...currentFiles];
      for (let file of files) {
        const reader = new FileReader();
        reader.onload = () => {
          const newFile = {
            name: file.name,
            type: file.type,
            url: reader.result as string,
          };
          fileData.push(newFile);
          this.skillsForm.patchValue({ files: fileData });
        };
        if (file.type.startsWith('application/pdf') || file.type.startsWith('image')) {
          reader.readAsDataURL(file);
        }
      }
    }
  }

  removeFile(index: number) {
    const updatedFiles = [...this.skillsForm.value.files];
    updatedFiles.splice(index, 1);
    this.skillsForm.patchValue({ files: updatedFiles });
  }

  saveAndGoToSummary() {
    this.skillsDataService.setSkillsData(this.skillsForm.value);
    this.router.navigate(['/skills-summary']);
  }
}
