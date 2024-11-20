import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-middle-section',
  templateUrl: './middle-section.component.html',
  styleUrls: ['./middle-section.component.css']
})
export class MiddleSectionComponent {



  // Proprietà per i testi e immagini
  courseText: string = 'Offri agli studenti 5.400 corsi di oltre 275 università e partner industriali di spicco';
  careerAcademyText: string = 'Prepara i tuoi studenti per i lavori più richiesti';
  descriptionText: string = 'Rafforza l\'occupabilità degli studenti con la formazione di aziende leader a livello mondiale.';
  certificateTitle: string = 'Certificati professionali';
  videoTitle: string = 'Scoprite perché gli studenti e i datori di lavoro apprezzano i certificati professionali.';
  videoDescription1: string = 'Un\'indagine condotta su 5.000 studenti e datori di lavoro in 11 Paesi ha rivelato che la maggioranza apprezza i certificati professionali per i risultati occupazionali.';
  videoDescription2: string = 'Utilizzate queste informazioni per migliorare il vostro programma di studi e rafforzare i risultati occupazionali.';
  
  courseImg: string = 'https://images.ctfassets.net/2pudprfttvy6/2eC1z7LVc0mMog2PnVxS5u/71d96c6d0c8dad9f8cae5b0881385e6e/BC-2700_B2B_Homepage_Partner_Logo_Refresh_April_2024.png';
  academyImg: string = 'https://images.ctfassets.net/2pudprfttvy6/22Idxx2D2dyALpIoJznkQD/fba6cc9a2cce8aa1832a5af642af6dfb/c4c-image-home-career-academy.jpg';
  videoThumbnail: string = 'https://images.ctfassets.net/2pudprfttvy6/4YrsS5uFJHzicV0uAlKqqX/efd1e65d0d442630c307774e550e01cc/cover_image_option_1.jpg';
  videoSrc: string = 'https://videos.ctfassets.net/2pudprfttvy6/6b2EfyipwGqDqpB8zqJPDH/f9bb19fd48c78afff047e809b4b73c2d/courseramicrocred_09may23__720p_.mp4';

  videoPlaying: boolean = false;




  // Stato che determina se il video è in riproduzione
  

  // Usa ViewChild per accedere direttamente all'elemento video
  @ViewChild('videoElement') videoElement!: ElementRef<HTMLVideoElement>;

  // Funzione per avviare il video
  playVideo() {
    this.videoPlaying = true; // Nasconde l'immagine e l'icona play
    const video: HTMLVideoElement = this.videoElement.nativeElement;
    video.play(); // Avvia la riproduzione del video
  }

  // Funzione chiamata quando il video inizia a riprodursi
  onVideoPlay() {
    this.videoPlaying = true; // Nasconde l'immagine di anteprima e l'icona
  }
}
