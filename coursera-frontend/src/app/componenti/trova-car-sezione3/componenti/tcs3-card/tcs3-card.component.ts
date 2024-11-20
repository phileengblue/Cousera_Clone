import { Component, Input } from '@angular/core';
import { DatabaseService } from 'src/app/service/database.service';

@Component({
  selector: 'app-tcs3-card',
  templateUrl: './tcs3-card.component.html',
  styleUrls: ['./tcs3-card.component.css']
})
export class Tcs3CardComponent {
  @Input() data:any;
  certificate: any;
  tcseCertificate: any;
  constructor(private database: DatabaseService){
    this.tcseCertificate = this.database.getCertificati();
  }
  
  
  ngOnInit():void {
    this.certificate= this.data;
  }
  

}
