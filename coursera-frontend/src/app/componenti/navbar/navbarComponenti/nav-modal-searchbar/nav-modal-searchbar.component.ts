import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/service/database.service';

@Component({
  selector: 'app-nav-modal-searchbar',
  templateUrl: './nav-modal-searchbar.component.html',
  styleUrls: ['./nav-modal-searchbar.component.css'],
})
export class NavModalSearchbarComponent {
  options: any[];
  filteredOptions: any[];
  inputValue: string = '';
  showModal: boolean= false;

  constructor(private database: DatabaseService, private router:Router){
    this.options= database.getCertificati();
    this.filteredOptions = this.options;
  }

  onChange(event: Event): void {
    const input = event.target as HTMLInputElement;

    this.filteredOptions = this.options.filter(option => option.title.toLowerCase().indexOf(input.value) !== -1);
    this.inputValue = input.value;
  }

  trackByCategory(index: number, option: any): string {
    return option.title;
  }

  isShowModal(){
    this.showModal= !this.showModal;
  }

  onSearch(){
      this.router.navigate(['/page_filter'], {queryParams: {q: this.inputValue}})
      this.showModal = !this.showModal;
  }
}
