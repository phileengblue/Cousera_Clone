import { Component, Input } from '@angular/core';
import { Materia } from 'src/app/componenti/shared/model/course-index';

@Component({
  selector: 'app-nav-dropend-materie',
  templateUrl: './nav-dropend-materie.component.html',
  styleUrls: ['./nav-dropend-materie.component.css']
})
export class NavDropendMaterieComponent {
  @Input() data: any;
  @Input() datamenu: any;
  @Input() dataFor: any
  @Input() dataCertificati: any;
  @Input() dataInizia: any;
  @Input() dataCompetenzePP: any;
  Elements: any;
  menuElement: any;
  Materiafor: any;
  Certificati: any;
  Inizia: any;
  CompetenzePP: any;

  ngOnInit(): void {
    this.Elements = this.data
    this.menuElement = this.datamenu
    this.Materiafor = this.dataFor
    this.Certificati = this.dataCertificati;
    this.Inizia =this.dataInizia;
    this.CompetenzePP =this.dataCompetenzePP;
  }

  showVisibileLauree(MateriaId:number): boolean {
    for(let element of this.Elements ) {
      if(element.category_id == MateriaId) {
        return false;
      }
      }
      return true;
 }

  showVisibileCPP(Materia:string): boolean {
    for(let element of this.CompetenzePP ) {
      if(element.category == Materia) {
        return false;
      }
      }
      return true;
 }

 showVisibileInizia(Materia:string): boolean {
  for(let element of this.Inizia ) {
    if(element.category == Materia) {
      return false;
    }
    }
    return true;
}

showVisibileCertificati(Materia: string): boolean {
  for(let element of this.Certificati ) {
    if(element.category == Materia) {
      return false;
    }
    }
    return true;
}

}
