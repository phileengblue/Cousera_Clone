import { Component } from '@angular/core';

@Component({
  selector: 'app-head-section',
  templateUrl: './head-section.component.html',
  styleUrls: ['./head-section.component.css']
})
export class HeadSectionComponent {

  isLastStat(stat: any): boolean {
    return this.stats.indexOf(stat) === this.stats.length - 1;
  }

  heroTitle: string = "Rafforza l'occupabilità per attrarre più studenti";
  heroDescription: string = "Fornisci agli studenti le competenze più richieste e preparali al successo lavorativo.";
  contactLink: string = "https://www.coursera.org/campus/learn-more";
  comparePlansLink: string = "https://www.coursera.org/campus/compare-plans";

  stats = [
    { value: "76%", description: "Gli studenti hanno il 76% di probabilità in più di iscriversi a un corso di laurea che offre micro-credenziali del settore", footnote: "[1]" },
    { value: "88%", description: "dei datori di lavoro ritiene che i certificati professionali rafforzino la candidatura di un candidato", footnote: "[2]" },
    { value: "90%", description: "degli studenti concorda sul fatto che il Certificato Professionale li aiuterà a trovare lavoro", footnote: "[3]" }
  ];

}
