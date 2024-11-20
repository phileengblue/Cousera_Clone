import { Component } from '@angular/core';

@Component({
  selector: 'app-sez-ccommunity',
  templateUrl: './sez-ccommunity.component.html',
  styleUrls: ['./sez-ccommunity.component.css']
})
export class SezCCommunityComponent {
  urlImgPerson1 = "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/N4qrT1XIveNL5SMHSkjTH/b57854e9246bd3aa9fe9ebc51ce650d1/Circle_Kenia.png?auto=format%2Ccompress&dpr=2&w=202&h=202&q=40";
  urlImgPerson2 = "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/66DwUMt1tQTmR4q1JaHPdV/71cbdd4415999eecfcd899283086260c/Circle_Ryan.png?auto=format%2Ccompress&dpr=2&w=202&h=202&q=40";
  urlImgPerson3 = "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/28Nv1NZrGQsLf4kt8CXMdd/66d2002ee1d804a0a1a9729376648060/Vishal_Verma.png?auto=format%2Ccompress&dpr=2&w=202&h=202&q=40";

  isMobileResolution() {
    return (window.innerWidth <= 990) ? false : true;
  }

}
