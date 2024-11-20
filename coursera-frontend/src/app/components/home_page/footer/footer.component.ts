import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  
  socialLinks: any;

  
  ia = [
    { text: 'Corso DLAI sull`AI per tutti', url: 'https://www.coursera.org/' },
    { text: 'Specializzazione in Deep Learning DLAI', url: 'https://www.coursera.org/' },
    { text: 'Corso DLAI GenAI con LLMs', url: 'https://www.coursera.org/' },
    { text: 'Google AI Essentials', url: 'https://www.coursera.org/' },
    { text: 'Corso Google Cloud Introduzione alla Generative AI', url: 'https://www.coursera.org/' },
    { text: 'Certificato Professional Certificate del Product Manager IBM AI', url: 'https://www.coursera.org/' },
    { text: 'Specializzazione in apprendimento automatico a Stanford', url: 'https://www.coursera.org/' },
    { text: 'Vanderbilt Prompt Engineering per il corso ChatGPT', url: 'https://www.coursera.org/' },
    { text: 'Tutti i corsi di Artificial Intelligence', url: 'https://www.coursera.org/' },
    
  ];

  career = [
    { text: 'Certificato professionale di Cybersecurity di Google', url: 'https://www.coursera.org/' },
    { text: 'Certificato professionale di Google Data Analytics', url: 'https://www.coursera.org/' },
    { text: 'Professional Certificate di Google Digital Marketing', url: 'https://www.coursera.org/' },
    { text: 'Certificato professionale di Project Management di Google', url: 'https://www.coursera.org/' },
    { text: 'Certificato professionale di Google UX Design', url: 'https://www.coursera.org/' },
    { text: 'Certificato professionale IBM Data Science', url: 'https://www.coursera.org/' },
    { text: 'Certificato professionale di analista di dati Microsoft Power BI', url: 'https://www.coursera.org/' },
    { text: 'Tutti i certificati di carriera', url: 'https://www.coursera.org/' }
  ];

  subjects = [
    { text: 'Sicurezza informatica', url: 'https://www.coursera.org/' },
    { text: 'Analisi dei dati', url: 'https://www.coursera.org/' },
    { text: 'Data Science', url: 'https://www.coursera.org/' },
    { text: 'Marketing digitale', url: 'https://www.coursera.org/' },
    { text: 'IA generativa', url: 'https://www.coursera.org/' },
    { text: 'Gestione del progetto', url: 'https://www.coursera.org/' },
    { text: 'Python', url: 'https://www.coursera.org/' },
    { text: 'Tutti i corsi', url: 'https://www.coursera.org/' }
  ];

  resources = [
    { text: 'Come diventare analista di dati', url: 'https://www.coursera.org/' },
    { text: 'Come ottenere la certificazione PMP', url: 'https://www.coursera.org/' },
    { text: 'Certificazioni popolari di sicurezza informatica', url: 'https://www.coursera.org/' },
    { text: 'Certificazioni popolari di analisi dei dati', url: 'https://www.coursera.org/' },
    { text: 'Certificazioni IT più diffuse', url: 'https://www.coursera.org/' },
    { text: 'Certificazioni popolari sull`apprendimento automatico', url: 'https://www.coursera.org/' },
    { text: 'Certificazioni SQL più diffuse', url: 'https://www.coursera.org/' },
    { text: 'Hub di consulenza e approfondimenti sulla carriera', url: 'https://www.coursera.org/' }
  ];

  courseraLinks = [
    { text: 'Informazioni', url: 'https://www.coursera.org/' },
    { text: 'Cosa offriamo', url: 'https://www.coursera.org/' },
    { text: 'Carriere', url: 'https://www.coursera.org/' },
    { text: 'Careers', url: 'https://www.coursera.org/' },
    { text: 'Catalogo', url: 'https://www.coursera.org/' },
    { text: 'Coursera Plus', url: 'https://www.coursera.org/' },
    { text: 'Certificati professionali', url: 'https://www.coursera.org/' },
    { text: 'Certificati MasterTrack®', url: 'https://www.coursera.org/' },
    { text: 'lauree', url: 'https://www.coursera.org/' },
    { text: 'Per le imprese', url: 'https://www.coursera.org/' },
    { text: 'Per il governo', url: 'https://www.coursera.org/' },
    { text: 'Per il Campus', url: 'https://www.coursera.org/' },
    { text: 'Diventa un partner', url: 'https://www.coursera.org/' },
    { text: 'Impatto sociale', url: 'https://www.coursera.org/' },
    { text: 'Corsi gratuiti', url: 'https://www.coursera.org/' },
    { text: 'Raccomandazioni sui crediti ECTS', url: 'https://www.coursera.org/' }
  ];

  community = [
    { text: 'studenti', url: 'https://www.coursera.org/' },
    { text: 'Partner', url: 'https://www.coursera.org/' },
    { text: 'Beta Testers', url: 'https://www.coursera.org/' },
    { text: 'Blog', url: 'https://www.coursera.org/' },
    { text: 'il podcast di Coursera', url: 'https://www.coursera.org/' },
    { text: 'Blog di tecnologia', url: 'https://www.coursera.org/' },
    { text: 'Centro di insegnamento', url: 'https://www.coursera.org/' }
  ];

  moreLinks = [
    { text: 'Stampa', url: 'https://www.coursera.org/' },
    { text: 'Investitori', url: 'https://www.coursera.org/' },
    { text: 'Condizioni', url: 'https://www.coursera.org/' },
    { text: 'Privacy', url: 'https://www.coursera.org/' },
    { text: 'Aiuto', url: 'https://www.coursera.org/' },
    { text: 'Accessibilità', url: 'https://www.coursera.org/' },
    { text: 'Contatto', url: 'https://www.coursera.org/' },
    { text: 'Articoli', url: 'https://www.coursera.org/' },
    { text: 'Elenco', url: 'https://www.coursera.org/' },
    { text: 'Affiliati', url: 'https://www.coursera.org/' },
    { text: 'Dichiarazione sulla schiavitù moderna', url: 'https://www.coursera.org/' },
    { text: 'Gestisci preferenze relative ai cookie', url: 'https://www.coursera.org/' }
  ];

  links = [
    { src: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d3njjcbhbojbot.cloudfront.net/web/images/icons/download_on_the_app_store_badge_en.svg?auto=format%2Ccompress&dpr=2&w=152&h=45&q=40', alt: 'Download on the App Store', url: 'https://www.coursera.org/' },
    { src1: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d3njjcbhbojbot.cloudfront.net/web/images/icons/en_generic_rgb_wo_45.png?auto=format%2Ccompress&dpr=2&w=152&h=45&q=40', alt: 'Get it on Google Play', url: 'https://www.coursera.org/' },
    { src2: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d3njjcbhbojbot.cloudfront.net/web/images/icons/2018-B-Corp-Logo-Black-S.png?auto=format%2Ccompress&dpr=2&w=151&h=120&q=40', alt: 'B Corp Logo', url: 'https://www.coursera.org/' }
  ];

  socialMedia = [

    {href:'https://www.facebook.com/Coursera',
     href1:'https://www.linkedin.com/authwall?trk=bf&trkInfo=AQFMPSlEVN2usQAAAZDpAAT4QAp9JrC3x-eLt5ai_MoPsJr6iF59xrfT2iEXS_oS2H9uV_dz9e5rrfbvyHAGtONELqggpM5xZXcIs3NALv3LqN-qMy7IndHvUg-L-SlzUlLaygE=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fcoursera',
     href2:'https://x.com/coursera',
     href3:'https://www.youtube.com/user/coursera',
     href4:'https://www.instagram.com/coursera/',
     href5:'https://www.tiktok.com/login?redirect_url=https%3A%2F%2Fwww.tiktok.com%2F%40coursera&lang=en&enter_method=mandatory'
    },
  
  ]

}
