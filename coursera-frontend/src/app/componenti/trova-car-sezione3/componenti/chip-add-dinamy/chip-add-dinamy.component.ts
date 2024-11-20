import { Component, ElementRef, ViewChild } from '@angular/core';
import { DatabaseService } from 'src/app/service/database.service';

@Component({
  selector: 'app-chip-add-dinamy',
  templateUrl: './chip-add-dinamy.component.html',
  styleUrls: ['./chip-add-dinamy.component.css']
})
export class ChipAddDinamyComponent {
  tags: string[];
  tcCard: any[];
  inputTags: string | null = null;
  initialDisplayedItems: number = 12;
  displayedItems: number = this.initialDisplayedItems;
  isActive: boolean= false;
  activeTags: { [key: string]: boolean } = {};


  constructor(private database: DatabaseService) {
    this.tags = this.database.getCategorLav()
    this.tcCard = this.database.getTCard()
  }

  
  getAllLenCertificates(){
    return this.tcCard.length;
  }

  getLenTag(tag: string | null){
    if(typeof tag == 'string'){
      return this.tcCard.filter(item => item.categorLav == tag).length
    }
    return this.tcCard.length
  }
  
  getLenCertificate(tag: string ){
    return this.tcCard.filter(item => item.categorLav == tag).length
  }

  getCertificate(tag: string | null){
    if(typeof tag == 'string'){
      return this.tcCard.filter(item => item.categorLav == tag)
    }
    return this.tcCard 
  }

  loadMore(){
    return this.displayedItems= this.getAllLenCertificates() ;
  }

  resetDisplay() {
    this.displayedItems = this.initialDisplayedItems;
  }

  toggleClass(tag: string) {
    this.activeTags[tag] = !this.activeTags[tag];
   
  }


}
