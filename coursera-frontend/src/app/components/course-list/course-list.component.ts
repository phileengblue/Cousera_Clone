import { Component, OnInit } from '@angular/core';
import { DiscountedCoursesService } from 'src/app/shared/service/discount/discounted-courses.service';


interface Course {
  id: number;
  title: string;
  start_date: string;
  original_price: number;
  discounted_price: number;
  discount_percentage: string;
  days_remaining: number;
  imageUrl: string | null;
}



@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses: any[] = [];
  showAll: boolean | undefined;
  showModal: boolean | undefined;
maxPrice: any;
minPrice: any;

  constructor(private discountedCoursesService: DiscountedCoursesService) {}

  ngOnInit(): void {
    this.discountedCoursesService.getDiscountedCourses().subscribe(
      (data: any) => {
        this.courses = Object.values(data).map((course: any) => {
          const baseUrl = 'http://127.0.0.1:8000/storage';
          return {
            id: course.id,
            title: course.title,
            start_date: course.start_date,
            original_price: course.original_price,
            discounted_price: course.discounted_price,
            discount_percentage: course.discount_percentage,
            days_remaining: course.days_remaining,
            imageUrl: course.image ? `${baseUrl}/${course.image.path}` : null
          } as Course;
        });
      },
      (error: any) => {
        console.error('Errore durante il recupero dei corsi:', error);
      }
    );
  }
  

  getCardList(): void {
    const baseUrl = 'http://127.0.0.1:8000/storage';
  
    // Funzione per aggiornare i corsi con i campi `imageUrl` e `logoUrl`
    this.courses.forEach((course) => {
      course.imageUrl = course.image ? `${baseUrl}/${course.image.path}` : null;

      // Puoi aggiungere anche altri campi, se il backend non li fornisce esplicitamente
    course.start_date = course.start_date || "Informazione non disponibile";
    course.original_price = course.original_price || 0;
    course.discounted_price = course.discounted_price || 0;
    course.discount_percentage = course.discount_percentage || "0%";
    course.days_remaining = course.days_remaining || 0;
    });
  }

  openCoursesModal(): void {
    this.showModal = true; // Mostra la modale
  }

  closeCoursesModal(): void {
    this.showModal = false; // Chiudi la modale
  }

  applyDiscountRange(range: string): void {
    this.discountedCoursesService.getDiscountedCourses({ discount_range: range }).subscribe((data: any) => {
      this.courses = Object.values(data).map((course: any) => {
        const baseUrl = 'http://127.0.0.1:8000/storage';
        return {
          id: course.id,
          title: course.title,
          start_date: course.start_date,
          original_price: course.original_price,
          discounted_price: course.discounted_price,
          discount_percentage: course.discount_percentage,
          days_remaining: course.days_remaining,
          imageUrl: course.image ? `${baseUrl}/${course.image.path}` : null
        } as Course;
      });
    });
  }
  
  applyExpirationFilter(): void {
    this.discountedCoursesService.getDiscountedCourses({ expiration: 'Corsi in scadenza' }).subscribe((data: any) => {
      this.courses = Object.values(data).map((course: any) => {
        const baseUrl = 'http://127.0.0.1:8000/storage';
        return {
          id: course.id,
          title: course.title,
          start_date: course.start_date,
          original_price: course.original_price,
          discounted_price: course.discounted_price,
          discount_percentage: course.discount_percentage,
          days_remaining: course.days_remaining,
          imageUrl: course.image ? `${baseUrl}/${course.image.path}` : null
        } as Course;
      });
    });
  }
  
  applyOrder(): void {
    this.discountedCoursesService.getDiscountedCourses({ order: 'Prezzo più alto' }).subscribe((data: any) => {
      this.courses = Object.values(data)
        .map((course: any) => {
          const baseUrl = 'http://127.0.0.1:8000/storage';
          return {
            id: course.id,
            title: course.title,
            start_date: course.start_date,
            original_price: course.original_price,
            discounted_price: course.discounted_price,
            discount_percentage: course.discount_percentage,
            days_remaining: course.days_remaining,
            imageUrl: course.image ? `${baseUrl}/${course.image.path}` : null
          } as Course;
        })
        .sort((a: Course, b: Course) => b.discounted_price - a.discounted_price); // Ordina per prezzo scontato decrescente
    });
  }
  
  
  

}
