import { Component, inject, Input } from '@angular/core';
import { DateService } from 'src/app/shared/service/date/date.service';

@Component({
  selector: 'app-button-date',
  templateUrl: './button-date.component.html',
  styleUrls: ['./button-date.component.css'],
})
export class ButtonDateComponent {
  @Input() padding?: string = '';

  date: Date = new Date();
  formattedDate: string = '';

  private dateService: DateService = inject(DateService);

  ngOnInit(): void {
    this.formattedDate = this.dateService.formatDate(this.date);
  }
}
