import { Component, HostListener, inject, OnInit } from '@angular/core';
import { CourseDetail } from 'src/app/shared/models/CardHome';
import { CourseService } from 'src/app/shared/service/course/course.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  isMobile: boolean = false;

  private courseService: CourseService = inject(CourseService);

  popular_courses: CourseDetail[] = [];
  new_courses: CourseDetail[] = [];
  free_courses: CourseDetail[] = [];
  degree_courses: CourseDetail[] = [];
  hight_level: CourseDetail[] = [];

  showPopular: boolean = false;
  showNew: boolean = false;
  showFree: boolean = false;
  showDegree: boolean = false;
  showHighLevel: boolean = false;

  getCardList() {
    const baseUrl = 'http://127.0.0.1:8000/storage';
  
    // Funzione per aggiornare i corsi con i campi `imageUrl` e `logoUrl`
    const updateCourses = (courses: any[]) => {
      courses.forEach((course) => {
        course.imageUrl = course.filestorage ? `${baseUrl}/${course.filestorage.path}` : null;
        course.logoUrl = course.universities.length > 0 && course.universities[0].filestorage
          ? `${baseUrl}/${course.universities[0].filestorage.path}`
          : null;
          course.universityName = course.universities.length > 0
          ? course.universities[0].name
          : null;
      });
    };
  
    this.courseService.getCarouselCards().subscribe((res) => {
      updateCourses(res.courses.popular_courses);
      this.popular_courses = res.courses.popular_courses;
  
      updateCourses(res.courses.new_courses);
      this.new_courses = res.courses.new_courses;
  
      updateCourses(res.courses.free_courses);
      this.free_courses = res.courses.free_courses;
  
      updateCourses(res.courses.degree_courses);
      this.degree_courses = res.courses.degree_courses;
  
      updateCourses(res.courses.hight_level_degrees);
      this.hight_level = res.courses.hight_level_degrees;
    });
  }
  
  
  getuniversities() {


    this.courseService.getUniversity().subscribe((res) => {
      this.uni = res;
      // console.log(this.uni + 'sono un DNA errante');
    });

  }

  uni: any[] = [];

  getuniversity() {
    // const baseUrl = 'http://127.0.0.1:8000/storage';

    this.courseService.getUniversity().subscribe((res) => {
      this.uni = res;
    //  console.log(this.uni + 'sono un DNA errante');
    });
  
   

  }
  

  ngOnInit(): void {
    this.getCardList();
    this.getuniversity();
  }

  toggleShow(section: string) {
    switch (section) {
      case 'popular':
        this.showPopular = !this.showPopular;
        break;
      case 'new':
        this.showNew = !this.showNew;
        break;
      case 'free':
        this.showFree = !this.showFree;
        break;
      case 'degree':
        this.showDegree = !this.showDegree;
        break;
      case 'highLevel':
        this.showHighLevel = !this.showHighLevel;
        break;
    }
  }

  getVisibleItems(items: CourseDetail[], showAll: boolean, limit: number = 4) {
    // Verifica la larghezza dello schermo
    const screenWidth = window.innerWidth;

    // Se la larghezza dello schermo è inferiore a 768px, imposta il limite a 2
    if (screenWidth < 769) {
        limit = 2;
    }

    return showAll ? items : items.slice(0, limit);
}


  

  constructor() {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth < 768;
  }
}
