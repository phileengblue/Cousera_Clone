import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N, it_IT } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import it from '@angular/common/locales/it';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NavbarComponent } from './componenti/navbar/navbar.component';
import { ImmagineHeroComponent } from './componenti/immagine-hero/immagine-hero.component';
import { NavButtonSignupComponent } from './componenti/navbar/navbarComponenti/nav-button-signup/nav-button-signup.component';
import { NavSearchbarComponent } from './componenti/navbar/navbarComponenti/nav-searchbar/nav-searchbar.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NavDropendComponent } from './componenti/navbar/navbarComponenti/nav-dropend/nav-dropend.component';
import { DatabaseService } from './service/database.service';
import { NavDropendMaterieComponent } from './componenti/navbar/navbarComponenti/nav-dropend-materie/nav-dropend-materie.component';
import { NavDropendCertificatiComponent } from './componenti/navbar/navbarComponenti/nav-dropend-certificati/nav-dropend-certificati.component';
import { NzNoAnimationModule } from 'ng-zorro-antd/core/no-animation';
import { NavModalSearchbarComponent } from './componenti/navbar/navbarComponenti/nav-modal-searchbar/nav-modal-searchbar.component';
import { NbButtonEsploraResponsiveComponent } from './componenti/navbar/navbarComponenti/nb-button-esplora-responsive/nb-button-esplora-responsive.component';
import { NbButtonEsploraComponent } from './componenti/navbar/navbarComponenti/nb-button-esplora/nb-button-esplora.component';
import { SezLogoComponent } from './componenti/sez-logo/sez-logo.component';
import { SezCCommunityComponent } from './componenti/sez-ccommunity/sez-ccommunity.component';
import { FooterComponent } from './components/home_page/footer/footer.component';
import { HeaderComponent } from './components/university/header/header.component';
import { MidSectionComponent } from './components/university/mid-section/mid-section.component';
import { EndSectionComponent } from './components/university/end-section/end-section.component';
import { MasterOfAppliedDataScienceUmichComponent } from './components/university/master-of-applied-data-science-umich/master-of-applied-data-science-umich.component';
import { HeadSectionComponent } from './components/piattaforma_apprendimento/head-section/head-section.component';
import { MiddleSectionComponent } from './components/piattaforma_apprendimento/middle-section/middle-section.component';
import { SectionSolutionComponent } from './components/home_page/section-solution/section-solution.component';
import { PersonalObjectComponent } from './components/home_page/personal-object/personal-object.component';
import { TrovaCarSezione1Component } from './componenti/trova-car-sezione1/trova-car-sezione1.component';
import { TrovaCarSezione2Component } from './componenti/trova-car-sezione2/trova-car-sezione2.component';
import { TrovaCarSezione3Component } from './componenti/trova-car-sezione3/trova-car-sezione3.component';
import { ChipAddDinamyComponent } from './componenti/trova-car-sezione3/componenti/chip-add-dinamy/chip-add-dinamy.component';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { Tcs3CardComponent } from './componenti/trova-car-sezione3/componenti/tcs3-card/tcs3-card.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { PageTrovaCarrieraComponent } from './View/page-trova-carriera/page-trova-carriera.component';
import { PageHomeComponent } from './View/page-home/page-home.component';
import { TrovaCarSezione4Component } from './componenti/trova-car-sezione4/trova-car-sezione4.component';
import { TrovaCarSezione5Component } from './componenti/trova-car-sezione5/trova-car-sezione5.component';
import { TrovaCarSezione6Component } from './componenti/trova-car-sezione6/trova-car-sezione6.component';
import { TrovaCarSezione7Component } from './componenti/trova-car-sezione7/trova-car-sezione7.component';
import { Tcs4CaroselloVideoCardComponent } from './componenti/trova-car-sezione4/componenti/tcs4-carosello-video-card/tcs4-carosello-video-card.component';
import { ModalComponent } from './components/modal/modal.component';
import { BackofficesComponent } from './components/backoffices/backoffices.component';
import { PiattaformaMainComponent } from './components/piattaforma_apprendimento/piattaforma-main/piattaforma-main.component';
import { NavbarAppredimentoComponent } from './components/piattaforma_apprendimento/navbar-appredimento/navbar-appredimento.component';
import { AuthInterceptor } from './shared/interceptor/auth.interceptor';
import { AuthService } from './shared/service/auth/auth.service';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { ReactiveFormsModule } from '@angular/forms'; 
import { NzModalModule } from 'ng-zorro-antd/modal';
import { Tcs6CaroselForMobileComponent } from './componenti/trova-car-sezione6/response/tcs6-carosel-for-mobile/tcs6-carosel-for-mobile.component';
import { Tcs6CaroselForTabletComponent } from './componenti/trova-car-sezione6/response/tcs6-carosel-for-tablet/tcs6-carosel-for-tablet.component';
import { ModalSignUpComponent } from './components/modal/componenti/modal-sign-up/modal-sign-up.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { CourseTabsComponent } from './components/course-tabs/course-tabs.component';
import { CourseInfoComponent } from './components/course-info/course-info.component';
import { DateService } from './shared/service/date/date.service';
import { CourseService } from './shared/service/course/course.service';
import { ButtonDateComponent } from './components/button-date/button-date.component';
import { PageCourseDetailsComponent } from './View/page-course-details/page-course-details.component';
import { SectionCourseFilteringComponent } from './componenti/section-course-filtering/section-course-filtering.component';
import { PageFilterComponent } from './View/page-filter/page-filter.component';
import { MiddleSection2Component } from './components/piattaforma_apprendimento/middle-section2/middle-section2.component';
import { FinalSectionComponent } from './components/piattaforma_apprendimento/final-section/final-section.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { SkillComponentsComponent } from './components/skill-components/skill-components.component';
import { RiepilogoComponent } from './components/riepilogo/riepilogo.component';
import { ParentsComponent } from './components/parent/parents/parents.component';
// import { LoginComponent } from './components/modal/login/login.component';
// import { RegisterComponent } from './components/modal/register/register.component';

registerLocaleData(it);

@NgModule({
  declarations: [AppComponent,NavbarComponent, NavDropendComponent, NavDropendCertificatiComponent, NavDropendMaterieComponent,
    NavModalSearchbarComponent,NbButtonEsploraComponent, NbButtonEsploraResponsiveComponent,SezLogoComponent,SezCCommunityComponent,
    ImmagineHeroComponent, FooterComponent, NavSearchbarComponent, NavButtonSignupComponent, CarouselComponent, HeaderComponent,
    MidSectionComponent, EndSectionComponent,MasterOfAppliedDataScienceUmichComponent, NavbarComponent, HeadSectionComponent, MiddleSectionComponent,
    SectionSolutionComponent, PersonalObjectComponent, TrovaCarSezione1Component, TrovaCarSezione2Component, TrovaCarSezione3Component, 
    ChipAddDinamyComponent, Tcs3CardComponent, PageTrovaCarrieraComponent, PageHomeComponent, TrovaCarSezione4Component, TrovaCarSezione5Component, 
    TrovaCarSezione6Component, TrovaCarSezione7Component, Tcs4CaroselloVideoCardComponent, ModalComponent, BackofficesComponent, CarouselComponent, PiattaformaMainComponent, NavbarAppredimentoComponent, 
    Tcs6CaroselForMobileComponent, Tcs6CaroselForTabletComponent, ModalSignUpComponent,
    CourseDetailsComponent,
    CourseTabsComponent,
    CourseInfoComponent,
    ButtonDateComponent,
    PageCourseDetailsComponent,
    SectionCourseFilteringComponent,
    PageFilterComponent, 
    MiddleSection2Component, FinalSectionComponent, CourseListComponent,  
    SkillComponentsComponent, 
    RiepilogoComponent, ParentsComponent, 
   // LoginComponent, RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    NzLayoutModule,
    NzMenuModule,
    NzAutocompleteModule,
    AutocompleteLibModule,
    NzInputModule,
    NzIconModule,
    NzButtonModule,
    NzTagModule,
    NzIconModule,
    BrowserAnimationsModule,
    NzSelectModule,
    NzDatePickerModule,
    ReactiveFormsModule,
    NzNoAnimationModule,
    NzModalModule
    
  ],
  providers: [{ provide: NZ_I18N, useValue: it_IT  },    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  }, DatabaseService, AuthService, AuthInterceptor, DateService, CourseService,],
  bootstrap: [AppComponent],
})
export class AppModule { }
