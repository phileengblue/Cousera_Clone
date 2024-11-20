import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseService } from 'src/app/service/database.service';

@Component({
  selector: 'app-nav-searchbar',
  templateUrl: './nav-searchbar.component.html',
  styleUrls: ['./nav-searchbar.component.css']
})
export class NavSearchbarComponent {
  options: any[];
  filteredOptions: any[];
  inputValue: string = '';

  constructor(private database: DatabaseService, private router:Router){
    this.options= database.getNavCertificati();
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
  onSearch(){
      this.router.navigate(['/page_filter'], {queryParams: {q: this.inputValue}})
  }
}
