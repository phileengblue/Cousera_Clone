import { Component, Input } from '@angular/core';
import { DatabaseService } from 'src/app/service/database.service';


@Component({
  selector: 'app-nav-dropend',
  templateUrl: './nav-dropend.component.html',
  styleUrls: ['./nav-dropend.component.css']
})
export class NavDropendComponent {

  constructor(private database: DatabaseService){}

  @Input() data: any;
  @Input() datamenu: any;
  Elements: any;
  menuElement: any;

  ngOnInit(): void {
    this.Elements = this.data
    console.log(this.Elements)
    this.menuElement = this.datamenu
  }

}
