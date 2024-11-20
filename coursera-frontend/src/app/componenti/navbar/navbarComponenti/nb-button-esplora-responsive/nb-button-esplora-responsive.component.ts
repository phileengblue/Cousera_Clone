import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Certificati, link, NbCertificati } from 'src/app/componenti/shared/model/certificati';
import { CourseIndex, laurea, Materia } from 'src/app/componenti/shared/model/course-index';
import { CourseListComponent } from 'src/app/components/course-list/course-list.component';
import { DatabaseService } from 'src/app/service/database.service';

@Component({
  selector: 'app-nb-button-esplora-responsive',
  templateUrl: './nb-button-esplora-responsive.component.html',
  styleUrls: ['./nb-button-esplora-responsive.component.css']
})
export class NbButtonEsploraResponsiveComponent {
  showMessage:boolean =false;
  lauree : CourseIndex[]= [];
  certificati: NbCertificati[]; 
  menuMaterie: Materia[];
  inizia: link[];
   certificatiPP: link[];
   constructor(private database: DatabaseService, private modalService: NgbModal) {
     this.menuMaterie = database.getMenuMaterie();
     this.certificati = database.getNavCertificati();
     this.inizia = database.getInizia();
     this.certificatiPP = database.getCompetenzePP();
   }
   getCourseIndex(){
    this.database.getInfoCourse().subscribe((data)=>{this.lauree = data;})
  }

  openCoursesModal() {
    const modalRef = this.modalService.open(CourseListComponent);
    modalRef.componentInstance.openCoursesModal();
  }

  ngOnInit(): void {
    this.getCourseIndex();
  }

}
