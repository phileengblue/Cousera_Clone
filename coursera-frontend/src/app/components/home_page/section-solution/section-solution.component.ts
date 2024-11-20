import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-section-solution',
  templateUrl: './section-solution.component.html',
  styleUrls: ['./section-solution.component.css']
})
export class SectionSolutionComponent implements OnInit {
  isMobile = false;
  

  constructor(private breakpointObserver: BreakpointObserver) { }


  enterpriseText = {
    title: "La soluzione ideale per la vostra azienda",
    description: "Ottenete l'apprendimento e lo sviluppo di livello mondiale scelto dalle migliori organizzazioni di tutto il mondo. Tutto su Coursera for Business.",
    buttonText: "Scoprire Coursera for Business",
    smallTeamText: "Vuoi aggiornare un piccolo team?",
    smallTeamLinkText: "Scopri Coursera for Teams",
    businessLink: "/business?utm_campaign=website&utm_content=banner-from-B2C-home-for-enterprise&utm_medium=coursera&utm_source=enterprise",
    teamsLink: "/business/teams?utm_campaign=website&utm_content=banner-from-B2C-home-for-teams&utm_medium=coursera&utm_source=enterprise"
  };

  logos = [
    { src: "https://images.ctfassets.net/wp1lcwdav1p1/13nB6DdjBJdV5aWWWB5DbH/115574ebbc6de3dffd98daed665dc736/loreal.svg", alt: "L'OREAL Logo", class:"loreal-class"},
    { src: "https://images.ctfassets.net/wp1lcwdav1p1/2aaUOe2Jitm1Z6OPdylXsL/37974ceb0982ccf2c6fabf3fa6bdb5bc/pandg.svg", alt: "Procter & Gamble Logo" },
    { src: "https://images.ctfassets.net/wp1lcwdav1p1/2gSh2ySvHF7nLxtb9dlQEt/764bae06b9276de25caa4ed11bf14000/tata.svg", alt: "Tata Communications Logo" },
    { src: "https://images.ctfassets.net/wp1lcwdav1p1/6cQLsEIdYwjlG4whpJ0bau/5cb01b12278ee726314800c15f08c5e2/DANONE_LOGO.png", alt: "Danone Logo" },
    { src: "https://images.ctfassets.net/wp1lcwdav1p1/46IDJ7jA1jOzKUcuJEdv9x/bccbe406253ab481290052d1580d7eae/Emirates_NBD_logo.png", alt: "Emirates NBD Logo" },
    { src: "https://images.ctfassets.net/wp1lcwdav1p1/2jYSxpX0am6lmzOXiF01eb/b2dad4d9e4844a15e828990aa09b6377/Reliance_logo-2.svg", alt: "Reliance Industries Limited Logo" },
    { src: "https://images.ctfassets.net/wp1lcwdav1p1/1GFMf2tN2JubXPXodUfEhU/f60a309a58fd4a5e750f0497e24a52ab/logo-capgemini.svg", alt: "Capgemini Logo" },
    { src: "https://images.ctfassets.net/wp1lcwdav1p1/1Td6rChmrhf755FaNcHMkw/7f172851005dc6275667c667ffa2678a/logo-petrobras.svg", alt: "BR Petrobras Logo" },
    { src: "https://images.ctfassets.net/wp1lcwdav1p1/7ynjohQJbi7h24Qk5uUyPW/399503cb97a2775554f28921721d6fd1/General_Electric_logo.svg", alt: "General Electric Logo" }
  ];



  ngOnInit(): void {
    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe((result) => {
        this.isMobile = result.matches;
      });
  }
}
