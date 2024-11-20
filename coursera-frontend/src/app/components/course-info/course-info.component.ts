import { Component, HostListener, inject } from '@angular/core';
import { CourseService } from 'src/app/shared/service/course/course.service';
import {
  CardSection,
  CardStart,
  Carousel,
  CourseDC,
  CourseAccess,
  CourseAccordion,
  CourseApi,
  Question,
  StartDegree,
} from 'src/app/shared/models/courseModel';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css'],
})
export class CourseInfoComponent {
  private courseService: CourseService = inject(CourseService);
  isMobileScreen: boolean = false;

  isOverlayVisible: boolean = false;
  activeIndex: number = -1;

  info: CourseDC[] = this.courseService.getCourseData();
  access: CourseAccess[] = this.courseService.getCourseAccess();
  data: CourseAccordion[] = this.courseService.getCourseAccordion();
  startDegree: StartDegree[] = this.courseService.getStartDegree();
  people: Carousel[] = this.courseService.getPeopleCarousel();
  start: CardStart[] = this.courseService.getAllCardStart();
  card: CardSection[] = this.courseService.getCard();
  question: Question[] = this.courseService.getQuestion();

  skills = this.courseService.getCourseData()[0].info.skills;
  numberOfSkillsToShow: number = 8;
  showAll: boolean = false;
  displayedItems = this.question.slice(0, 3);

  items = [
    { id: '1', name: 'Informazioni' },
    { id: '2', name: 'Risultati' },
    { id: '3', name: 'Corsi' },
    { id: '4', name: 'Testimonianze' },
  ];

  selectedIndex = 0;

  numberOfCharactersToShow: number = 207;

  showButtons = false;

  isSticky = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const wrapperElement = document.querySelector('.scrolling-wrapper');
    if (wrapperElement) {
      const rect = wrapperElement.getBoundingClientRect();

      this.isSticky = rect.top <= 0;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.checkScreenSize();
  }

  selectCard(index: number, event: Event) {
    event.preventDefault();
    this.selectedIndex = index;
    const sectionId = this.items[index].id;
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }

  onKeyPress(event: KeyboardEvent) {
    console.log('KeyPress event:', event);
  }

  onKeyDown(event: KeyboardEvent) {
    console.log('KeyDown event:', event);
  }

  onKeyUp(event: KeyboardEvent) {
    console.log('KeyUp event:', event);
  }

  checkScreenSize(): void {
    this.isMobileScreen = window.innerWidth < 768;
  }

  toggleShow() {
    this.showAll = !this.showAll;
  }

  showMore() {
    this.showAll = !this.showAll;
    if (this.showAll) {
      this.displayedItems = this.question;
    } else {
      this.displayedItems = this.question.slice(0, 3);
    }
  }

  get skillsToShow() {
    return this.showAll
      ? this.skills
      : this.skills.slice(0, this.numberOfSkillsToShow);
  }

  get combinedText(): string {
    return this.data[0].contex.map((item) => item.text).join(' ');
  }

  get textToShow(): string {
    const fullText = this.combinedText;

    if (this.showAll) {
      return fullText;
    }
    if (fullText.length > this.numberOfCharactersToShow) {
      return fullText.slice(0, this.numberOfCharactersToShow);
    }
    return fullText;
  }

  get formattedText(): string {
    return this.data[0].contex
      .map((item) =>
        item.isBold ? `<strong>${item.text}</strong>` : item.text
      )
      .join(' ');
  }

  closeOverlay() {
    this.isOverlayVisible = false;
    document.body.classList.remove('no-scroll');
  }

  toggleOverlay(index: number) {
    this.activeIndex = index;
    this.isOverlayVisible = true;
    document.body.classList.add('no-scroll');
  }

  courseData: CourseApi[] = [];

  getCourseList() {
    this.courseService.getAllCourse().subscribe((data) => {
      this.courseData = data;
      console.log(this.courseData);
    });
  }

  ngOnInit(): void {
    this.checkScreenSize();
    this.getCourseList();
  }
}
