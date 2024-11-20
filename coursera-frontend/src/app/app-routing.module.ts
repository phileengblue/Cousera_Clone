import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterOfAppliedDataScienceUmichComponent } from './components/university/master-of-applied-data-science-umich/master-of-applied-data-science-umich.component';
import { PageHomeComponent } from './View/page-home/page-home.component';
import { PageTrovaCarrieraComponent } from './View/page-trova-carriera/page-trova-carriera.component';
import { BackofficesComponent } from './components/backoffices/backoffices.component';
import { authGuard } from './shared/guard/auth.guard';
import { PiattaformaMainComponent } from './components/piattaforma_apprendimento/piattaforma-main/piattaforma-main.component';
import { PageCourseDetailsComponent } from './View/page-course-details/page-course-details.component';
import { PageFilterComponent } from './View/page-filter/page-filter.component';
import { SkillComponentsComponent } from './components/skill-components/skill-components.component';
import { RiepilogoComponent } from './components/riepilogo/riepilogo.component';

const routes: Routes = [
  {path:'',component:PageHomeComponent,},
  {path:'master-of-applied-data-science-umich',component:MasterOfAppliedDataScienceUmichComponent},
  {path:'TrovaCarriera',component:PageTrovaCarrieraComponent},
  {path:'home',component:PageHomeComponent,},
  {path:'piattaforma_apprendimento',component:PiattaformaMainComponent,},
  {path:'dettagli_corsi',component:PageCourseDetailsComponent,},
  {path:'page_filter',component:PageFilterComponent,},
  {path:'Lista_corsi',component:PiattaformaMainComponent,},
  { path: 'skill-candidate', component: SkillComponentsComponent },
  { path: 'skills-summary', component: RiepilogoComponent },
  {
    path: 'admin',
    component: BackofficesComponent,
    canActivate: [authGuard],
    data: { role: ['admin'] },
    
    children: [
      {
        path: '#course',
        component: BackofficesComponent,
        canActivate: [authGuard],
      },
      {
        path: '#professor',
        component: BackofficesComponent,
        canActivate: [authGuard],
      },
      {
        path: '#university',
        component: BackofficesComponent,
        canActivate: [authGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
