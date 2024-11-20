import { Component } from '@angular/core';
import { Certificati, link, NbCertificati } from 'src/app/componenti/shared/model/certificati';
import { CourseIndex, Materia } from 'src/app/componenti/shared/model/course-index';
import { DatabaseService } from 'src/app/service/database.service';

@Component({
  selector: 'app-nb-button-esplora',
  templateUrl: './nb-button-esplora.component.html',
  styleUrls: ['./nb-button-esplora.component.css']
})
export class NbButtonEsploraComponent {
  showMessage = false;
  lauree: CourseIndex[] = [];
  certificati: NbCertificati[];
  menuMaterie: Materia[];
  inizia: link[];
  certificatiPP: link[];
  isOpenDropdown: boolean= false;

  constructor(private database: DatabaseService) {
    this.menuMaterie = database.getMenuMaterie();
    this.certificati = database.getNavCertificati();
    this.inizia = database.getInizia();
    this.certificatiPP = database.getCompetenzePP();
  }

  closeDropdown(): void{
    this.isOpenDropdown = !this.isOpenDropdown; 
    console.log("this", this.isOpenDropdown); 
  }

  onMouseOver() {
    this.showMessage = true;
  }

  getCourseIndex() {
    this.database.getInfoCourse().subscribe((data) => { this.lauree = data; })
  }

  ngOnInit(): void {
    this.getCourseIndex();
  }
}
