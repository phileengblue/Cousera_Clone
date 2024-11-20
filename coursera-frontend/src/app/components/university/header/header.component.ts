import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() {}


  ngOnInit(): void {
    this.adjustComponentToShow(window.innerWidth);
  }


componentToShow = 5


  sections = [
    { title: 'Accredited diploma', content: 'Offered by University of Michigan.' },
    { title: 'Taught in English', content: 'Engage in group discussions with professors and peers.' },
    { title: '12 - 36 months', content: 'Approximate depending on course load.' },
    { title: '100% online', content: 'Hands-on learning from anywhere, no travel required.' },
    { title: '$34,759 - $46,149 USD', content: 'A student\'s tuition rate is determined by residency.' }
  ];

  visibleCount = this.sections.length;

  get visibleSections() {
    return this.sections.slice(0, this.componentToShow);
  }

  showMoreComponents() {
    if (this.componentToShow < this.sections.length) {
      this.componentToShow += 3;
    }
  }

  hiddenComponents() {
    if (this.componentToShow > 3) {
      this.componentToShow -= 3;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const width = (event.target as Window).innerWidth;
    this.adjustComponentToShow(width);
  }

  private adjustComponentToShow(width: number) {
    if (width > 600) {
      this.componentToShow = 5;
    } else if (this.componentToShow > 3) {
      this.componentToShow = 2;
    }
  }

  
}
