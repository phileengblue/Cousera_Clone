import { inject, Injectable } from '@angular/core';
import {
  CardSection,
  CardStart,
  Carousel,
  CourseDC,
  CourseAccess,
  CourseAccordion,
  CourseApi,
  Question,
  StartDegree,
} from '../../models/courseModel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { Course } from '../../models/Course';
import { Difficulty } from '../../models/Difficulty';
import { productType } from '../../models/ProductType';
import { Category } from '../../models/Category';
import { InformationCourse } from '../../models/InformationCourse';
import { ApiResponse } from '../../models/CardHome';

const COURSE_API = `${environment.apiURL}/course/`;
const LOGO_API = `${environment.apiURL}/university/`;

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private http: HttpClient = inject(HttpClient);

  getAllCourse(): Observable<CourseApi[]> {
    return this.http.get<CourseApi[]>(`${COURSE_API}index`);
  }

  private detailsCourse: CourseDC[] = [
    {
      img: '../../../assets/images/google.png',
      title: 'Certificato professionale Google Data Analytics',
      subtitle: `Entrate in una corsia preferenziale per una carriera nel settore dei dati analitici. 
        In questo programma di certificazione, imparerete le competenze più richieste al vostro ritmo, senza bisogno di lauree o esperienze. 
        Iscrivetevi oggi stesso e avrete accesso a Google AI Essentials senza alcun costo. L'offerta termina l'8/5*`,
      logo: '../../../assets/images/google_round.png',
      instructor: 'Google Career Certificates',
      hasMainInstructor: true,
      help: 'È disponibile un aiuto finanziario',
      registered: '2.236.415',
      plus: '../../../assets/images/coursera_plus.png',

      series: '8',
      credential:
        'Ottieni una credenziale di carriera che dimostri la tua competenza',

      rateText: [
        {
          rate: '4.8',
          star: '../../../assets/images/star.png',
          review: '138.423',
        },
      ],
      infoImg: '../../../assets/images/info.png',
      level: 'Principiante',
      hours: '6 mesi, 10 ore',

      info: {
        textArray: [
          {
            text: 'Acquisire una conoscenza approfondita delle pratiche e dei processi utilizzati da un analista di dati junior o associato nel suo lavoro quotidiano.',
          },
          {
            text: 'Imparare le principali competenze analitiche (pulizia, analisi e visualizzazione dei dati) e gli strumenti (fogli di calcolo, SQL, programmazione R, Tableau). ',
          },
          {
            text: `Capire come pulire e organizzare i dati per l'analisi e completare analisi e calcoli utilizzando fogli di calcolo, SQL e programmazione R.`,
          },
          {
            text: 'Imparare a visualizzare e presentare i risultati dei dati in dashboard, presentazioni e piattaforme di visualizzazione comunemente utilizzate.',
          },
        ],
        skills: [
          { skill: 'Data Analysis' },
          { skill: 'Creating case studies' },
          { skill: 'Data Visualization' },
          { skill: 'Data Cleasing' },
          { skill: 'Developing a portfolio' },
          { skill: 'Data Collection' },
          { skill: 'Spreadsheet' },
          { skill: 'Metadata' },
          { skill: 'SQL' },
          { skill: 'Data Ethics' },
          { skill: 'Data Aggregation' },
          { skill: 'Data Calculation' },
          { skill: 'R Markdown' },
          { skill: 'R Programming' },
          { skill: 'Rstudio' },
          { skill: 'Tableau Software' },
          { skill: 'Presentation' },
          { skill: 'Data Integrity' },
          { skill: 'Sample Size Determination' },
          { skill: 'Decision-Making' },
          { skill: 'Problem Solving' },
          { skill: 'Questioning' },
        ],
      },
      results: {
        job_img: '../../../assets/images/course_results/job.png',
        salary: '92.000 USD+',
        job_positions: '483.000+',
        positive_outcome: '75%',
        texts: [
          {
            text: 'Ricevi una formazione di livello professionale da Google',
          },
          {
            text: 'Dimostra la tua competenza in progetti pronti per il portfolio',
          },
          {
            text: 'Ottieni una certificazione di completamento riconosciuto da Google',
          },
          {
            text: 'Qualificati per i titoli di lavoro più richiesti: Data Analyst, Junior Data Analyst, Associate Data Analyst',
          },
        ],
        job_title: 'Data Analytics',
      },
      information: [
        {
          name: 'Google',
          courses: 324,
          participants: '10.175.520',
        },
      ],
      macroCategory: 'Data Analysis',
    },
  ];

  private resultsCourse: CourseAccess[] = [
    {
      summary: [
        {
          icon: '../../../assets/images/course_results/resume.svg',
          label:
            'Migliorate il vostro curriculum e LinkedIn con un feedback personalizzato',
          title: 'Revisione del curriculum',
        },
        {
          icon: '../../../assets/images/course_results/interview.svg',
          label:
            'Esercitate le vostre capacità con strumenti interattivi e simulazioni di colloquio',
          title: 'Preparazione al colloquio',
        },
        {
          icon: '../../../assets/images/course_results/career.svg',
          label:
            'Pianificate la vostra carriera con la guida alla ricerca di lavoro di Coursera',
          title: 'Supporto alla carriera',
        },
      ],
      connect:
        'Connettetevi con oltre 150 organizzazioni statunitensi che assumono personale nel consorzio dei datori di lavoro di Google.',
      img_folder: [
        {
          img_access: '../../../assets/images/google.png',
        },
        {
          img_access: '../../../assets/images/course_results/saleforce.png',
        },
        {
          img_access: '../../../assets/images/course_results/adobe.png',
        },
        {
          img_access: '../../../assets/images/course_results/t-mobile.png',
        },
        {
          img_access: '../../../assets/images/course_results/wells_fargo.png',
        },
      ],
      info: `¹Lightcast™ US Job Postings (stipendio mediano con 0-5 anni di esperienza), 1 gennaio 2022 - 31 dicembre 2022).
²Esito di carriera positivo (ad esempio, nuovo lavoro, promozione o aumento) entro sei mesi dal completamento del programma. In base al sondaggio tra i laureati del programma, Stati Uniti 2022.
*Richiedete questa offerta a tempo limitato entro il 5 agosto, ore 23:59 PT. Valida solo per l'acquisto di un nuovo certificato professionale Google, limitato a uno per persona. Offerta valida solo per le versioni del certificato in inglese e spagnolo. Non può essere utilizzata insieme ad altre offerte. Coursera si riserva il diritto di modificare o annullare la promozione in qualsiasi momento. L'iscrizione gratuita a Google AI Essentials si attiva con l'acquisto di un abbonamento al Certificato professionale Google. L'accesso a Google AI Essentials è di 180 giorni dalla data di acquisto del Certificato professionale Google. Coursera si riserva il diritto di revocare l'accesso a Google AI Essentials se il discente non paga il Certificato professionale Google. Il valore dell'offerta può variare in base alla località. Si applicano i termini delle offerte promozionali.`,
      letter: 'Ottieni un certificato di carriera',
      description: `Aggiungi questa credenziale al tuo profilo LinkedIn o al tuo curriculum 
Condividilo sui social media e nella tua valutazione delle prestazioni`,
      img_letter: '../../../assets/images/course_results/letters.png',
    },
  ];

  private accordionCourse: CourseAccordion[] = [
    {
      title: 'Certificato professionale',
      series: '8 serie di corsi',
      contex: [
        {
          text: `Preparatevi a una nuova carriera nel settore in forte crescita dell'analisi dei dati, senza bisogno di esperienza o laurea. Riceverete una formazione professionale progettata da Google e avrete l'opportunità di entrare in contatto con i migliori datori di lavoro.`,
        },
        {
          text: `Ci sono 483.000 posti di lavoro aperti nel settore dell'analisi dei dati, con uno stipendio mediano di ingresso di 92.000 dollari¹.`,
          isBold: true,
        },
        {
          text: `L'analisi dei dati`,
          isBold: true,
        },
        {
          text: `è la raccolta, la trasformazione e l'organizzazione dei dati al fine di trarre conclusioni, fare previsioni e prendere decisioni informate. `,
        },
        {
          text: `Nell'arco di 8 corsi, acquisite le competenze più richieste per prepararvi a un lavoro di primo livello. Imparerete dai dipendenti di Google le cui basi nell'analisi dei dati sono servite da trampolino di lancio per le loro carriere. Con meno di 10 ore a settimana, potrete completare il certificato in meno di 6 mesi. `,
        },
        {
          text: `Una volta completato, potrete candidarvi direttamente per lavorare con Google e oltre 150 datori di lavoro statunitensi, tra cui Deloitte, Target, Verizon e, naturalmente, Google. `,
        },
        {
          text: `Il 75% dei diplomati riferisce di aver ottenuto un risultato di carriera positivo (ad esempio, un nuovo lavoro, una promozione o un aumento) entro sei mesi dal completamento del corso².`,
          isBold: true,
        },
        {
          text: `¹Lightcast™ US Job Postings (2022: 1 gennaio 2022 - 31 dicembre 2022)`,
        },
        {
          text: `²Sulla base del sondaggio tra i laureati del programma, Stati Uniti 2022`,
        },
        {
          text: `Progetto di apprendimento applicato`,
        },
        {
          text: `Questo programma comprende oltre 180 ore di istruzione e centinaia di valutazioni basate sulla pratica, che vi aiuteranno a simulare scenari di analisi dei dati del mondo reale, fondamentali per il successo sul posto di lavoro. I contenuti sono altamente interattivi e sviluppati esclusivamente da dipendenti di Google con decenni di esperienza nell'analisi dei dati. Attraverso un mix di video, valutazioni e laboratori pratici, verrete introdotti agli strumenti e alle piattaforme di analisi e alle competenze analitiche chiave necessarie per un lavoro di primo livello.`,
        },
        {
          text: `Le competenze che acquisirete comprendono:`,
          isBold: true,
        },
        {
          text: `Pulizia dei dati, risoluzione dei problemi, pensiero critico, etica dei dati e visualizzazione dei dati.`,
        },
        {
          text: `Le piattaforme e gli strumenti che imparerete includono:`,
          isBold: true,
        },
        {
          text: `Presentazioni, fogli di calcolo, SQL, Tableau e programmazione R.`,
        },
        {
          text: `Oltre alla formazione di esperti e ai progetti pratici, completerete un caso di studio che potrete condividere con potenziali datori di lavoro per mostrare le vostre nuove competenze. Imparate le competenze concrete che i migliori datori di lavoro stanno assumendo in questo momento.`,
        },
      ],
      course_info: [
        {
          course_title: 'Foundations: Data, Data, Everywhere',
          course_id: 1,
          course_hours: '18 ore',
          multi_text: [
            {
              text: `Definire e spiegare i concetti chiave coinvolti nell'analisi dei dati, tra cui dati, analisi dei dati ed ecosistemi di dati.`,
            },
            {
              text: `Effettuare un'autovalutazione del pensiero analitico fornendo esempi specifici di applicazione del pensiero analitico.`,
            },
            {
              text: `Discutere il ruolo dei fogli di calcolo, dei linguaggi di interrogazione e degli strumenti di visualizzazione dei dati nell'analisi dei dati.`,
            },
            {
              text: `Descrivete il ruolo di un analista di dati con specifico riferimento alle mansioni.`,
            },
          ],
          course_rate: [
            {
              rate: '4.8',
              star: '../../../assets/images/star.png',
              review: '102.857 valutazioni',
            },
          ],
          skills: [
            {
              skill: 'Spreadsheet',
            },
            {
              skill: 'Data Integrity',
            },
            {
              skill: 'Sample Size Determination',
            },
            {
              skill: 'SQL',
            },
            {
              skill: 'Data Cleansing',
            },
          ],
        },
        {
          course_title: 'Ask Questions to Make Data-Driven Decisions',
          course_id: 2,
          course_hours: '21 ore',
          multi_text: [
            {
              text: `Spiegare come la road map per la risoluzione dei problemi si applica ai tipici scenari di analisi. `,
            },
            {
              text: `Discutere l'uso dei dati nel processo decisionale.`,
            },
            {
              text: `Dimostrare l'uso di fogli di calcolo per completare i compiti di base dell'analista di dati, tra cui l'inserimento e l'organizzazione dei dati.`,
            },
            {
              text: `Descrivere le idee chiave associate al pensiero strutturato.`,
            },
          ],
          course_rate: [
            {
              rate: '4.7',
              star: '../../../assets/images/star.png',
              review: '31.431 valutazioni',
            },
          ],
          skills: [
            {
              skill: 'Data Analysis',
            },
            {
              skill: 'Creating case studies',
            },
            {
              skill: 'Data Visualization',
            },
            {
              skill: 'Data Cleansing',
            },
            {
              skill: 'Developing a portfolio',
            },
          ],
        },
      ],
    },
  ];

  private degree: StartDegree[] = [
    {
      text: 'Una volta completato questo Certificato professionale, puoi ottenere crediti universitari se vieni ammesso e ti iscrivi a uno dei seguenti corsi di laurea online.¹ ',
      img_credit: '../../../assets/images/course_results/degree.png',
      text_degree: `Questo Certificato professionale ha una raccomandazione ACE®. E idoneo per i crediti universitari presso i college e le università statunitensi partecipanti. Nota: la decisione di accettare specifiche raccomandazioni di credito spetta a ciascun istituto. `,
    },
  ];

  private peopleCarousel: Carousel[] = [
    {
      img: '../../../assets/images/people/scott.png',
      review: `Si tratta di un'ottima guida al mondo dell'analisi dei dati.
analitici. Utilizzando gli strumenti appresi nel corso del certificato, ho creato un portfolio di esempi di lavoro che mostravano le mie
capacità di analista, e sono riuscito a uscire dall'istruzione e ad assicurarmi una
e mi sono assicurata una posizione a tempo pieno nel settore dell'analisi dei dati.`,
      name: 'Scott H.',
      course: `Learning from the U.S. 
      Google Data Analytics`,
    },
    {
      img: '../../../assets/images/people/rakshith.png',
      review: `I corsi del Certificato professionale di Google Data Analytics
sono stati perfettamente adattati ai principianti. Sono molto grato di aver scoperto
aver scoperto Coursera e sono grata a Google per aver creato un programma
un programma così grande e ricco di informazioni. Ho acquisito così tante
competenze!`,
      name: 'Rakshith S.',
      course: `Learning from India
Google Data Analytics`,
    },
    {
      img: '../../../assets/images/people/maria.png',
      review: `Arrivando in America con una laurea conseguita in un altro paese, sapevo che avrei avuto bisogno di una
sapevo che avrei avuto bisogno di una formazione aggiuntiva per raggiungere i miei obiettivi professionali. Grazie a Google e Coursera per questa straordinaria opportunità!`,
      name: 'Mariia S.',
      course: `Learning from the U.S.
Google Data Analytics`,
    },
  ];

  private CardStart: CardStart[] = [
    {
      title: `Fogli Google vs. Excel: qual è la Differenza?`,
      date: '3 aprile 2024',
      subtitle: 'Articolo',
    },
    {
      title: `Certificazione Google Analytics: vantaggi e come ottenerlo`,
      date: '5 marzo 2024',
      subtitle: 'Articolo',
      duration: '• 4 min lettura',
    },
    {
      title: `Dashboard di Google Analytics: cos'è e come iniziare`,
      date: '15 giugno 2023',
      subtitle: 'Articolo',
    },
    {
      title: `Come aggiungere o eliminare una colonna in Fogli di Google`,
      date: '29 novembre 2023',
      subtitle: 'Articolo',
    },
  ];

  private card: CardSection[] = [
    {
      title: 'Apri nuove porte con Coursera',
      text: 'Accesso illimitato a oltre 7.000 corsi di alto livello, progetti pratici e programmi di certificazione pronti per il lavoro',
      img_card: '../../../assets/images/people/degree.png',
      href: 'Scopri di più',
    },
    {
      title: 'Avanza di carriera con una laurea online',
      text: 'Ottieni una laurea da università di livello mondiale - 100% online',
      img_card: '../../../assets/images/people/desk.png',
      href: 'Scopri le lauree',
    },
    {
      title: 'Unisciti alle oltre 3.400 aziende globali che scelgono Coursera',
      text: `Aggiornati per eccellere nell'economia digitale`,
      img_card: '../../../assets/images/people/study.png',
      href: 'Scopri di più',
    },
  ];

  private question: Question[] = [
    {
      title: `Cos'è l'analisi dei dati?`,
      question: `I dati sono un gruppo di fatti che possono assumere molte forme diverse, come numeri, immagini parole, video, osservazioni e altro ancora. I dati analitici sono la raccolta, la trasformazione e l'organizzazione e organizzazione di questi fatti al fine di trarre conclusioni, fare previsioni e di prendere decisioni informate. Le aziende hanno bisogno di analisti dei dati per per prendere decisioni sui loro prodotti, servizi o strategie aziendali, servizi o strategie aziendali.`,
    },
    {
      title: `Perché intraprendere una carriera nell'analisi dei dati?`,
      question: `Gli analisti di dati danno un senso ai dati e ai numeri per aiutare le organizzazioni a prendere decisioni aziendali. Preparano, elaborano, e visualizzano i dati, scoprendo schemi e tendenze e rispondendo alle domande più importanti. Tendenze e rispondono a domande chiave lungo il percorso. domande chiave lungo il percorso. Il loro lavoro il loro lavoro consente al loro team più ampio di prendere decisioni aziendali.`,
    },
    {
      title: `Che tipo di aziende assumono professionisti di Data Analytics?`,
      question: `Organizzazioni di tutti i tipi, in settori intrattenimento, finanza, sanità, tecnologia e altro ancora, hanno bisogno di analisti di dati tecnologia e altro ancora, hanno bisogno di analisti di dati che li aiutino a migliorare i processi e a lanciare nuovi prodotti. nuovi prodotti.`,
    },
    {
      title: `Quanto costa questo certificato?`,
      question: `Negli Stati Uniti e in Canada, Coursera fa pagare 49€ al mese dopo il periodo iniziale di prova gratuita di 7 giorni iniziale di 7 giorni. Il certificato Google Data Analytics può essere completato in meno di 6 mesi con meno di 10 ore a settimana di studio part-time, quindi la maggior parte degli studenti può completare il certificato con meno di 300 dollari USA. In altri Paesi dove sono disponibili i Certificati di Carriera Google disponibili, il costo potrebbe essere inferiore.`,
    },
  ];



  getCourseData(): CourseDC[] {
    return this.detailsCourse;
  }

  getCourseAccess(): CourseAccess[] {
    return this.resultsCourse;
  }

  getCourseAccordion(): CourseAccordion[] {
    return this.accordionCourse;
  }

  getStartDegree(): StartDegree[] {
    return this.degree;
  }

  getPeopleCarousel(): Carousel[] {
    return this.peopleCarousel;
  }

  getAllCardStart(): CardStart[] {
    return this.CardStart;
  }

  getCard(): CardSection[] {
    return this.card;
  }

  getQuestion(): Question[] {
    return this.question;
  }

  addCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(`${COURSE_API}store`, course);
  }

  getCourse(): Observable<Course[]> {
    return this.http.get<Course[]>(`${COURSE_API}index`);
  }

  getAllInformation(): Observable<InformationCourse> {
    return this.http.get<InformationCourse>(`${COURSE_API}getAllInformations`);
  }

  getCarouselCards(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${COURSE_API}indexHomePage`);
  }

  getUniversity(): Observable<any> {
    return this.http.get<any>(`${LOGO_API}index`);
  }
}
