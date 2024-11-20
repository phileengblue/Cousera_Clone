import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { Certificati, link, NbCertificati, TCcard } from '../componenti/shared/model/certificati';
import { CourseIndex, laurea, Materia } from '../componenti/shared/model/course-index';
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private apiUrlCourse = `${environment.apiURL}/course`;

  categorLav: string[] = [
    'Ingegneria del software e informatica',
    'Vendite e marketing',
    'Business',
    'Scienza dei dati e analisi',
    'Ingegneria del software &amp:IT'
  ]

  constructor(private http: HttpClient) { }

  
  getInfoCourse(): Observable<CourseIndex[]> {
    return this.http.get<CourseIndex[]>(`${this.apiUrlCourse}/index`);
  }

  getInfoUser(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrlCourse}/user`);
  }

  // url IMg Aziende IT
  urlImgGoogle: string = 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/4a/cb36835ae3421187080898a7ecc11d/Google-G_360x360.png?auto=format%2Ccompress&dpr=1';
  urlImgImb: string = 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/growth_discovery/unified-career-academy/unified-ca-override-ibm-logo-2.png?auto=format%2Ccompress&dpr=2';
  urlImgMicrosoft: string = 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/cc/61dbdf2c1c475d82d3b8bf8eee1bda/MSFT-stacked-logo_FINAL.png?auto=format%2Ccompress&dpr=2&w=38&h=38&fit=fill';
  urlImgGoogleCloud: string = 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/74/fa9028074941789429dfc1d1b71ddf/gc-logo-360x360.png?auto=format%2Ccompress&dpr=2';
  urlImgMeta: string = 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/growth_discovery/unified-career-academy/unified-ca-override-meta-logo.png?auto=format%2Ccompress&dpr=2';
  urlImgAWS: string = 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/3q544mcK76GMoqzEYD9aDe/9c068cff1ed32b397648ec1479b73d42/AWS-logo.png?auto=format%2Ccompress&dpr=2';
  urlImgIntuit: string = 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/43y8fPP1o8YfCgCVD8RM6D/afb1fb38e1dfd4064bcf9fdb71e498c9/icom-intuit-nav-logo-small__1_.png?auto=format%2Ccompress&dpr=2';
  urlImgTally: string = 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/4UqKEnc8IR4PmhNnwVWmvy/d6d5ffb0a86dfbb60d663efaf276fb63/Tally-Logo.png?auto=format%2Ccompress&dpr=2';
  urlImgTableau: string = 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/7ePZ3QqhhPUZMLmNTDQJbt/20d34ea2d66be9ab5ce206aaae789899/tableau.png?auto=format%2Ccompress&dpr=2';
  urlImgHRCI: string = 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/2M9LqbmkE1iCZYTDamBYqk/d937bacf75aa5c9461aebccd24ca9f38/HRCI-logo-96x96.png?auto=format%2Ccompress&dpr=2';
  urlImgSAP: string = 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/2m7QZRbbvh6flS8KPtqNsh/0c5c6d0fd15698188d74c3a7b3b90040/Square-logo-96x96-px.png?auto=format%2Ccompress&dpr=2';
  urlImgGoodwill: string = 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/r9VEcrO6pUcyHEu1LNxa5/766c9c5265b74cac23957a2c9b18b98b/goodwill.png?auto=format%2Ccompress&dpr=2';
  urlImgCVSH: string = 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/UAf37CWqqtHzS0Qz8q5I3/b3862c51e72083707dcfb3e7abd5eb4b/CVS-health.png?auto=format%2Ccompress&dpr=2';
  urlImgPwC: string = 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/2uSwTHeNcbX5kpxQWTdlpL/d5beed0b5a65055cdcd634c65e6e3a5d/Logo-square-institution-landing-360x360-03__1_.png?auto=format%2Ccompress&dpr=2';
  urlImgADP: string = 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/7b0TjdSz3JRjrLWnim0eAF/5221ae3fbe9e1aee2354c1004987093e/ADP_Logo-360x360-01.png?auto=format%2Ccompress&dpr=2';
  urlImgUnilever: string = 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/5uXbdbBCbG37nY3gB9DVKN/d9c098040a969187dba4b9f05f8365bf/96x96.jpeg?auto=format%2Ccompress&dpr=2';
  urlImgSalesforce: string = 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/4w9WDshpWzVUjIcUZniHSp/24d18b9056fe79c33ecf7642c6f06c7f/Salesforce-Institution-Square-96px-.png?auto=format%2Ccompress&dpr=2';
  urlImgKellerWilliams: string = 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/7l8QtyhYsi7iQxdCrj5ajJ/424f880e4f4e30fcda9052dfbefec3da/keller_williams_logo.png?auto=format%2Ccompress&dpr=2';
  urlImgAkamai: string = 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/1OZLp0Tyc8geOFaaSaroOS/7666ec42f03586c517c49e19f5427d11/Akamai.png?auto=format%2Ccompress&dpr=2';
  urlImgCNX: string = 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/ea/bed5f04a054e87bb138db8c6892072/Square-Logo-for-Partner-Landing-Page.png?auto=format%2Ccompress&dpr=2';

  // url Img University
  urlImgUNIPittsburgh: string = 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/c3/d941080263456d928aa9e370ba5141/medium_blue_0.png?auto=format%2Ccompress&dpr=2';
  urlImgUNIIllinoisTech: string = 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/3d/1c8fdf7ef5404aa83ab0c00fa12cf5/LOGO_1.png?auto=format%2Ccompress&dpr=2';
  urlImgUNINortheastern: string = 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/6a/123cbd870d4619aab9613bb25578da/Red-N-on-white-background.png?auto=format%2Ccompress&dpr=2';
  urlImgUNIMichigan: string = 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&dpr=2';
  urlImgUNICChille: string = 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/36/18a6102bea45b280d5f182141bb441/uc-chile360x360.png?auto=format%2Ccompress&dpr=2';
  urlImgUNIIndian: string = 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/57/8c726bb7f54c75b38f7bcb25d2c2a7/square.png?auto=format%2Ccompress&dpr=2';
  urlImgUNILondon: string = 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/fb/b28a301e0211e8a40e23e4176c8e4a/UoL-Logo_180x180.png?auto=format%2Ccompress&dpr=2';
  urlImgUNILosAndes: string = 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/f2/1e0fc0666311e5bb98e7bc1b66e0e4/uniandessquare.png?auto=format%2Ccompress&dpr=2';
  urlImgUNICBoulder: string = 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/a6/7035b7e00b401383be4e5856b8bdaa/Boulder-FL-VERT-B---cropped.png?auto=format%2Ccompress&dpr=2';
  urlImgUNIIUChampaign: string = 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/d8/42cdc0ab2011e8b910bdf80bed9f6c/CenterILblock-ISQUAREOrangeBackgrnd.png?auto=format%2Ccompress&dpr=2';
  urlImgUNIHuddersfield: string = 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/5e/0548e3bb0146c9a6e4884caecd8d94/UNI.HUD.334.LOGO-360px-x-360px-reverse.png?auto=format%2Ccompress&dpr=2';
  urlImgUNIOPJindal: string = 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/13/4f6741eec44e2b9e40fc79bdf15b87/360x360.png?auto=format%2Ccompress&dpr=2';
  urlImgUNIBITSPilani: string = 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/b9/c608c79b5c498a8fa55b117fc3282f/5.-Square-logo-for-landing-page---Alpha.png?auto=format%2Ccompress&dpr=2';
  urlImgUNITESOL: string = 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/be/bf4290646811e5b6de89a29eb8ebc3/ASUlogo.png?auto=format%2Ccompress&dpr=2';
  urlImgUNIICLondon: string = 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/b1/f66aa00aa811e8b14d27d7114bc00b/ImperialCollegeLondon_BLUE_500x500px.png?auto=format%2Ccompress&dpr=2';
  urlImgUNICBerkeley: string = 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/4e/115f6ff5a845b89c1bc809f133491b/Berkeley_Square_GoldOnBlue.png?auto=format%2Ccompress&dpr=2';
  urlImgUNIDartmouth: string = 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/58/781f9d0ace475eb6c08f0e73ff07ce/D-Pine_RGB_360x360.png?auto=format%2Ccompress&dpr=2';
  urlImgUNIGeorgetown: string = 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/68/9b2c6526cb41afa07c86903b8b0961/Untitled-design-15-.png?auto=format%2Ccompress&dpr=2';
  urlImgUNINTexas: string = 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/1a/6984a02c5a45e0bc8c40b02a42bbdb/UNT-logo1.png?auto=format%2Ccompress&dpr=2';
  urlImgUNILeeds: string = 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/b1/63ba700cbf11e88d11058d160c766e/square-logo_180x180.png?auto=format%2Ccompress&dpr=2';

  Lauree: laurea[] = [
    { id: '', category: "Data Science", university: "University of Pittsburgh", title: "Master of Data Science", urlpage: "#", urlimg: `${this.urlImgUNIPittsburgh}` },
    { id: '', category: "Data Science", university: "Illinois Tech", title: "Master of Data Science", urlpage: "#", urlimg: `${this.urlImgUNIIllinoisTech}` },
    { id: '', category: "Data Science", university: "Northeastern University", title: "Master of Science in Data Analytic Engineering", urlpage: "#", urlimg: `${this.urlImgUNINortheastern}` },
    { id: '', category: "Data Science", university: "University of Michigan", title: "Master of Appliend Data Science", urlpage: "master-of-applied-data-science-umich", urlimg: `${this.urlImgUNIMichigan}` },
    { id: '', category: "Data Science", university: "Pontifica Universidad Católica de Chile", title: "Magíster en Ciencia de Datos", urlpage: "#", urlimg: `${this.urlImgUNICChille}` },
    { id: '', category: "Data Science", university: "Indian Statistical Institute", title: "Postgraduate Diploma in Applied Statistics", urlpage: "#", urlimg: `${this.urlImgUNIIndian}` },
    { id: '', category: "Informatica", university: "University of London", title: "Bachelor of Science in Computer Science", urlpage: "#", urlimg: `${this.urlImgUNILondon}` },
    { id: '', category: "Informatica", university: "Universidad de los Andes", title: "Maestria en Inteligencia Artificial", urlpage: "#", urlimg: `${this.urlImgUNILosAndes}` },
    { id: '', category: "Informatica", university: "University of Colorado Boulder", title: "Master of Science in Electrical Engineering", urlpage: "#", urlimg: `${this.urlImgUNICBoulder}` },
    { id: '', category: "Informatica", university: "Northeastern University", title: "Master of Science in Data Analytic Engineering", urlpage: "#", urlimg: `${this.urlImgUNINortheastern}` },
    { id: '', category: "Informatica", university: "University of Colorado Boulder", title: "Master of Science in Computer Science", urlpage: "#", urlimg: `${this.urlImgUNICBoulder}` },
    { id: '', category: "Informatica", university: "University of London", title: "Master of Science in Cyber Security", urlpage: "#", urlimg: `${this.urlImgUNILondon}` },
    { id: '', category: "Affari", university: "University of Illinois at Urbana-Champaign", title: "Master of Business Administration (iMBA)", urlpage: "#", urlimg: `${this.urlImgUNIIUChampaign}` },
    { id: '', category: "Affari", university: "University of Illinois at Urbana-Champaign", title: "Master of Science in Management (iMSM)", urlpage: "#", urlimg: `${this.urlImgUNIIUChampaign}` },
    { id: '', category: "Affari", university: "University of Huddersfield", title: "MSc Management", urlpage: "#", urlimg: `${this.urlImgUNIHuddersfield}` },
    { id: '', category: "Affari", university: "University of Colorado Boulder", title: "Master of Engineering in Engineering Management", urlpage: "#", urlimg: `${this.urlImgUNICBoulder}` },
    { id: '', category: "Affari", university: "O.P. Jindal Global University", title: "MBA in Business Analytics", urlpage: "#", urlimg: `${this.urlImgUNIOPJindal}` },
    { id: '', category: "Affari", university: "University of London", title: "Bachelor of Science in Business Administration", urlpage: "#", urlimg: `${this.urlImgUNILondon}` },
    { id: '', category: "Tecnologia dell'informazione", university: "University of London", title: "Bachelor of Science in Computer Science", urlpage: "#", urlimg: `${this.urlImgUNILondon}` },
    { id: '', category: "Tecnologia dell'informazione", university: "University of Colorado Boulder", title: "Master of Science in Electrical Engineering", urlpage: "#", urlimg: `${this.urlImgUNICBoulder}` },
    { id: '', category: "Tecnologia dell'informazione", university: "University of Colorado Boulder", title: "Master of Science in Computer Science", urlpage: "#", urlimg: `${this.urlImgUNICBoulder}` },
    { id: '', category: "Tecnologia dell'informazione", university: "University of London", title: "Master of Science in Cyber Security", urlpage: "#", urlimg: `${this.urlImgUNILondon}` },
    { id: '', category: "Tecnologia dell'informazione", university: "Illinois Tech", title: "Master of Information Technology", urlpage: "#", urlimg: `${this.urlImgUNIIllinoisTech}` },
    { id: '', category: "Tecnologia dell'informazione", university: "Birla Institute of Technology & Science, Pilani", title: "Bachelor of Science in Computer Science", urlpage: "#", urlimg: `${this.urlImgUNIBITSPilani}` },
    { id: '', category: "Salute", university: "Imperial College London", title: "Postgraduate Certificate of Public Health", urlpage: "#", urlimg: `${this.urlImgUNIICLondon}` },
    { id: '', category: "Salute", university: "Pontifica Universidad Católica de Chile", title: "Magister en Salud Pública Global", urlpage: "#", urlimg: `${this.urlImgUNICChille}` },
    { id: '', category: "Salute", university: "Imperial College London", title: "Global Master of Public Health", urlpage: "#", urlimg: `${this.urlImgUNIICLondon}` },
    { id: '', category: "Salute", university: "University of Michigan", title: "Master of Public Health", urlpage: "#", urlimg: `${this.urlImgUNIMichigan}` },
    { id: '', category: "Scienza fisica e ingegneria", university: "University of Colorado Boulder", title: "Master of Science in Electrical Engineering", urlpage: "#", urlimg: `${this.urlImgUNICBoulder}` },
    { id: '', category: "Scienza fisica e ingegneria", university: "University of Colorado Boulder", title: "Master of Engineering in Engineering Management", urlpage: "#", urlimg: `${this.urlImgUNICBoulder}` },
    { id: '', category: "Scienza fisica e ingegneria", university: "University of California, Berkeley", title: "Master of Advanced Study in Engineering", urlpage: "#", urlimg: `${this.urlImgUNICBerkeley}` },
    { id: '', category: "Scienza fisica e ingegneria", university: "Dartmouth College", title: "Master of Engineering in Computer Engineering", urlpage: "#", urlimg: `${this.urlImgUNIDartmouth}` },
    { id: '', category: "Scienze Sociali", university: "Imperial College London", title: "Postgraduate Certificate of Public Health", urlpage: "#", urlimg: `${this.urlImgUNIICLondon}` },
    { id: '', category: "Scienze Sociali", university: "Imperial College London", title: "Global Master of Public Health", urlpage: "#", urlimg: `${this.urlImgUNIICLondon}` },
    { id: '', category: "Scienze Sociali", university: "O.P. Jindal Global University", title: "M.A. in International Relations, Security, and Stategy", urlpage: "#", urlimg: `${this.urlImgUNIOPJindal}` },
    { id: '', category: "Scienze Sociali", university: "Georgetown University", title: "Bachelor of Arts in Liberal Studies", urlpage: "#", urlimg: `${this.urlImgUNIGeorgetown}` },
    { id: '', category: "Scienze Sociali", university: "O.P. Jindal Global University", title: "MBA in Public Policy", urlpage: "#", urlimg: `${this.urlImgUNIOPJindal}` },
    { id: '', category: "Scienze Sociali", university: "University of Michigan", title: "Master of Public Health", urlpage: "#", urlimg: `${this.urlImgUNIMichigan}` },
    { id: '', category: "Arti e scienze umane", university: "Georgetown University", title: "Bachelor of Arts in Liberal Studies", urlpage: "#", urlimg: `${this.urlImgUNIGeorgetown}` },
    { id: '', category: "Arti e scienze umane", university: "University of North Texas", title: "Baachelor of Applied Arts and Sciences", urlpage: "#", urlimg: `${this.urlImgUNINTexas}` },
    { id: '', category: "Matematica e logica", university: "University of London", title: "Bachelor of Science in Computer Science", urlpage: "#", urlimg: `${this.urlImgUNILondon}` },
    { id: '', category: "Matematica e logica", university: "University of Leeds", title: "MSc Data Science (Statistics)", urlpage: "#", urlimg: `${this.urlImgUNILeeds}` },

  ]

  menuMaterie: Materia[] = [
    { id: 1, value: 'Data Science' },
    { id: 2, value: 'Affari' },
    { id: 3, value: 'Informatica' },
    { id: 4, value: "Tecnologia dell'informazione" },
    { id: 5, value: 'Apprendimento delle lingue' },
    { id: 6, value: 'Salute' },
    { id: 7, value: 'Sviluppo personale' },
    { id: 8, value: 'Scienza fisica e ingegneria' },
    { id: 9, value: 'Scienze Sociali' },
    { id: 10, value: 'Arti e scienze umane' },
    { id: 11, value: 'Matematica e logica' }
  ];

  NavbarCertificati: NbCertificati[] = [
    { id: '', category: 'Data Science', company: 'Google', title: 'Analista dei dati Meta', description: "", urlpage: '#', urlimg: `${this.urlImgMeta}` },
    { id: '', category: 'Data Science', company: 'Google', title: 'Google Data Analytics', description: "Nessun prerequisito • Autogestito", urlpage: 'dettagli_corsi', urlimg: `${this.urlImgGoogle}` },
    { id: '', category: 'Data Science', company: 'Google', title: 'Google Advanced Data Analytics', description: "", urlpage: '#', urlimg: `${this.urlImgGoogle}` },
    { id: '', category: 'Data Science', company: 'IBM', title: 'Scienza dei dati IBM ', description: "Nessun prerequisito • Autogestito", urlpage: '#', urlimg: `${this.urlImgImb}` },
    { id: '', category: 'Data Science', company: 'Microsoft', title: 'Analista dati Mircrosoft Power BI', description: "", urlpage: '#', urlimg: `${this.urlImgMicrosoft}` },
    { id: '', category: 'Data Science', company: 'GoogleCloud', title: 'Google Cloud Data Analytics', description: "", urlpage: '#', urlimg: `${this.urlImgGoogleCloud}` },
    { id: '', category: "Informatica", company: "Microsoft", title: "Specialista dell'assistenza IT di Microsoft", urlpage: "#", description: "", urlimg: `${this.urlImgMicrosoft}` },
    { id: '', category: "Informatica", company: "GoogleCloud", title: "Sicurezza informatica di Google Cloud", urlpage: "#", description: "", urlimg: `${this.urlImgGoogleCloud}` },
    { id: '', category: "Informatica", company: "Microsoft", title: "Progettazione UX di Microsoft", urlpage: "#", description: "", urlimg: `${this.urlImgMicrosoft}` },
    { id: '', category: "Informatica", company: "Meta", title: "Sviluppatore Meta Front-End", urlpage: "#", description: "Nessun prerequisito • Autogestito", urlimg: `${this.urlImgMeta}` },
    { id: '', category: "Informatica", company: "Google", title: "Google Cybersecurity", urlpage: "#", description: "", urlimg: `${this.urlImgGoogle}` },
    { id: '', category: "Informatica", company: "Microsoft", title: "Analista di sicurezza informatica di Mricrosoft", urlpage: "#", description: "", urlimg: `${this.urlImgMicrosoft}` },
    { id: '', category: "Affari", company: "Microsoft", title: "Gestione dei progetti Microsoft", urlpage: "#", description: "", urlimg: `${this.urlImgMicrosoft}` },
    { id: '', category: "Affari", company: "Google", title: "Google Project Management", urlpage: "#", description: "Nessun prerequisito • Autogestito", urlimg: `${this.urlImgGoogle}` },
    { id: '', category: "Affari", company: "Google", title: "Google Digital Marketing & E-commerce", urlpage: "#", description: "", urlimg: `${this.urlImgGoogle}` },
    { id: '', category: "Affari", company: "Intuit", title: "Accademia Intuit di contabilità", urlpage: "#", description: "Nessun prerequisito • Autogestito", urlimg: `${this.urlImgIntuit}` },
    { id: '', category: "Affari", company: "Meta", title: "Meta Social Media Marketing", urlpage: "#", description: "", urlimg: `${this.urlImgMeta}` },
    { id: '', category: "Affari", company: "Microsoft", title: "Analista aziendale Microsoft", urlpage: "#", description: "", urlimg: `${this.urlImgMicrosoft}` },
    { id: '', category: "Tecnologia dell'informazione", company: "Microsoft", title: "Specialista dell'assistenza IT di Microsoft", urlpage: "#", description: "", urlimg: `${this.urlImgMicrosoft}` },
    { id: '', category: "Tecnologia dell'informazione", company: "Google", title: "Assistenca IT di Google", urlpage: "#", description: "Nessun prerequisito • Autogestito", urlimg: `${this.urlImgGoogle}` },
    { id: '', category: "Tecnologia dell'informazione", company: "GoogleCloud", title: "Sicurezza informatica di Google Cloud", urlpage: "#", description: "", urlimg: `${this.urlImgGoogleCloud}` },
    { id: '', category: "Tecnologia dell'informazione", company: 'IBM', title: 'Analista IBM per la sicurezza informatica', description: "Nessun prerequisito • Autogestito", urlpage: '#', urlimg: `${this.urlImgImb}` },
    { id: '', category: "Tecnologia dell'informazione", company: 'Microsoft', title: 'Analista di sicurezza informatica di Microsoft', description: "", urlpage: '#', urlimg: `${this.urlImgMicrosoft}` },
    { id: '', category: "Tecnologia dell'informazione", company: "Google", title: "Automazione IT di Google con Python", urlpage: "#", description: "Autogestito", urlimg: `${this.urlImgGoogle}` },
    { id: '', category: "Apprendimento delle lingue", company: "ASU", title: "Arizona State University TESOL", urlpage: "#", description: "Preparazione alla certificazione • Autogestito", urlimg: `${this.urlImgUNITESOL}` },
    { id: '', category: "Sviluppo personale", company: "CNX", title: "CertNexus Certificato Tecnologo Etico Emergente", urlpage: "#", description: "Preparazione alla certificazione • Autogestito", urlimg: `${this.urlImgCNX}` },
    { id: '', category: "Scienza fisica e ingegneria", company: "University of Michigan", title: "Sustainability and Development MasterTrack® Certificate", urlpage: "#", description: "Feedback degli esperti • Credito ammissibile", urlimg: `${this.urlImgUNIMichigan}` },
    { id: '', category: "Scienza fisica e ingegneria", company: 'IBM', title: 'Ingegneria AI IBM', description: "Autogestito", urlpage: '#', urlimg: `${this.urlImgImb}` },
    { id: '', category: "Scienza fisica e ingegneria", company: "GoogleCloud", title: "Preparazione alla Certificazione Google Cloud: Ingegnere Cloud", urlpage: "#", description: "Preparazione alla certificazione • Autogestito", urlimg: `${this.urlImgGoogleCloud}` },
    { id: '', category: "Scienza fisica e ingegneria", company: "University of Michigan", title: "Construction Engineering and Management MasterTrack® Certificate", urlpage: "#", description: "Feedback degli esperti • Credito ammissibile", urlimg: `${this.urlImgUNIMichigan}` },
    { id: '', category: "Scienze Sociali", company: "University of Michigan", title: "Social Work MasterTrack® Certificate", urlpage: "#", description: "Feedback degli esperti • Credito ammissibile", urlimg: `${this.urlImgUNIMichigan}` },
    { id: '', category: "Scienze Sociali", company: "University of Illinois at Urbana-Champaign", title: "Instructional Design MasterTrack® Certificate", urlpage: "#", description: "Feedback degli esperti • Credito ammissibile", urlimg: `${this.urlImgUNIIUChampaign}` },
    { id: '', category: "Arti e scienze umane", company: "Google", title: "Google UX Design", urlpage: "#", description: "Nessun prerequisito • Autogestito", urlimg: `${this.urlImgGoogle}` },
  ]

  Inizia: link[] = [
    { id: '', category: "Data Science", title: "Lanciare la sua carriera", urlpage: "#" },
    { id: '', category: "Data Science", title: "Corsi gratuiti", urlpage: "#" },
    { id: '', category: "Data Science", title: "I più popolari", urlpage: "#" },
    { id: '', category: "Data Science", title: "Nuovi corsi", urlpage: "#" },
    { id: '', category: "Data Science", title: "Progetti guidati sotto le 2 ore", urlpage: "#" },
    { id: '', category: "Affari", title: "Lanciare la sua carriera", urlpage: "#" },
    { id: '', category: "Affari", title: "Corsi gratuiti", urlpage: "#" },
    { id: '', category: "Affari", title: "I più popolari", urlpage: "#" },
    { id: '', category: "Affari", title: "Nuovi corsi", urlpage: "#" },
    { id: '', category: "Affari", title: "Progetti guidati sotto le 2 ore", urlpage: "#" },
    { id: '', category: "Informatica", title: "Lanciare la sua carriera", urlpage: "#" },
    { id: '', category: "Informatica", title: "Corsi gratuiti", urlpage: "#" },
    { id: '', category: "Informatica", title: "I più popolari", urlpage: "#" },
    { id: '', category: "Informatica", title: "Nuovi corsi", urlpage: "#" },
    { id: '', category: "Informatica", title: "Progetti guidati sotto le 2 ore", urlpage: "#" },
    { id: '', category: "Tecnologia dell'informazione", title: "Lanciare la sua carriera", urlpage: "#" },
    { id: '', category: "Tecnologia dell'informazione", title: "Corsi gratuiti", urlpage: "#" },
    { id: '', category: "Tecnologia dell'informazione", title: "I più popolari", urlpage: "#" },
    { id: '', category: "Tecnologia dell'informazione", title: "Nuovi corsi", urlpage: "#" },
    { id: '', category: "Tecnologia dell'informazione", title: "Progetti guidati sotto le 2 ore", urlpage: "#" },
    { id: '', category: "Apprendimento delle lingue", title: "Corsi gratuiti", urlpage: "#" },
    { id: '', category: "Apprendimento delle lingue", title: "I più popolari", urlpage: "#" },
    { id: '', category: "Apprendimento delle lingue", title: "Progetti guidati sotto le 2 ore", urlpage: "#" },
    { id: '', category: "Salute", title: "Corsi gratuiti", urlpage: "#" },
    { id: '', category: "Salute", title: "I più popolari", urlpage: "#" },
    { id: '', category: "Salute", title: "Nuovi corsi", urlpage: "#" },
    { id: '', category: "Salute", title: "Progetti guidati sotto le 2 ore", urlpage: "#" },
    { id: '', category: "Sviluppo personale", title: "Lanciare la sua carriera", urlpage: "#" },
    { id: '', category: "Sviluppo personale", title: "Corsi gratuiti", urlpage: "#" },
    { id: '', category: "Sviluppo personale", title: "I più popolari", urlpage: "#" },
    { id: '', category: "Sviluppo personale", title: "Nuovi corsi", urlpage: "#" },
    { id: '', category: "Sviluppo personale", title: "Progetti guidati sotto le 2 ore", urlpage: "#" },
    { id: '', category: "Scienza fisica e ingegneria", title: "Corsi gratuiti", urlpage: "#" },
    { id: '', category: "Scienza fisica e ingegneria", title: "I più popolari", urlpage: "#" },
    { id: '', category: "Scienza fisica e ingegneria", title: "Nuovi corsi", urlpage: "#" },
    { id: '', category: "Scienza fisica e ingegneria", title: "Progetti guidati sotto le 2 ore", urlpage: "#" },
    { id: '', category: "Scienze Sociali", title: "Corsi gratuiti", urlpage: "#" },
    { id: '', category: "Scienze Sociali", title: "I più popolari", urlpage: "#" },
    { id: '', category: "Scienze Sociali", title: "Progetti guidati sotto le 2 ore", urlpage: "#" },
    { id: '', category: "Arti e scienze umane", title: "Corsi gratuiti", urlpage: "#" },
    { id: '', category: "Arti e scienze umane", title: "I più popolari", urlpage: "#" },
    { id: '', category: "Arti e scienze umane", title: "Progetti guidati sotto le 2 ore", urlpage: "#" },
    { id: '', category: "Matematica e logica", title: "Corsi gratuiti", urlpage: "#" },
    { id: '', category: "Matematica e logica", title: "I più popolari", urlpage: "#" },
    { id: '', category: "Matematica e logica", title: "Progetti guidati sotto le 2 ore", urlpage: "#" },


  ]

  CompetenzePP: link[] = [
    { id: '', category: "Data Science", title: "Python", urlpage: "#" },
    { id: '', category: "Data Science", title: "SQL", urlpage: "#" },
    { id: '', category: "Data Science", title: "Microsoft Excel", urlpage: "#" },
    { id: '', category: "Data Science", title: "Excel", urlpage: "#" },
    { id: '', category: "Data Science", title: "Apprendimento Automatico", urlpage: "#" },
    { id: '', category: "Data Science", title: "Scienza Dei Dati", urlpage: "#" },
    { id: '', category: "Data Science", title: "Dati Analitici", urlpage: "#" },
    { id: '', category: "Data Science", title: "Potenza Bi", urlpage: "#" },
    { id: '', category: "Affari", title: "Gestione Del Progetto", urlpage: "#" },
    { id: '', category: "Affari", title: "Microsoft Excel", urlpage: "#" },
    { id: '', category: "Affari", title: "Excel", urlpage: "#" },
    { id: '', category: "Affari", title: "Blockchain", urlpage: "#" },
    { id: '', category: "Affari", title: "Marketin Digitale", urlpage: "#" },
    { id: '', category: "Affari", title: "Dati Analitici", urlpage: "#" },
    { id: '', category: "Affari", title: "Potenza Bi", urlpage: "#" },
    { id: '', category: "Affari", title: "Design", urlpage: "#" },
    { id: '', category: "Informatica", title: "Python", urlpage: "#" },
    { id: '', category: "Informatica", title: "SQL", urlpage: "#" },
    { id: '', category: "Informatica", title: "Cybersicurezza", urlpage: "#" },
    { id: '', category: "Informatica", title: "Java", urlpage: "#" },
    { id: '', category: "Informatica", title: "Blockchain", urlpage: "#" },
    { id: '', category: "Informatica", title: "Sviluppo Web", urlpage: "#" },
    { id: '', category: "Informatica", title: "C++", urlpage: "#" },
    { id: '', category: "Informatica", title: "Intelligenza Artificiale", urlpage: "#" },
    { id: '', category: "Tecnologia dell'informazione", title: "Google", urlpage: "#" },
    { id: '', category: "Tecnologia dell'informazione", title: "Cybersicurezza", urlpage: "#" },
    { id: '', category: "Tecnologia dell'informazione", title: "AWS", urlpage: "#" },
    { id: '', category: "Tecnologia dell'informazione", title: "Linux", urlpage: "#" },
    { id: '', category: "Tecnologia dell'informazione", title: "DevOps", urlpage: "#" },
    { id: '', category: "Tecnologia dell'informazione", title: "Linfa", urlpage: "#" },
    { id: '', category: "Tecnologia dell'informazione", title: "Hacking Etico", urlpage: "#" },
    { id: '', category: "Tecnologia dell'informazione", title: "Ingegneria dei Dati", urlpage: "#" },
    { id: '', category: "Apprendimento delle lingue", title: "Parlare Inglese", urlpage: "#" },
    { id: '', category: "Apprendimento delle lingue", title: "Inglese", urlpage: "#" },
    { id: '', category: "Apprendimento delle lingue", title: "Spagnolo", urlpage: "#" },
    { id: '', category: "Apprendimento delle lingue", title: "Lingua Francese", urlpage: "#" },
    { id: '', category: "Apprendimento delle lingue", title: "Coreano", urlpage: "#" },
    { id: '', category: "Apprendimento delle lingue", title: "Cinese", urlpage: "#" },
    { id: '', category: "Apprendimento delle lingue", title: "Lingua", urlpage: "#" },
    { id: '', category: "Apprendimento delle lingue", title: "Grammatica Inglese", urlpage: "#" },
    { id: '', category: "Salute", title: "Psicologia", urlpage: "#" },
    { id: '', category: "Salute", title: "Medicina", urlpage: "#" },
    { id: '', category: "Salute", title: "Medico", urlpage: "#" },
    { id: '', category: "Salute", title: "Biologia", urlpage: "#" },
    { id: '', category: "Salute", title: "Bioinformatica", urlpage: "#" },
    { id: '', category: "Salute", title: "Neuroscienze", urlpage: "#" },
    { id: '', category: "Salute", title: "Salute Mentale", urlpage: "#" },
    { id: '', category: "Salute", title: "Anatomia", urlpage: "#" },
    { id: '', category: "Sviluppo personale", title: "Capacita Di Comunicazione", urlpage: "#" },
    { id: '', category: "Sviluppo personale", title: "Soft Skills", urlpage: "#" },
    { id: '', category: "Sviluppo personale", title: "Pensiero Critico", urlpage: "#" },
    { id: '', category: "Sviluppo personale", title: "Insegnare L'inglese", urlpage: "#" },
    { id: '', category: "Sviluppo personale", title: "Intelligenza Emotiva", urlpage: "#" },
    { id: '', category: "Sviluppo personale", title: "Parlare in Pubblico", urlpage: "#" },
    { id: '', category: "Sviluppo personale", title: "Insegnamento", urlpage: "#" },
    { id: '', category: "Sviluppo personale", title: "Imparare A Imparare", urlpage: "#" },
    { id: '', category: "Scienza fisica e ingegneria", title: "Ingegneria Civile", urlpage: "#" },
    { id: '', category: "Scienza fisica e ingegneria", title: "Fisica", urlpage: "#" },
    { id: '', category: "Scienza fisica e ingegneria", title: "Sostenibilita", urlpage: "#" },
    { id: '', category: "Scienza fisica e ingegneria", title: "Elettronica", urlpage: "#" },
    { id: '', category: "Scienza fisica e ingegneria", title: "Robotica", urlpage: "#" },
    { id: '', category: "Scienza fisica e ingegneria", title: "Autocad", urlpage: "#" },
    { id: '', category: "Scienza fisica e ingegneria", title: "Sistemi incorporati", urlpage: "#" },
    { id: '', category: "Scienza fisica e ingegneria", title: "Astronomia", urlpage: "#" },
    { id: '', category: "Scienze Sociali", title: "Legge", urlpage: "#" },
    { id: '', category: "Scienze Sociali", title: "Insegnare L'inglese", urlpage: "#" },
    { id: '', category: "Scienze Sociali", title: "Relazioni Internazionali", urlpage: "#" },
    { id: '', category: "Scienze Sociali", title: "Economia", urlpage: "#" },
    { id: '', category: "Scienze Sociali", title: "Giornalismo", urlpage: "#" },
    { id: '', category: "Scienze Sociali", title: "Insegnamento", urlpage: "#" },
    { id: '', category: "Scienze Sociali", title: "Sociologia", urlpage: "#" },
    { id: '', category: "Scienze Sociali", title: "Storia", urlpage: "#" },
    { id: '', category: "Arti e scienze umane", title: "Design", urlpage: "#" },
    { id: '', category: "Arti e scienze umane", title: "Arte", urlpage: "#" },
    { id: '', category: "Arti e scienze umane", title: "Photoshop", urlpage: "#" },
    { id: '', category: "Arti e scienze umane", title: "Musica", urlpage: "#" },
    { id: '', category: "Arti e scienze umane", title: "Fotografia", urlpage: "#" },
    { id: '', category: "Arti e scienze umane", title: "Architettura", urlpage: "#" },
    { id: '', category: "Arti e scienze umane", title: "Scrittura Creativa", urlpage: "#" },
    { id: '', category: "Arti e scienze umane", title: "Storia Dellarte", urlpage: "#" },
    { id: '', category: "Matematica e logica", title: "Matematica", urlpage: "#" },
    { id: '', category: "Matematica e logica", title: "Calcolo", urlpage: "#" },
    { id: '', category: "Matematica e logica", title: "Algebra Lineare", urlpage: "#" },
    { id: '', category: "Matematica e logica", title: "Algebra", urlpage: "#" },
    { id: '', category: "Matematica e logica", title: "Probabilita", urlpage: "#" },
    { id: '', category: "Matematica e logica", title: "Ottimizzazione", urlpage: "#" },
    { id: '', category: "Matematica e logica", title: "Matematica", urlpage: "#" },
    { id: '', category: "Matematica e logica", title: "Matematica Discreta", urlpage: "#" },

  ]

  Certificati: Certificati[] = [
    { id: '', tag: 'Sicurezza', company: 'Google', title: 'Google Data Analytics', description: "", urlpage: 'dettagli_corsi', urlimg: `${this.urlImgGoogle}` },
    { id: '', tag: "Sicurezza", company: "Microsoft", title: "Certificato professionale di analista di sicurezza informatica Microsoft", urlpage: "#", description: "", urlimg: `${this.urlImgMicrosoft}` },
    { id: '', tag: 'Sicurezza', company: 'GoogleCloud', title: 'Certificato professionale per la sicurezza informatica di Google Cloud', description: "", urlpage: '#', urlimg: `${this.urlImgGoogleCloud}` },
    { id: '', tag: 'Sicurezza', company: 'IMB', title: 'Certificato professionale di analista di sicurezza informatica IBM', description: "", urlpage: '#', urlimg: `${this.urlImgImb}` },
    { id: '', tag: 'Sicurezza', company: 'IMB', title: 'Certificato professionale IBM e ISC2 Cybersecurity', description: "", urlpage: '#', urlimg: `${this.urlImgImb}` },
    { id: '', tag: 'Designer', company: 'Google', title: 'Nuovo! Certificato professionale Google UX Design', description: "", urlpage: '#', urlimg: `${this.urlImgGoogle}` },
    { id: '', tag: "Designer", company: "Microsoft", title: "Certificato professionale di analista di sicurezza informatica Microsoft", urlpage: "#", description: "", urlimg: `${this.urlImgMicrosoft}` },
    { id: '', tag: 'Assistenza_IT', company: 'Google', title: 'Certificato professionale di assistenza IT di Google', description: "", urlpage: '#', urlimg: `${this.urlImgGoogle}` },
    { id: '', tag: 'Assistenza_IT', company: 'IMB', title: 'Certificato professionale di assistenza tecnica IBM', description: "", urlpage: '#', urlimg: `${this.urlImgImb}` },
    { id: '', tag: 'Sviluppatore_FE', company: 'Meta', title: 'Certificato professionale di sviluppo Meta Front-End', description: "", urlpage: '#', urlimg: `${this.urlImgMeta}` },
    { id: '', tag: 'Sviluppatore_FE', company: 'IMB', title: 'Certificato professionale IBM Front-End Developer', description: "", urlpage: '#', urlimg: `${this.urlImgImb}` },
    { id: '', tag: 'Sviluppatore_APP', company: 'IMB', title: 'Certificato professionale di sviluppatore cloud full stack IBM', description: "", urlpage: '#', urlimg: `${this.urlImgImb}` },
    { id: '', tag: 'Sviluppatore_BE', company: 'Meta', title: 'Certificato professionale di sviluppatore back-end Meta', description: "", urlpage: '#', urlimg: `${this.urlImgMeta}` },
    { id: '', tag: 'Sviluppatore_BE', company: 'IMB', title: 'Certificato professionale di sviluppo back-end IBM', description: "", urlpage: '#', urlimg: `${this.urlImgImb}` },
    { id: '', tag: 'Sviluppatore_BE', company: 'IMB', title: 'Certificato professionale IBM IT Project Manager', description: "", urlpage: '#', urlimg: `${this.urlImgImb}` },
    { id: '', tag: 'Ingegnere_DO', company: 'IMB', title: 'Certificato professionale IBM DevOps e ingegneria del software', description: "", urlpage: '#', urlimg: `${this.urlImgImb}` },
    { id: '', tag: 'Sviluppatore_iOS', company: 'Meta', title: 'Certificato professionale di sviluppatore back-end Meta', description: "", urlpage: '#', urlimg: `${this.urlImgMeta}` },
    { id: '', tag: 'Sviluppatore_ANDD', company: 'Meta', title: 'Certificato professionale di sviluppatore Android Meta', description: "", urlpage: '#', urlimg: `${this.urlImgMeta}` },
    { id: '', tag: 'Sviluppatore_DW', company: 'IMB', title: 'Certificato professionale IBM Data Warehouse Engineer', description: "", urlpage: '#', urlimg: `${this.urlImgImb}` },
    { id: '', tag: 'Sviluppatore_MF', company: 'AWS', title: 'Certificato professionale AWS Cloud Support Associate', description: "", urlpage: '#', urlimg: `${this.urlImgAWS}` },
    { id: '', tag: 'Resp_Prog', company: 'Google', title: 'Nuovo! Certificato professionale di gestione dei progetti Google', description: "", urlpage: '#', urlimg: `${this.urlImgGoogle}` },
    { id: '', tag: 'Resp_Prog', company: 'IMB', title: 'Certificato professionale IBM Project Manager', description: "", urlpage: '#', urlimg: `${this.urlImgImb}` },
    { id: '', tag: 'Contabile', company: 'Intuit', title: 'Certificato professionale di contabilità Intuit', description: "", urlpage: '#', urlimg: `${this.urlImgIntuit}` },
    { id: '', tag: 'Contabile', company: 'Tally', title: 'Certificato professionale di contabilità Tally', description: "", urlpage: '#', urlimg: `${this.urlImgTally}` },
    { id: '', tag: "ABI", company: "Microsoft", title: "Certificato professionale di analista di dati Microsoft Power BI", urlpage: "#", description: "", urlimg: `${this.urlImgMicrosoft}` },
    { id: '', tag: "ABI", company: "Tableau", title: "Certificato professionale di analista di business intelligence Tableau", urlpage: "#", description: "", urlimg: `${this.urlImgTableau}` },
    { id: '', tag: "ABI", company: "IBM", title: "Certificato professionale IBM IT Project Manager", urlpage: "#", description: "", urlimg: `${this.urlImgImb}` },
    { id: '', tag: "Risorse_Umane", company: "HRCI", title: "Certificato professionale HRCI Human Resource Associate", urlpage: "#", description: "", urlimg: `${this.urlImgHRCI}` },
    { id: '', tag: "Consul_Tecn", company: "SAP", title: "Certificato professionale di consulente tecnologico SAP", urlpage: "#", description: "", urlimg: `${this.urlImgSAP}` },
    { id: '', tag: "Consul_Tecn", company: "AWS", title: "Certificato professionale di consulente tecnologico AWS Cloud", urlpage: "#", description: "", urlimg: `${this.urlImgAWS}` },
    { id: '', tag: "Career_Coach", company: "Goodwill", title: "Certificato professionale Goodwill di Career Coach e Navigator", urlpage: "#", description: "", urlimg: `${this.urlImgGoodwill}` },
    { id: '', tag: "Servizio_Clienti", company: "CVSH", title: "Certificato professionale per call center di CVS Health", urlpage: "#", description: "", urlimg: `${this.urlImgCVSH}` },
    { id: '', tag: "Servizio_Clienti", company: "CVSH", title: "Certificato professionale per il servizio clienti al dettaglio di CVS Health", urlpage: "#", description: "", urlimg: `${this.urlImgCVSH}` },
    { id: '', tag: "Contabilità", company: "PwC", title: "Certificato professionale PwC GST Taxation", urlpage: "#", description: "", urlimg: `${this.urlImgPwC}` },
    { id: '', tag: "Servizio_Clienti", company: "CVSH", title: "Certificato professionale per il servizio clienti al dettaglio di CVS Health", urlpage: "#", description: "", urlimg: `${this.urlImgCVSH}` },
    { id: '', tag: "Compensation_Analyst", company: "ADP", title: "Certificato professionale per analisti di retribuzioni e benefici ADP di livello iniziale", urlpage: "#", description: "", urlimg: `${this.urlImgADP}` },
    { id: '', tag: "Payroll_Spec", company: "ADP", title: "Certificato professionale di ADP Entry-Level Payroll Specialist", urlpage: "#", description: "", urlimg: `${this.urlImgADP}` },
    { id: '', tag: 'Marketer_Digitale', company: 'Google', title: 'Google Digital Marketing &amp; Certificato professionale di e-commerce', description: "", urlpage: '#', urlimg: `${this.urlImgGoogle}` },
    { id: '', tag: 'Rapp_Vendita1', company: 'Unilever', title: 'Certificato professionale di consulente tecnologico AWS Cloud', description: "", urlpage: '#', urlimg: `${this.urlImgUnilever}` },
    { id: '', tag: 'Rapp_Vendita2', company: 'IBM', title: 'Certificato professionale IBM IT Project Manager', description: "", urlpage: '#', urlimg: `${this.urlImgImb}` },
    { id: '', tag: 'Rapp_Vendita2', company: 'IBM', title: 'Certificato del Product Manager IBM AI', description: "", urlpage: '#', urlimg: `${this.urlImgImb}` },
    { id: '', tag: 'Rapp_Vendita3', company: 'IBM', title: 'Certificato del Product Manager IBM IT Project Manager', description: "", urlpage: '#', urlimg: `${this.urlImgImb}` },
    { id: '', tag: 'Marketer_SM', company: 'Meta', title: 'Certificato professionale Meta Social Media', description: "", urlpage: '#', urlimg: `${this.urlImgMeta}` },
    { id: '', tag: 'Specialista_OV', company: 'Salesforce', title: 'Certificato professionale Salesforce Sales Operations', description: "", urlpage: '#', urlimg: `${this.urlImgSalesforce}` },
    { id: '', tag: 'Analista_Marketing', company: 'Meta', title: 'Certificato professionale Meta Marketing Analytics', description: "", urlpage: '#', urlimg: `${this.urlImgMeta}` },
    { id: '', tag: 'Analista_Marketing', company: 'Unilever', title: 'Certificato professionale di consulente tecnologico AWS Cloud', description: "", urlpage: '#', urlimg: `${this.urlImgUnilever}` },
    { id: '', tag: 'Rapp_SV', company: 'Salesforce', title: 'Certificato professionale di rappresentante per lo sviluppo delle vendite di Salesforce', description: "", urlpage: '#', urlimg: `${this.urlImgSalesforce}` },
    { id: '', tag: 'Specilista_OV', company: 'Salesforce', title: 'Certificato professionale Salesforce Sales Operations', description: "", urlpage: '#', urlimg: `${this.urlImgSalesforce}` },
    { id: '', tag: 'Rapp_Vendita3b', company: 'KW', title: 'Certificato professionale di agente immobiliare Keller Williams', description: "", urlpage: '#', urlimg: `${this.urlImgKellerWilliams}` },
    { id: '', tag: 'Analista_Dati', company: 'Google', title: 'Nuovo! Certificato professionale di Google Data Analytics', description: "", urlpage: '#', urlimg: `${this.urlImgGoogle}` },
    { id: '', tag: 'Analista_Dati', company: 'GoogleCloud', title: 'Certificato professionale in Google Cloud Data Analytics', description: "", urlpage: '#', urlimg: `${this.urlImgGoogleCloud}` },
    { id: '', tag: 'Analista_Dati', company: 'Meta', title: 'Certificato professionale di analista di dati IBM', description: "", urlpage: '#', urlimg: `${this.urlImgMeta}` },
    { id: '', tag: 'Analista_Dati', company: 'IBM', title: 'Certificato pofessionale di analista di dati IBM', description: "", urlpage: '#', urlimg: `${this.urlImgImb}` },
    { id: '', tag: 'Analista_Dati', company: 'IBM', title: 'Certificato professionale IBM Data Analytics', description: "", urlpage: '#', urlimg: `${this.urlImgImb}` },
    { id: '', tag: 'Data_Scientist', company: 'IBM', title: 'Alumna del certificato professionale IBM Data Science', description: "", urlpage: '#', urlimg: `${this.urlImgImb}` },
    { id: '', tag: 'Ingegnere_Dati', company: 'Meta', title: 'Certificato professionale Meta Database Engineer', description: "", urlpage: '#', urlimg: `${this.urlImgMeta}` },
    { id: '', tag: 'Ingegnere_Dati', company: 'IBM', title: 'Certificato progessionale IBM Data Engineer', description: "", urlpage: '#', urlimg: `${this.urlImgImb}` },
    { id: '', tag: 'Resp_Progetto', company: 'IBM', title: 'Certificato professionale IBM IT Project', description: "", urlpage: '#', urlimg: `${this.urlImgImb}` },
    { id: '', tag: 'Ingegnere_Rete', company: 'Akamai', title: 'Certificato professionale di ingegneria di rete Akamai', description: "", urlpage: '#', urlimg: `${this.urlImgAkamai}` },
    { id: '', tag: 'Arch_Soluzioni', company: 'Akamai', title: 'Certificato professionale di consulenza e assistenza clienti Akamai', description: "", urlpage: '#', urlimg: `${this.urlImgAkamai}` }
  ];

  TCcard: TCcard[] = [
    { id: "", categorLav: "Ingegneria del software e informatica", tag: "Sicurezza", title: "Professionista della sicurezza informatica", description: "Sviluppa strategie per proteggere le organizzazioni da attacchi informatici e interruzioni.", key: ['Risoluzione dei problemi', 'Sfide tecniche', 'Attenzione ai dettagli'], stipendioM: 119.700, postiL: 147.793, imgCard: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/2GGzeIkgImgcPLjAceBKvS/f1c6277b9eb79ae24f8e1bc20627c12d/cybersecurity-cover.jpg?auto=format%2Ccompress&dpr=2" },
    { id: "", categorLav: "Ingegneria del software e informatica", tag: "Designer", title: "UX Designer", description: "Rendi i prodotti digitali e fisici più facili e piacevoli da usare.", key: ['Capire le persone', 'Pensare in modo creativo', 'Risoluzione dei problemi'], stipendioM: 121.200, postiL: 70.778, imgCard: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/3TEco9BXQc2mfuId5pmNXN/2806b61de246d7b08b4f5cefbe2514d7/ux-designer-cover.jpg?auto=format%2Ccompress&dpr=2" },
    { id: "", categorLav: "Ingegneria del software e informatica", tag: "Assistenza_IT", title: "Specialista dell'assistenza IT", description: "Valuta e risolvi i problemi tecnologici in modo che le apparecchiature funzionino senza problemi.", key: ['Aitare le persone', 'Risoluzione dei problemi', 'Risoluzione dei problemi'], stipendioM: 56.200, postiL: 318.249, imgCard: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/1PW1CvFwqQDn19MYzW0bHD/baf5223f1f49ee9fde334013da559032/it-support-cover.jpg?auto=format%2Ccompress&dpr=2" },
    { id: "", categorLav: "Ingegneria del software e informatica", tag: "Sviluppatore_FE", title: "Sviluppatore Front-End", description: "Progetta e sviluppa l'aspetto, l'atmosfera, le funzioni e l'esperienza utente di un sito web.", key: ['Risoluzione dei problemi', 'Pensare in modo creativo', 'Creare esperienze utente eccellenti'], stipendioM: 130.900, postiL: 29.258, imgCard: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/62YEtEKcqhqnwT8lBePhBW/03f6af20abaf6e6c162ecb79e18940b5/cover-frontend-developer.jpg?auto=format%2Ccompress&dpr=2" },
    { id: "", categorLav: "Ingegneria del software e informatica", tag: "Sviluppatore_APP", title: "Sviluppatore di applicazioni", description: "Analizza le esigenze dei clienti e progetta sistemi e soluzioni per il cloud.", key: ['Gestione dei progetti', 'Apprendimento di nuove tecnologie', 'Risoluzione dei problemi'], stipendioM: 114.600, postiL: 66.200, imgCard: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/0PPfeHCK6VPt8u20VIFzx/9e51b46939eae084619d34f4132d1905/application-developer-cover.jpg?auto=format%2Ccompress&dpr=2" },
    { id: "", categorLav: "Ingegneria del software e informatica", tag: "Sviluppatore_BE", title: "Sviluppatore back-end", description: "Sviluppa le strutture che agevolano il funzionamento dei siti web utilizzando strumenti e sistemi di programmazione standard del settore.", key: ['Pensare in modo logico', 'Risolvere problemi complessi', 'Collaborazione'], stipendioM: 148.400, postiL: 28.403, imgCard: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/17Z0RfMFbDtmzUaOcfUtHh/7041e73eb85f2783fc78570d23435974/cover-backend-developer.jpg?auto=format%2Ccompress&dpr=2" },
    { id: "", categorLav: "Ingegneria del software e informatica", tag: "Ingegnere_DO", title: "Ingegnere DevOps", description: "Costruisci gli strumenti e l'infrastruttura per consentire alle aziende di mantenere e migliorare la propria piattaforma.", key: ['Sviluppo di strumenti', 'Risoluzione dei problemi', 'Collaborazione'], stipendioM: 148.400, postiL: 28.403, imgCard: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/4xPGcEO0mojdmXcPNESUOv/790197000b33ca58c83ee6ca5ee4bc81/dev-ops-engineer.jpg?auto=format%2Ccompress&dpr=2" },
    { id: "", categorLav: "Ingegneria del software e informatica", tag: "Sviluppatore_iOS", title: "Sviluppatore iOS", description: "Sviluppa e scrive codice per applicazioni mobili ospitate su iOS, un sistema operativo utilizzato sui dispositivi Apple come iPhone e iPad.", key: ['Sfide creative', 'Creare esperienze utente migliori', 'Utilizzo di prodotti Apple'], stipendioM: 140.200, postiL: 11.382, imgCard: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/3H9ztONoEtJFe8B79WsifE/241d50889402816834d83338142b6d2f/cover-ios-developer.jpg?auto=format%2Ccompress&dpr=2" },
    { id: "", categorLav: "Ingegneria del software e informatica", tag: "Sviluppatore_ANDD", title: "Sviluppatore Android", description: "Costruire e scrivere codice per applicazioni mobili ospitate su smartphone e tablet Android.", key: ['Sfide creative', 'Creare esperienze utente migliori', 'Utilizzo di prodotti Android'], stipendioM: 141.200, postiL: 12.048, imgCard: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/44ANFFMFvQDjgd5vZ6p3oI/8afb0be7ec29027def9737f78f9a03f2/cover-android-developer.jpg?auto=format%2Ccompress&dpr=2" },
    { id: "", categorLav: "Ingegneria del software e informatica", tag: "Sviluppatore_DW", title: "Sviluppatore di data warehouse", description: "Progetta e costruisci sistemi per raccogliere, trasformare e archiviare i dati per la Business Intelligence delle aziende.", key: ['Sviluppo di strumenti', 'Identificazione dei modelli', 'Risoluzione dei problemi'], stipendioM: 76.200, postiL: 33.429, imgCard: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/5LK2tvn5Te5fuKCSgY8mfp/d7551360bd62923e115ab9dbd347281d/data-warehouse-cover.jpg?auto=format%2Ccompress&dpr=2" },
    { id: "", categorLav: "Ingegneria del software e informatica", tag: "Sviluppatore_MF", title: "Sviluppatore Mainframe (1)", description: "Sviluppa e mantieni applicazioni e sistemi per computer ad alte prestazioni.", key: ['Collaborazione', 'Apprendimento di nuove tecnologie', 'Risoluzione dei problemi'], stipendioM: 117.000, postiL: 7.673, imgCard: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/3AubUE082h5CLyvteRFdXr/cb02c08de5516456ca16c31deb595cf4/image_5.png?auto=format%2Ccompress&dpr=2" },
    { id: "", categorLav: "Business", tag: "Resp_Prog", title: "Responsabile di progetto", description: "Supervisiona la pianificazione e l'esecuzione dei progetti per garantirne il successo.", key: ['Guida di un team', 'Risoluzione dei problemi', 'Comunicazione'], stipendioM: 102.800, postiL: 336.402, imgCard: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/5DqpWgLsxYY7qiDByGV5RY/06a51ac46937084bca466f746bddfaee/project-management-cover.jpg?auto=format%2Ccompress&dpr=2" },
    { id: "", categorLav: "Business", tag: "Contabile", title: "Contabile", description: "Registra le transazioni finanziarie e gestisci i documenti finanziari.", key: ['Lavorare con i numeri', 'Attenzione ai dettagli', 'Scrittura e organizzazione'], stipendioM: 45.700, postiL: 296.935, imgCard: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/5C1fTRu0746F0z3jKFv0Bw/eee6cfea0eb0788affba732b61a01dec/book-keeper-cover.jpg?auto=format%2Ccompress&dpr=2" },
    { id: "", categorLav: "Business", tag: "ABI", title: "Analista di Business Intelligence", description: "Prendete decisioni basate sui dati attraverso l'estrazione di dati basati su SQL, la creazione di dashboard e l'analisi di report per un'organizzazione.", key: ['Analisi dei dati', 'Risoluzione dei problemi', 'Strategia'], stipendioM: 121.200, postiL: 70.778, imgCard: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/2KSCmJvJgXqcwwHH3eG8IH/1da78f36058c6f9efabbe134f5eb590a/55724_Career_Academy_3_job_roles_900x369.png?auto=format%2Ccompress&dpr=2" },
    { id: "", categorLav: "Business", tag: "Risorse_Umane", title: "Specialista delle risorse umane", description: "Assumere e collocare le persone all'interno di un'organizzazione, interpretare le politiche e affrontare le questioni relative alle relazioni con i dipendenti.", key: ['Lavorare con le persone', 'Comunicazione', 'Risoluzione dei problemi'], stipendioM: 45.700, postiL: 296.935, imgCard: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/6xrAQwl9k9klofw6Ujfv99/7704e7d570d10e4465c7584ad3f96fae/Human_Resources_Specialist.jpg?auto=format%2Ccompress&dpr=2" },
    { id: "", categorLav: "Business", tag: "Consul_Tecn", title: "Consulente tecnologico", description: "Fornisci ai clienti una guida strategica sull'uso della tecnologia per aiutarli a raggiungere i loro obiettivi aziendali.", key: ['Pensiero strategico', 'Migliorare i processi', 'Tecnologia'], stipendioM: 104.300, postiL: 102.622, imgCard: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/4kwxrl9FIgROeqddscOJdb/79d37009754d73a2c55ac393e48c7f07/technology-consultant-cover.jpg?auto=format%2Ccompress&dpr=2" },
    { id: "", categorLav: "Business", tag: "Career_Coach", title: "Career coach", description: "Aiuta le persone a pianificare le proprie scelte professionali attraverso la definizione di obiettivi, la guida alla ricerca di lavoro, lo sviluppo di competenze sul posto di lavoro e altro ancora.", key: ['Aiutare gli altri', 'Comunicazione', 'Strategia'], stipendioM: 48.000, postiL: 29.407, imgCard: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/TEv1ZZoNwKc42HAa4rrT9/5809914600c28919d61bdd36d53d25c6/career-coach-cover.jpg?auto=format%2Ccompress&dpr=2" },
    { id: "", categorLav: "Business", tag: "Servizio_Clienti", title: "Addetto al servizio clienti", description: "Risolvere i problemi, comunicare e conservare i registri per fornire un servizio di qualità e identificare le opportunità di upselling.", key: ['Aiutare gli altri', 'Risoluzione dei problemi', 'Creare esperienze positive'], stipendioM: 130.900, postiL: 29.258, imgCard: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/36Ic0IsnIk5HdIJPVGXoRk/a4ad2c0bd656aafd3ca7793b60f38dca/Customer_Service_Specialist_-_Small.png?auto=format%2Ccompress&dpr=2" },
    { id: "", categorLav: "Business", tag: "Contabilità", title: "Contabilità", description: "Supportare i contabili senior gestendo, preparando e analizzando i documenti finanziari di un'azienda.", key: ['Lavorare con i numeri', 'Risoluzione dei problemi', 'Attenzione ai dettagli'], stipendioM: 50.000, postiL: 22.146, imgCard: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/7AI1fGMlw2Pnhhwd7sMD7o/07de81218f3233c5387bb269ee8d20db/cover-accountant__1_.jpg?auto=format%2Ccompress&dpr=2" },
    { id: "", categorLav: "Business", tag: "Compensation_Analyst", title: "Compensation Analyst", description: "If you like strategic thinking, collaboration, and data analysis, this role is for you.", key: ['Compensation principles', 'Market research', 'Data analysis', 'Compliance requirements', 'Reporting', 'Job evaluation and classfication'], stipendioM: 56.700, postiL: 83.492, imgCard: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/2fHw74AdM40yQ8TzZ1AfoI/bda5951434f017f8a8e707d12a1466fa/image_7.png?auto=format%2Ccompress&dpr=2" },
    { id: "", categorLav: "Business", tag: "Payroll_Spec", title: "Payroll Specialist", description: "If you like data management, organizational skills, and problem solving, this role is for you.", key: ['Payroll fundamentals', 'Payroll processing', 'Payroll compliance', 'Payroll tax management', 'Confidentiality and security', 'Issue resolution'], stipendioM: 54.100, postiL: 46.316, imgCard: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/3gsAULXQ5VNU8ZclZlOL3F/5ee6437bdb744a388784a03ce36c0b00/image_6.png?auto=format%2Ccompress&dpr=2" },
    { id: "", categorLav: "Vendite e marketing", tag: "Marketer_Digitale", title: "Marketer digitale", description: "Definisci e sviluppa strategie digitali per ottenere la crescita del business attraverso i canali online.", key: ['Lavorare con i numeri', 'Capire le persone', 'Risoluzione dei problemi'], stipendioM: 61.300, postiL: 81.463, imgCard: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/2myQHPO0Am0qV0e0EPJF8/ffcbd652b2198fbf8b718b8f62dc4507/digital-marketer-cover.jpg?auto=format%2Ccompress&dpr=2" },
    { id: "", categorLav: "Vendite e marketing", tag: "Rapp_Vendita1", title: "Rappresentante di vendita (1)", description: "Analizza l'attività di vendita per consigliare modi per aumentare le vendite.", key: ['Interagire con le persone', 'Costruire relazioni', 'Capire le persone'], stipendioM: 60.100, postiL: 728.054, imgCard: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/ftY6eM3JrFymoMgxRDruA/14026983986dc8f76cfce61b786d0ffd/Supply-Chain-Analyst_900x369.jpg?auto=format%2Ccompress&dpr=2" },
    { id: "", categorLav: "Vendite e marketing", tag: "Rapp_Vendita2", title: "Rappresentante di vendita (2)", description: "Analizza l'attività di vendita per consigliare modi per aumentare le vendite.", key: ['Interagire con le persone', 'Costruire relazioni', 'Capire le persone'], stipendioM: 60.100, postiL: 728.054, imgCard: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/5PU6W0QmHuT0qYWbMc6pAc/7cc1910154edf9111eed1cc6acf2001d/Product-Manager_900x369.jpg?auto=format%2Ccompress&dpr=2" },
    { id: "", categorLav: "Vendite e marketing", tag: "Rapp_Vendita3", title: "Rappresentante di vendita (3)", description: "Analizza l'attività di vendita per consigliare modi per aumentare le vendite.", key: ['Interagire con le persone', 'Costruire relazioni', 'Capire le persone'], stipendioM: 60.100, postiL: 728.054, imgCard: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/2AAB38VfVwtlgXRerKQgdv/2993f603a97c2ddcb6e09bc9896e7469/Cloud-Support-Associate_900x369.jpg?auto=format%2Ccompress&dpr=2" },
    { id: "", categorLav: "Vendite e marketing", tag: "Marketer_SM", title: "Marketer dei social media", description: "Gli specialisti dei social media creano, costruiscono e gestiscono i social media di un'azienda.", key: ['Interagire con le persone', 'Seguire le tendenze', 'Pensare in modo creativo'], stipendioM: 50.000, postiL: 22.146, imgCard: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/d3KBmFnS1w0G5KvwNQ7X8/52a8514859266537014ab660f3362f4e/social-media-marketer.jpg?auto=format%2Ccompress&dpr=2" },
    { id: "", categorLav: "Vendite e marketing", tag: "Specialista_OV", title: "Specialista in operazioni di vendita", description: "Crea strategie che supportino i team di vendita per ottimizzare la crescita.", key: ['Guida di un team', 'Risoluzione dei problemi', 'Efficienza'], stipendioM: 49.000, postiL: 13.423, imgCard: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/3FsbCwMHWFzPYP6GYIVURB/b329349d3fa114c945b1c7b1d1abfc92/sales-operation-developer.jpg?auto=format%2Ccompress&dpr=2" },
    { id: "", categorLav: "Vendite e marketing", tag: "Analista_Marketing", title: "Analista di marketing", description: "Esegui ricerche e raccogli dati per aiutare le aziende a commercializzare i loro prodotti o servizi.", key: ['Lavorare con i numeri', 'Capire le persone', 'Collaborare'], stipendioM: 87.400, postiL: 5.645, imgCard: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/5f8p3WYyS8L3bpbJM4TZSb/76d85c8f2991ceb0e83646458736e365/marketing-analyst-cover.jpg?auto=format%2Ccompress&dpr=2" },
    { id: "", categorLav: "Vendite e marketing", tag: "Rapp_SV", title: "Rappresentante per lo sviluppo delle vendite", description: "Lavora con i potenziali clienti per aiutarli nel loro percorso di acquisto.", key: ['Interagire con le persone', 'Costruire relazioni', 'Capire le persone'], stipendioM: 64.900, postiL: 51.277, imgCard: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/7I6MrQ6gienrkWxPRVsuFq/5eb247c2992cadcb493d5db179bc09d1/sales-development-representative-cover.jpg?auto=format%2Ccompress&dpr=2" },
    { id: "", categorLav: "Vendite e marketing", tag: "Rapp_Vendita3b", title: "Rappresentante di vendita (3)", description: "Analizza l'attività di vendita per consigliare modi per aumentare le vendite.", key: ['Interagire con le persone', 'Costruire relazioni', 'Capire le persone'], stipendioM: 60.100, postiL: 728.054, imgCard: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/2LcOBTwvMrlnYoYp3UGXbA/2cb56ce420357d2fdb4a5fb6e1a11bb2/Real-Estate-Agent_900x369.jpg?auto=format%2Ccompress&dpr=2" },
    { id: "", categorLav: "Scienza dei dati e analisi", tag: "Analista_Dati", title: "Analista dati", description: "Raccogli, organizza e trasforma i dati per prendere decisioni informate", key: ['Attenzione ai dettagli', 'Risoluzione dei problemi', 'Lavorare con i numeri'], stipendioM: 90.500, postiL: 82.489, imgCard: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/7oeSAFfCbtJEfjncgTed55/f3a7f6baff4dfabf518d24dc34377731/data-analyst-cover.jpg?auto=format%2Ccompress&dpr=2" },
    { id: "", categorLav: "Scienza dei dati e analisi", tag: "Data_Scientist", title: "Data scientist", description: "Estrai e analizza i dati per prendere decisioni aziendali informate.", key: ['Lavorare con i numeri', 'Curiosità intellettuale', 'Scrittura e comunicazione'], stipendioM: 138.100, postiL: 69.304, imgCard: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/4gbKow1HQIjUyvr5nvxkbU/b0647c21aba1b4f28c8835dbc95704e8/data-scientist-cover.jpg?auto=format%2Ccompress&dpr=2" },
    { id: "", categorLav: "Scienza dei dati e analisi", tag: "Ingegnere_Dati", title: "Ingegnere dei dati", description: "Progetta e costruisci sistemi per raccogliere e trasformare i dati in informazioni utilizzabili per la scienza dei dati.", key: ['Lavorare con i numeri', 'Identificazione dei modelli', 'Risoluzione dei problemi'], stipendioM: 130.000, postiL: 74.302, imgCard: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/RPKgXpC4AX6SrbU425JME/8eb2a07e3c1aba158ca3b3b9788fb48a/data-engineer-cover.jpg?auto=format%2Ccompress&dpr=2" },
    { id: "", categorLav: "Ingegneria del software &amp:IT", tag: "Resp_Progetto", title: "Responsabile di progetto", description: "Supervisionare i progetti IT, assicurandosi che vengano completati entro i tempi e i budget stabiliti.", key: ['Guida di un team', 'Risoluzione dei problemi', 'Tecnologia'], stipendioM: 140.200, postiL: 11.382, imgCard: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/1YRtIfKDgQF1IOuj8sB6Br/74cdaf494fc685509f2036e55dede703/IT_Project_Manager.jpg?auto=format%2Ccompress&dpr=2" },
    { id: "", categorLav: "Ingegneria del software &amp:IT", tag: "Ingegnere_Rete", title: "Ingegnere di rete", description: "Monitoraggio, risoluzione dei problemi e manutenzione delle reti in un ambiente 24/7 per garantire stabilità e sicurezza.", key: ['Tecnologia', 'Risoluzione dei problemi', 'Pensiero analitico'], stipendioM: 50.000, postiL: 22.146, imgCard: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/5m9og9NUyChNFamaipub6f/0e7831be54ec0b91ebff889cefc5c254/Network_Engineer.jpg?auto=format%2Ccompress&dpr=2" },
    { id: "", categorLav: "Ingegneria del software &amp:IT", tag: "Arch_Soluzioni", title: "Architetto di soluzioni", description: "Lavorare a stretto contatto con i clienti per implementare e supportare le soluzioni, garantire il successo dei clienti e ridurre al minimo le interruzioni del servizio.", key: ['Tecnologia', 'Risoluzione dei problemi', 'Collaborazione'], stipendioM: 119.700, postiL: 127.793, imgCard: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/6jJwhBC7UNvSwZBVyxFnsG/fe20c5f37badd05f33e247fb777d1785/Solutions_Engineer.jpg?auto=format%2Ccompress&dpr=2" },

  ]

  getCompetenzePP() {
    return this.CompetenzePP
  }

  getInizia() {
    return this.Inizia
  }

  getNavCertificati() {
    return this.NavbarCertificati
  }
  getMenuMaterie() {
    return this.menuMaterie
  }

  getLauree() {
    return this.Lauree
  }

  getCategorLav() {
    return this.categorLav
  }

  getCertificati() {
    return this.Certificati
  }

  getTCard() {
    return this.TCcard
  }

}
