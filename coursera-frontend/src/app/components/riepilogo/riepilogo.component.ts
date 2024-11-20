import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SkillDataService } from '../../shared/service/skill_data/skill-data.service';

@Component({
  selector: 'app-riepilogo',
  templateUrl: './riepilogo.component.html',
  styleUrls: ['./riepilogo.component.css']
})
export class RiepilogoComponent implements OnInit {
  skillsData: any;
  editableData: any;
  isEditing: boolean = false;
  showResetButton: boolean = false;

  constructor(private skillDataService: SkillDataService, private router: Router) {}

  ngOnInit() {
    this.skillsData = this.skillDataService.getSkillsData();
    this.editableData = JSON.parse(JSON.stringify(this.skillsData));
    setTimeout(() => {
      this.showResetButton = true;
    }, 10000);
  }

  resetData() {
    this.skillDataService.clearSkillsData();
    this.skillsData = null;
    this.editableData = null;
    this.router.navigate(['']);
  }

  enableEditing() {
    this.isEditing = true;
  }

  removeFile(index: number) {
    this.editableData.files.splice(index, 1);
  }

  onFileAdd(event: any) {
    const files = event.target.files;
    if (files) {
      for (let file of files) {
        const reader = new FileReader();
        reader.onload = () => {
          const newFile = {
            name: file.name,
            type: file.type,
            url: reader.result as string,
          };
          this.editableData.files.push(newFile);
        };
        if (file.type.startsWith('application/pdf') || file.type.startsWith('image')) {
          reader.readAsDataURL(file);
        }
      }
    }
  }

  saveChanges() {
    this.skillsData = JSON.parse(JSON.stringify(this.editableData));
    this.skillDataService.setSkillsData(this.skillsData);
    this.isEditing = false;
  }

  cancelEditing() {
    this.editableData = JSON.parse(JSON.stringify(this.skillsData));
    this.isEditing = false;
  }

  navigateToSkillsComponent() {
    this.router.navigate(['']);
  }
}
