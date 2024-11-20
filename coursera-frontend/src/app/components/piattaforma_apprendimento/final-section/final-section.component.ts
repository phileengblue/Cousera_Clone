import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../../../shared/service/form/form.service';  // Assicurati di avere il path corretto

@Component({
  selector: 'app-final-section',
  templateUrl: './final-section.component.html',
  styleUrls: ['./final-section.component.css']
})
export class FinalSectionComponent {


  universities = [
    {
      src: 'https://images.ctfassets.net/2pudprfttvy6/2XqR8ObqoLUWLg9re09bNX/f577e3e2a72b79133226650961636371/tec-de-monterrey-seeklogo.com.svg',
      alt: 'Tecnológico de Monterrey'
    },
    {
      src: 'https://images.ctfassets.net/2pudprfttvy6/54lbV33tUKvvBcwNGtckG2/49c39bdb7dc526bf46e28a564768e50e/University_of_Michigan_logo.svg',
      alt: 'Università del Michigan'
    },
    {
      src: 'https://images.ctfassets.net/2pudprfttvy6/6GkQMj8kJka4rbRfUZssA9/2dff6059d6fd92717503aa1e6bd25a20/Imperial_College_London.svg',
      alt: 'Imperial College London'
    },
    {
      src: 'https://images.ctfassets.net/2pudprfttvy6/5xhVcB29RK2Bt6AThlokKU/ccff5cdcf16619740cf6bbff12e0a711/the-university-of-melbourne-vector-logo.png',
      alt: 'Università di Melbourne'
    },
    {
      src: 'https://images.ctfassets.net/2pudprfttvy6/4vDQPYaiX1yJ2juCP44eSS/7fb188a6ef815fb09ca1e5dc39467c21/manipal-university-logo.png',
      alt: 'Università di Manipal'
    },
    {
      src: 'https://images.ctfassets.net/2pudprfttvy6/29R4WJGFio5DXNxgm9re49/72e4ae122728f41dffcb32d4095d30bd/nmims-logo.png',
      alt: 'NMIMS'
    }
  ];

  cards = [
    {
      title: 'Rapporto sulle competenze globali 2023:',
      description: 'Trasformare i talenti con le informazioni sulle competenze tratte da oltre 124 milioni di studenti',
      link: 'https://www.coursera.org/skills-reports/global',
      buttonText: 'Scarica il rapporto'
    },
    {
      title: 'GUIDE: The Impact of Digital Transformation on Higher Ed',
      description: 'Learn new strategies to maximize student value with blended learning.',
      link: 'https://www.coursera.org/campus/resouces/ebook/impact-of-digital-transformation-on-higher-ed',
      buttonText: 'Get guide'
    },
    {
      title: 'Rapporto sulle competenze professionali del 2023',
      description: 'Scoprite le competenze in più rapida crescita per preparare gli studenti alle future carriere.',
      link: 'https://www.coursera.org/skills-reports/job-skills',
      buttonText: 'Scarica il rapporto'
    }
  ];

  benefits = [
    {
      icon: 'bi bi-check2-circle',
      text: 'Collega il curriculum alle carriere'
    },
    {
      icon: 'bi bi-check2-circle',
      text: 'Rafforza i risultati occupazionali'
    },
    {
      icon: 'bi bi-check2-circle',
      text: 'Migliora le esperienze di apprendimento'
    }
  ];

  formFields = [
    {
      id: 'firstname',
      name: 'firstname',
      placeholder: 'First Name',
      type: 'text'
    },
    {
      id: 'lastname',
      name: 'lastname',
      placeholder: 'Last Name',
      type: 'text'
    },
    {
      id: 'email',
      name: 'email',
      placeholder: 'Work Email Address',
      type: 'email'
    },
    {
      id: 'phone_number',
      name: 'phone_number',
      placeholder: 'Phone Number',
      type: 'tel'
    },
    {
      id: 'institution_type',
      name: 'institution_type',
      placeholder: 'Ministry of Education',
      type: 'select',
      options: [
        'University/4 Year College',
        '2 Year College',
        'Graduate or Professional School',
        'Ministry of Education',
        'Other'
      ]
    },
    {
      id: 'institution_name',
      name: 'institution_name',
      placeholder: 'Institution Name',
      type: 'text'
    },
    {
      id: 'job_role',
      name: 'job_role',
      placeholder: 'Job',
      type: 'select',
      options: ['President/Provost', 'Chancellor/Rector', 'Vice-President/Vice-Provost', 'Vice-Chancellor/Vice-Rector', 'Registrar', 'CEO', 'COO/CIO', 'Dean', 'Department Head', 'Director', 'Professor', 'Student']
    },
    {
      id: 'department',
      name: 'department',
      placeholder: 'Department',
      type: 'select',
      options: ['Academic Affairs', 'Career Services', 'Continuing Education', 'Enrollment Management', 'Executive Leadership', 'International', 'strategic Planning', 'Student Affairs', 'Teaching/Faculty/Research', 'Other']
    },
    {
      id: 'needs',
      name: 'needs',
      placeholder: 'Which best describes your needs?',
      type: 'select',
      options: [
        'Get in touch with sales',
        'Existing customer support',
        'Learner support',
        'Courses for myself',
        'Other'
      ]
    },
    {
      id: 'country',
      name: 'country',
      placeholder: 'Country',
      type: 'text'
    }
  ];
  
window: any;

  
  form: any;

  constructor(private fb: FormBuilder, private formService: FormService) {
    this.createForm();
  }

  // Creazione del form con formGroup
  createForm() {
    this.form = this.fb.group({
      firstname: ['', Validators.required],              // Obbligatorio
      lastname: ['', Validators.required],               // Obbligatorio
      email: ['', [Validators.required, Validators.email]], // Obbligatorio + validazione email
      phone_number: ['', Validators.required],           // Obbligatorio
      institution_type: ['', Validators.required],       // Obbligatorio
      institution_name: ['', Validators.required],       // Obbligatorio
      job_role: ['', Validators.required],               // Obbligatorio
      department: ['', Validators.required],             // Obbligatorio
      needs: ['', Validators.required],                  // Obbligatorio
      country: ['', Validators.required]                 // Obbligatorio
    });
  }
  
  
  
  

  // Metodo che invia i dati del form al backend
  onSubmit() {
    if (this.form.valid) {
      this.formService.postDiscountedCourses(this.form.value).subscribe(
        response => {
          console.log('Form inviato con successo', response);
          alert('Form inviato con successo!');
        },
        error => {
          console.error('Errore nell\'invio del form', error);
          alert('Errore durante l\'invio del form');
        }
      );
    }
  }
}
