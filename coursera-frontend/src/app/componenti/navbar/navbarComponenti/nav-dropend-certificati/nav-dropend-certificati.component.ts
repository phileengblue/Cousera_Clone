import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-dropend-certificati',
  templateUrl: './nav-dropend-certificati.component.html',
  styleUrls: ['./nav-dropend-certificati.component.css']
})
export class NavDropendCertificatiComponent {
  @Input() data: any;
  @Input() datamenu: any;
  Elements: any;
  menuElement: any;
 
  ngOnInit(): void {
    this.Elements = this.data
    this.menuElement = this.datamenu

  }
}
