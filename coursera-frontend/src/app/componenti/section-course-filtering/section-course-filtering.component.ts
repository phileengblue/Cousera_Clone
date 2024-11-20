import { AfterViewInit, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ApiFilterService } from 'src/app/service/apiFilter/api-filter.service';
import { HttpClient } from '@angular/common/http';
import { CoursesDetailFilter, ModalGetFilter, modalObject } from '../shared/model/filterCourse';
import { forkJoin, Subscriber, Subscription } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { arraysEqual } from 'ng-zorro-antd/core/util';

declare var bootstrap: any;

@Component({
  selector: 'app-section-course-filtering',
  templateUrl: './section-course-filtering.component.html',
  styleUrls: ['./section-course-filtering.component.css']
})
export class SectionCourseFilteringComponent implements AfterViewInit, OnInit {


  constructor(private apiFilter: ApiFilterService, private http: HttpClient, private route: ActivatedRoute) { }

  cgOrder: string = "Più recente";
  isActive: boolean = false;
  isOpenContainer: boolean = false;
  filteredCourses: CoursesDetailFilter[] = [];
  resCoursesCount: ModalGetFilter[] = [];
  isCollapsed: boolean[] = [false, false, false, false, false, false];
  isVisibleOptionFilter: boolean[] = [true, true, true, true, true, true]; // index[0:'object', 1:'language', 2:'duration', 3:'learningProduct', 4:difficultyLevel', 5:'educator' ]
  inputSearchBar: string = "";
  selectedOrder: 'recent' | 'corrispondence' = 'recent';
  tags: string[]=[];
  inputTag: string[] = [];

  countObject: any;
  objects: modalObject[] = [];
  selectedObjects: any[] = [];

  countLanguage: any;
  languages: modalObject[] = [];
  selectedLanguages: any[] = [];

  countDurations: any;
  durations: modalObject[] = [];
  selectedDurations: any[] = [];
  selectedDurationsTot: any[] = [];

  countLearningProduct: any;
  learningProduct: modalObject[] = [];
  selectedLearningProduct: any[] = [];

  countDifficultyLevel: any
  difficultyLevel: modalObject[] = [];
  selectedDifficultyLevel: any[] = [];

  countEducator: any;
  educators: modalObject[] = [];
  selectedEducator: any[] = [];

  itemToShowFilter: number[] = [4, 2, 4, 5, 4, 4]; // index[0:'object', 1:'language', 2:'duration', 3:'learningProduct', 4:difficultyLevel', 5:'educator' ]
  itemToShowTotalFilter: number[] = [0, 0, 0, 0, 0, 0];
  counterFilter: number[] = [0, 0, 0, 0, 0, 0];

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const dropdownButtons = document.querySelector('.buttonOrder');
    let isInsideDropdown = false;

    if (dropdownButtons?.contains(target)) {
      isInsideDropdown = true
    }

    if (!isInsideDropdown) {
      this.resetDropdown();
    }
  }

  resetDropdown() {
    this.isActive = !this.isActive;
  }

  OnDropDown() {
    return this.isActive = !this.isActive;
  }

  isMobileOrTablet() {
    return (window.innerWidth <= 990) ? false : true;
  }

  handleClose(removedTag: {}): void {
    console.log("removedTag", removedTag);

    this.tags = this.tags.filter(tag => tag !== removedTag);
    this.objects.filter(item => item.label === removedTag).forEach(elem => elem.selected= false);
    this.languages.filter(item => item.label === removedTag).forEach(elem => elem.selected= false);
    this.durations.filter(item => item.label === removedTag).forEach(elem => elem.selected= false);
    this.learningProduct.filter(item => item.label === removedTag).forEach(elem => elem.selected= false);
    this.difficultyLevel.filter(item => item.label === removedTag).forEach(elem => elem.selected= false);
    this.educators.filter(item => item.label === removedTag).forEach(elem => elem.selected= false);
  
    this.selectedObjects = this.objects.filter(item => item.selected === true).map(elem => elem.value);
    this.selectedLanguages = this.languages.filter(item => item.selected === true).map(elem => elem.value);
    this.selectedDurations = this.durations.filter(item => item.selected === true).map(elem => elem.value);
    this.selectedLearningProduct = this.learningProduct.filter(item => item.selected === true).map(elem => elem.value);
    this.selectedDifficultyLevel = this.difficultyLevel.filter(item => item.selected === true).map(elem => elem.value);
    this.selectedEducator = this.educators.filter(item => item.selected === true).map(elem => elem.value);


    this.funcGetFilter();
  }

  sliceTagName(tag: string): string {
    const isLongTag = tag.length > 20;
    return isLongTag ? `${tag.slice(0, 20)}...` : tag;
  }

  RMTShowMore(item: string): void {
    switch (item) {
      case 'object':
        //[0]
        this.itemToShowFilter[0] += 5;
        this.counterFilter[0] = (this.itemToShowTotalFilter[0] - this.itemToShowFilter[0]);
        break;
      case 'language':
        //[1]
        this.itemToShowFilter[1] += 5;
        this.counterFilter[1] = (this.itemToShowTotalFilter[1] - this.itemToShowFilter[1]);
        break;
      case 'duration':
        //[2]
        this.itemToShowFilter[2] += 5;
        this.counterFilter[2] = (this.itemToShowTotalFilter[2] - this.itemToShowFilter[2]);
        break;
      case 'learningProduct':
        //[3]
        this.itemToShowFilter[3] += 5;
        this.counterFilter[3] = (this.itemToShowTotalFilter[3] - this.itemToShowFilter[3]);
        break;
      case 'difficultyLevel':
        //[4]
        this.itemToShowFilter[4] += 5;
        this.counterFilter[4] = (this.itemToShowTotalFilter[4] - this.itemToShowFilter[4]);
        break;
      case 'educator':
        //[5]
        this.itemToShowFilter[5] += 5;
        this.counterFilter[5] = (this.itemToShowTotalFilter[5] - this.itemToShowFilter[5]);
        break;
      default: ''
        break;
    }
    return
  }

  isVisibleBtnMore(item: string) {
    switch (item) {
      case 'object':
        //[0]
        return this.itemToShowFilter[0] < this.itemToShowTotalFilter[0] ? false : true;
      case 'language':
        //[1]
        return this.itemToShowFilter[1] < this.itemToShowTotalFilter[1] ? false : true; // quando la condizione soddisfa il button non viene visualizzato
      case 'duration':
        //[2]
        return this.itemToShowFilter[2] < this.itemToShowTotalFilter[2] ? false : true;
      case 'learningProduct':
        //[3]
        return this.itemToShowFilter[3] < this.itemToShowTotalFilter[3] ? false : true;
      case 'difficultyLevel':
        //[4]
        return this.itemToShowFilter[4] < this.itemToShowTotalFilter[4] ? false : true;
      case 'educator':
        //[5]
        return this.itemToShowFilter[5] < this.itemToShowTotalFilter[5] ? false : true;
      default: ''
        break;
    }
    return
  }

  btnShowLess(item: string) {
    switch (item) {
      case 'object':
        //[0]
        this.itemToShowFilter[0] = 5;
        this.counterFilter[0] = (this.itemToShowTotalFilter[0] - this.itemToShowFilter[0]);
        break;
      case 'language':
        //[1]
        break;
      case 'duration':
        //[2]
        break;
      case 'learningProduct':
        //[3]
        break;
      case 'difficultyLevel':
        //[4]
        break;
      case 'educator':
        //[5]
        this.itemToShowFilter[5] = 5;
        this.counterFilter[5] = (this.itemToShowTotalFilter[5] - this.itemToShowFilter[5]);
        break;
      default: ''
        break;
    }
    return

  }

  toggleDropDown(index: number) {
    if (this.isCollapsed[index] === false) {
      this.isCollapsed.fill(false);
      return this.isCollapsed[index] = !this.isCollapsed[index];
    }
    return this.isCollapsed[index] = !this.isCollapsed[index];
  }

  funcGetFilter(){
    this.apiFilter.getFilter({
      keyword: this.inputSearchBar,
      category_id: this.selectedObjects,
      language: this.selectedLanguages,
      duration: this.selectedDurationsTot,
      productTypeDescription: this.selectedLearningProduct,
      difficulty_level: this.selectedDifficultyLevel,
      universities: this.selectedEducator,
      ordering: this.selectedOrder,
    }).subscribe((item) => { this.filteredCourses = item.courses; console.log("response", this.filteredCourses) });
  }

  updateSelectedObject() {
    this.selectedObjects = this.objects.filter(item => item.selected === true).map(elem => elem.value);
    this.objects.filter(item => item.selected === true).forEach(elem => this.tags = [...this.tags, elem.label]);
    //console.log('Opzioni selezionate:', this.selectedObjects);
  }
  updateSelectedLanguages() {
    this.selectedLanguages = this.languages.filter(item => item.selected === true).map(elem => elem.value);
    this.languages.filter(item => item.selected === true).forEach(elem => this.tags = [...this.tags, elem.label]);
    // console.log('Opzioni selezionate:', this.selectedLanguages);
  }
  updateSelectedDurations() {
    this.selectedDurations = this.durations.filter(item => item.selected === true).map(elem => elem.value);
    //add tag
    this.durations.filter(item => item.selected === true).forEach(elem => this.tags = [...this.tags, elem.label]);
    //console.log('Opzioni selezionate:', this.selectedDurations);
    this.selectedDurationsTot = [];
    for (let i = 0; i < this.selectedDurations.length; i++) {
      switch (this.selectedDurations[i]) {
        case "less_than_2_hours":
          this.selectedDurationsTot[i] = ['hours', 0, 2];
          break;
        case '1_to_4_weeks':
          this.selectedDurationsTot[i] = ['weeks', 1, 4];
          break;
        case '1_to_3_months':
          this.selectedDurationsTot[i] = ['months', 1, 3];
          break;
        case '3_to_6_months':
          this.selectedDurationsTot[i] = ['months', 3, 6];
          break;
        case '6_to_12_months':
          this.selectedDurationsTot[i] = ['months', 6, 12];
          break;
        case '1_to_4_years':
          this.selectedDurationsTot[i] = ['months', 12, 48];
          break;
        default:
          break;
      }
      console.log("selectedDurationTot", this.selectedDurationsTot)
    }
  }
  updateSelectedLearningProduct() {
    this.selectedLearningProduct = this.learningProduct.filter(item => item.selected === true).map(elem => elem.value);
    this.learningProduct.filter(item => item.selected === true).forEach(elem => this.tags = [...this.tags, elem.label]);
    // console.log('Opzioni selezionate:', this.selectedLearningProduct);
  }
  updateSelectedDifficultyLevel() {
    this.selectedDifficultyLevel = this.difficultyLevel.filter(item => item.selected === true).map(elem => elem.value);
    this.difficultyLevel.filter(item => item.selected === true).forEach(elem => this.tags = [...this.tags, elem.label]);
    //console.log('Opzioni selezionate:', this.selectedDifficultyLevel);
  }
  updateSelectedEducator() {
    this.selectedEducator = this.educators.filter(item => item.selected === true).map(elem => elem.value);
    this.educators.filter(item => item.selected === true).forEach(elem => this.tags = [...this.tags, elem.label]);
    //console.log('Opzioni selezionate:', this.selectedEducator);
  }

  toggleFilterObject(object: modalObject) {
    object.selected = !object.selected;
    this.tags=[];
    this.updateSelectedObject();
    this.updateSelectedLanguages();
    this.updateSelectedDurations();
    this.updateSelectedLearningProduct();
    this.updateSelectedDifficultyLevel();
    this.updateSelectedEducator();

    console.log("array tag", this.tags);
    //console.log('toggleDuration', this.selectedDurationsTot);
    this.funcGetFilter();
 }

btnClearFilter(){
  this.tags= [];
  this.objects.forEach(item => item.selected = false);
  this.languages.forEach(item => item.selected = false);
  this.durations.forEach(item => item.selected = false);
  this.learningProduct.forEach(item => item.selected = false);
  this.difficultyLevel.forEach(item => item.selected = false);
  this.educators.forEach(item => item.selected = false);

  this.updateSelectedObject();
  this.updateSelectedLanguages();
  this.updateSelectedDurations();
  this.updateSelectedLearningProduct();
  this.updateSelectedDifficultyLevel();
  this.updateSelectedEducator();
  
  this.funcGetFilter();

}
  chengeOrder(order: string) {
    if (order === 'Piu recente') {
      this.cgOrder = 'Più recente';
      this.selectedOrder= 'recent';
      this.funcGetFilter();
    } else { 
      this.cgOrder = 'Miglior corrispondenza'; 
      this.selectedOrder= 'corrispondence';
      this.funcGetFilter();
    };
  }

  toggleContainer(): boolean {
    return this.isOpenContainer = !this.isOpenContainer;
  }

  getCourseCount() {
    const requests = [];
    requests.push(this.apiFilter.getFilter({ keyword: this.inputSearchBar }))
    forkJoin(requests).subscribe((response) => {
      response.forEach((item, index) => {
        this.countObject = item.courseCounts.category_count;
        this.countLanguage = item.courseCounts.language_count;
        this.countDurations = item.courseCounts.duration_count;
        this.countLearningProduct = item.courseCounts.product_type_description_count;
        this.countDifficultyLevel = item.courseCounts.difficulty_level_count;
        this.countEducator = item.courseCounts.university_count;

        //console.log("item", this.countObject);

        for (const [key, value] of Object.entries(this.countObject)) {
          switch (key) {
            case "Data Science":
              this.objects.push({ id: `flexCheckLang${key}`, label: "Data Science", value: 1, selected: false, totalCourses: value })
              break;
            case 'Affari':
              this.objects.push({ id: `flexCheckLang${key}`, label: "Affari", value: 2, selected: false, totalCourses: value })
              break;
            case 'Informatica':
              this.objects.push({ id: `flexCheckLang${key}`, label: "Informatica", value: 3, selected: false, totalCourses: value })
              break;
            case "Tecnologia dell'informazione":
              this.objects.push({ id: `flexCheckLang${key}`, label: "Tecnologia dell'informazione", value: 4, selected: false, totalCourses: value })
              break;
            case 'Apprendimento delle lingue':
              this.objects.push({ id: `flexCheckLang${key}`, label: "Apprendimento delle lingue", value: 5, selected: false, totalCourses: value })
              break;
            case 'Salute':
              this.objects.push({ id: `flexCheckLang${key}`, label: "Salute", value: 6, selected: false, totalCourses: value })
              break;
            case 'Sviluppo personale':
              this.objects.push({ id: `flexCheckLang${key}`, label: "Sviluppo personale", value: 7, selected: false, totalCourses: value })
              break;
            case 'Scienza fisica e ingegneria':
              this.objects.push({ id: `flexCheckLang${key}`, label: "Scienza fisica e ingegneria", value: 8, selected: false, totalCourses: value })
              break;
            case 'Scienze sociali':
              this.objects.push({ id: `flexCheckLang${key}`, label: "Scienze sociali", value: 9, selected: false, totalCourses: value })
              break;
            case 'Arti e scienze umane':
              this.objects.push({ id: `flexCheckLang${key}`, label: "Arti e scienze umane", value: 10, selected: false, totalCourses: value })
              break;
            case 'Matematica e logica':
              this.objects.push({ id: `flexCheckLang${key}`, label: "Matematica e logica", value: 11, selected: false, totalCourses: value })
              break;
            case 'Data Analysis':
              this.objects.push({ id: `flexCheckLang${key}`, label: "Data Analisi", value: 12, selected: false, totalCourses: value })
              break;
            case 'Marketing':
              this.objects.push({ id: `flexCheckLang${key}`, label: "Marketing", value: 17, selected: false, totalCourses: value })
              break;
            case 'Business Essential':
              this.objects.push({ id: `flexCheckLang${key}`, label: "Business Essential", value: 19, selected: false, totalCourses: value })
              break;
            case 'Software Development':
              this.objects.push({ id: `flexCheckLang${key}`, label: "Software Development", value: 21, selected: false, totalCourses: value })
              break;
            case 'Security':
              this.objects.push({ id: `flexCheckLang${key}`, label: "Security", value: 27, selected: false, totalCourses: value })
              break;
            default:
              break;
          }
        }
        for (const [key, value] of Object.entries(this.countLanguage)) {
          switch (key) {
            case 'inglese':
              this.languages.push({ id: `flexCheckLang${key}`, label: "Inglese", value: key, selected: false, totalCourses: value })
              break;
            case 'italiano':
              this.languages.push({ id: `flexCheckLang${key}`, label: "Italiano", value: key, selected: false, totalCourses: value })
              break;

          }
        }
        for (const [key, value] of Object.entries(this.countDurations)) {
          switch (key) {
            case "less_than_2_hours":
              this.durations.push({ id: `flexCheckLang${key}`, label: "Meno di 2 ore", value: key, selected: false, totalCourses: value })
              break;
            case '1_to_4_weeks':
              this.durations.push({ id: `flexCheckLang${key}`, label: "1 - 4 settimane", value: key, selected: false, totalCourses: value })
              break;
            case '1_to_3_months':
              this.durations.push({ id: `flexCheckLang${key}`, label: "1 - 3 mesi", value: key, selected: false, totalCourses: value })
              break;
            case '3_to_6_months':
              this.durations.push({ id: `flexCheckLang${key}`, label: "3 - 6 mesi", value: key, selected: false, totalCourses: value })
              break;
            case '6_to_12_months':
              this.durations.push({ id: `flexCheckLang${key}`, label: "6 - 12 mesi", value: key, selected: false, totalCourses: value })
              break;
            case '1_to_4_years':
              this.durations.push({ id: `flexCheckLang${key}`, label: "1 - 4 anni", value: key, selected: false, totalCourses: value })
              break;
            default:
              break;
          }
        }
        for (const [key, value] of Object.entries(this.countLearningProduct)) {
          switch (key){
            case 'master':
              this.learningProduct.push({ id: `flexCheckLang${key}`, label: "Master", value: key, selected: false, totalCourses: value });
              break;
            case 'course':
              this.learningProduct.push({ id: `flexCheckLang${key}`, label: "Corsi", value: key, selected: false, totalCourses: value });
              break;
            case 'specialization':
              this.learningProduct.push({ id: `flexCheckLang${key}`, label: "Specializzazioni", value: key, selected: false, totalCourses: value });
              break;
            case 'degree_certificate':
              this.learningProduct.push({ id: `flexCheckLang${key}`, label: "Certificati di Lauree", value: key, selected: false, totalCourses: value });
              break;
            case 'degree':
              this.learningProduct.push({ id: `flexCheckLang${key}`, label: "Lauree", value: key, selected: false, totalCourses: value });
              break;
            case 'professional_certificate':
              this.learningProduct.push({ id: `flexCheckLang${key}`, label: "Certificati Professionali", value: key, selected: false, totalCourses: value });
              break;
            case 'diploma':
              this.learningProduct.push({ id: `flexCheckLang${key}`, label: "Diploma", value: key, selected: false, totalCourses: value });
              break;
          }
          
        }
        for (const [key, value] of Object.entries(this.countDifficultyLevel)) {
          switch (key) {
            case 'advanced':
                this.difficultyLevel.push({ id: `flexCheckLang${key}`, label: "Avanzato", value: key, selected: false, totalCourses: value });
                break;
              case 'intermediate':
                this.difficultyLevel.push({ id: `flexCheckLang${key}`, label: "Intermedio", value: key, selected: false, totalCourses: value });
                break;
                case 'beginner':
                this.difficultyLevel.push({ id: `flexCheckLang${key}`, label: "Principiante", value: key, selected: false, totalCourses: value });
                break;
                case 'mixed':
                this.difficultyLevel.push({ id: `flexCheckLang${key}`, label: "Misto", value: key, selected: false, totalCourses: value });
                break;
          }
        }
        for (const [key, value] of Object.entries(this.countEducator)) {
          this.educators.push({ id: `flexCheckLang${key}`, label: key, value: key, selected: false, totalCourses: value })
        }
        this.itemToShowTotalFilter[0] = Object.entries(this.countObject).length;
        this.itemToShowTotalFilter[1] = Object.entries(this.countLanguage).length;
        this.itemToShowTotalFilter[2] = Object.entries(this.countDurations).length;
        this.itemToShowTotalFilter[3] = Object.entries(this.countLearningProduct).length;
        this.itemToShowTotalFilter[4] = Object.entries(this.countDifficultyLevel).length;
        this.itemToShowTotalFilter[5] = Object.entries(this.countEducator).length;

        for (let i: number = 0; i < 6; i++) {
          if (this.itemToShowTotalFilter[i] < 5) {
            this.itemToShowFilter[i] = this.itemToShowTotalFilter[i];
            this.counterFilter[i] = this.itemToShowTotalFilter[i];
            //console.log('[',i,']',this.counterFilter[i])
          } else {
            this.itemToShowFilter[i] = 5;
            this.counterFilter[i] = (this.itemToShowTotalFilter[i] - this.itemToShowFilter[i]);
            //console.log('[',i,']',this.counterFilter[i])
          }
        }

        //console.log("Languages", this.languages);
        //console.log("Duration", this.durations);
        //console.log("LearningProduct",this.learningProduct);
        //console.log("DifficultyLevel", this.difficultyLevel);
        //console.log("Educators", this.educators);
      });
    });


  }
  getInputSearchBar() {
    this.route.queryParams.subscribe(params => {
      this.inputSearchBar = params['q'] || '';
      this.apiFilter.getFilter({ keyword: this.inputSearchBar }).subscribe((item) => { this.filteredCourses = item.courses; console.log("inputSearchBarCourses", this.filteredCourses) });
    })
  }

  ngOnInit(): void {
    this.apiFilter.getFilter({ category_id: this.selectedObjects }).subscribe((item) => { this.filteredCourses = item.courses; console.log("filteredCourses", this.filteredCourses) });
    this.apiFilter.getFilter({ category_id: this.selectedObjects }).subscribe((item) => { this.resCoursesCount = item.courseCounts; console.log("resCoursesCount", this.resCoursesCount) });
    this.getCourseCount();
    this.getInputSearchBar();
    // console.log("inputSearchBar", this.inputSearchBar);
  }


  ngAfterViewInit(): void {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = Array.from(tooltipTriggerList).map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
  }
}
