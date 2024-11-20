
import { Component, inject, OnInit, Type } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Category } from 'src/app/shared/models/Category';
import { Course } from 'src/app/shared/models/Course';
import { Difficulty } from 'src/app/shared/models/Difficulty';
import { productType } from 'src/app/shared/models/ProductType';
import { Professor } from 'src/app/shared/models/Professor';
import { University } from '../../../app/shared/models/University';
import { User } from 'src/app/shared/models/User';

import { CourseService } from 'src/app/shared/service/course/course.service';
import { PasswordVisibilityService } from 'src/app/shared/service/password/password-visibility.service';
import { ProfessorService } from 'src/app/shared/service/professor/professor.service';
import { UniversityService } from 'src/app/shared/service/university/university.service';

@Component({
  selector: 'app-backoffices',
  templateUrl: './backoffices.component.html',
  styleUrls: ['./backoffices.component.css'],
})
export class BackofficesComponent implements OnInit {
  activeButton: string = 'corso';
  image: string | ArrayBuffer | null = null;
  selectedFile: File | null = null;

  selectedUser: string = '';
  users: User[] = [];

  selectedCourse: string = '';
  courses: Course[] = [];

  selectedUniversity: string = '';
  universities: University[] = [];

  selectedLanguage: string = '';
  language = [
    { id: 1, label: 'Italiano', value: 'italiano' },
    { id: 2, label: 'Inglese', value: 'inglese' },
    { id: 3, label: 'Spagnolo', value: 'spagnolo' },
    { id: 4, label: 'Francese', value: 'francese' },
    { id: 5, label: 'Cinese', value: 'cinese' },
    { id: 6, label: 'Giapponese', value: 'giapponese' },
    { id: 7, label: 'Tedesco', value: 'tedesco' },
  ];

  selectedDifficulty: string = '';
  difficulty: Difficulty[] = [
    /* { id: 1, label: 'Principiante', value: 'beginner' },
    { id: 2, label: 'Intermedio', value: 'intermediate' },
    { id: 3, label: 'Avanzato', value: 'advanced' },
    { id: 4, label: 'Misto', value: 'mixed' }, */
  ];

  selectedCategory: string = '';
  category: Category[] = [];

  selectedType: string = '';
  type: productType[] = [
    /* { id: 1, label: 'Progetto guidato', value: 'guided_project' },
    { id: 2, label: 'Corso', value: 'course' },
    { id: 3, label: 'Progetto', value: 'project' },
    { id: 4, label: 'Specializzazione', value: `specialization` },
    {
      id: 5,
      label: 'Certificato Professionale',
      value: 'professional_certificate',
    },
    { id: 6, label: 'Laurea', value: 'degree' },
    { id: 7, label: 'Diploma Post Laurea', value: 'postgraduate_diploma' },
    { id: 8, label: 'Certificato di Laurea', value: 'degree_certificate' },
    { id: 9, label: 'Diploma', value: 'diploma' },
    { id: 10, label: 'Master', value: 'master' }, */
  ];

  public passwordService: PasswordVisibilityService = inject(
    PasswordVisibilityService
  );

  togglePasswordVisibility(): void {
    this.passwordService.togglePasswordVisibility();
  }

  courseForm: FormGroup;
  createCourse: boolean = false;
  private fb_courseForm: FormBuilder = inject(FormBuilder);

  professorForm: FormGroup;
  createProfessor: boolean = false;
  private fb_professorForm: FormBuilder = inject(FormBuilder);

  universityForm: FormGroup;
  createUniversity: boolean = false;
  private fb_universityForm: FormBuilder = inject(FormBuilder);

  constructor() {
    this.courseForm = this.fb_courseForm.group({
      title: ['', [Validators.required]],
      duration: ['', [Validators.required]],
      price: ['', [Validators.required]],
      language: ['', [Validators.required]],
      category_id: ['', [Validators.required]],
      description: ['', [Validators.required]],
      difficulty_level: ['', [Validators.required]],
      university_id: ['', [Validators.required]],
      productTypeDescription: ['', [Validators.required]],
    });

    this.professorForm = this.fb_professorForm.group({
      user_id: ['', [Validators.required]],
      course_id: ['', [Validators.required]],
    });

    this.universityForm = this.fb_universityForm.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      file_img: '',
    });
  }
  ngOnInit(): void {
    this.getCourseList();
    this.getProfessorList();
    this.getUniversityList();

    this.getAllInformationCourse();
  }

  getCourseList() {
    this.courseService.getCourse().subscribe((res) => {
      this.courses = res;
    });
  }

  getProfessorList() {
    this.professorService.getProfessor().subscribe((res) => {
      this.users = res;
    });
  }

  getUniversityList() {
    this.universityService.getUniversity().subscribe((res) => {
      this.universities = res;
    });
  }

  getAllInformationCourse(): void {
    this.courseService.getAllInformation().subscribe((res) => {
      this.difficulty = res.difficulty_levels;
      this.category = res.categories;
      this.type = res.productTypeDescription;
    });
  }

  get fCourse(): { [key: string]: AbstractControl } {
    return this.courseForm.controls;
  }

  private courseService: CourseService = inject(CourseService);
  newCourse = {
    title: '',
    description: '',
    language: '',
    difficulty_level: '',
    price: 0,
    duration: '',
    category_id: 0,
    productTypeDescription: '',
  };

  handleSubmitCourse(): void {
    this.createCourse = true;

    if (this.courseForm.valid) {
      this.courseService.addCourse(this.courseForm.value).subscribe({
        next: (res) => {
          this.newCourse = res;
          this.courseForm.reset();
          this.createCourse = false;
        },
        error: (err) => {
          console.error('Errore durante la creazione del corso:', err);
          this.createCourse = false;
        },
      });
    }
  }

  get fUser(): { [key: string]: AbstractControl } {
    return this.professorForm.controls;
  }

  private professorService: ProfessorService = inject(ProfessorService);
  newProfessor = {
    user_id: 0,
    course_id: 0,
  };

  handleSubmitUser(): void {
    this.createProfessor = true;

    if (this.professorForm.valid) {
      console.log('Valid: ', this.professorForm.value);

      this.professorService.addProfessor(this.professorForm.value).subscribe({
        next: (res: Professor) => {
          this.newProfessor = res;
          this.professorForm.reset();
          this.createProfessor = false;
        },
        error: (err) => {
          console.error('Errore durante la creazione del professore:', err);
          this.createProfessor = false;
        },
      });
    } else {
      this.createProfessor = false;
    }
  }

  get fUniversity(): { [key: string]: AbstractControl } {
    return this.universityForm.controls;
  }

  private universityService: UniversityService = inject(UniversityService);
  newUniversity = {
    name: '',
    description: '',
    file_img: null,
  };

  handleSubmitUniversity(): void {
    this.createUniversity = true;
    
    const formData: FormData = new FormData();
    formData.append('name', this.universityForm.controls['name'].value);
    formData.append('description', this.universityForm.controls['description'].value);

    if (this.selectedFile) {
        formData.append('file_img', this.selectedFile);
    }

    if (this.universityForm.valid) {
      console.log('Valid: ', this.universityForm.value);

      this.universityService
        .addUniversity(formData)
        .subscribe({
          next: (res: any) => {
            this.newUniversity = res;
            this.universityForm.reset();
            this.createUniversity = false;
          },
          error: (err) => {
            console.error('Errore durante la creazione della università:', err);
            this.createUniversity = false;
          },
        });
    } else {
      this.createUniversity = false;
    }
  }

  setActiveButton(button: string): void {
    this.activeButton = button;
  }

  onFileSelected(event: Event): void {
    
    
    const inputElement = event.target as HTMLInputElement;
    const file: File | null = (inputElement.files as FileList)[0];

    if (file) {
      this.selectedFile= file;
      const reader = new FileReader();
      reader.onload = () => {
        this.image = reader.result;
        
      };
      reader.readAsDataURL(file);
    } else {
      this.image = '../../assets/images/avatar.png';
    }
  }

  openFileInput(): void {
    const fileInput = document.getElementById('fileInput');
    if (fileInput) {
      fileInput.click();
    }
  }

  autoExpand(event: Event): void {
    const textarea = event.target as HTMLTextAreaElement;
    // Ripristina l'altezza per calcolare la nuova altezza
    textarea.style.height = '35%';
    // Imposta l'altezza al valore del scrollHeight
    textarea.style.height = textarea.scrollHeight + 'px';
  }
}
