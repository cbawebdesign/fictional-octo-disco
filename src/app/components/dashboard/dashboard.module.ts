import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartistModule } from 'ng-chartist';
import { ChartsModule } from 'ng2-charts';
import { CountToModule } from 'angular-count-to';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from "../../shared/shared.module";

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DefaultComponent } from './default/default.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { UniversityComponent } from './university/university.component';
import { BitcoinComponent } from './bitcoin/bitcoin.component';
import { ServerComponent } from './server/server.component';
import { ProjectComponent } from './project/project.component';
import {QuartertwoComponent} from './quartertwo/quartertwo.component';
import {QuarterthreeComponent} from './quarterthree/quarterthree.component';
import {QuarterfourComponent} from './quarterfour/quarterfour.component';
import {QuarteroneComponent} from './quarterone/quarterone.component';


import { LP01Q3Component } from './lp01-q3/lp01-q3.component';
import { Q12017Component } from './q12017/q12017.component';
import { Q22017Component } from './q22017/q22017.component';
import { Q32017Component } from './q32017/q32017.component';
import { Q42017Component } from './q42017/q42017.component';
import { Q12018Component } from './q12018/q12018.component';
import { Q22018Component } from './q22018/q22018.component';
import { Q32018Component } from './q32018/q32018.component';
import { Q42018Component } from './q42018/q42018.component';
import { Q12019Component } from './q12019/q12019.component';
import { Q22019Component } from './q22019/q22019.component';
import { Q32019Component } from './q32019/q32019.component';
import { Q42019Component } from './q42019/q42019.component';
import { Q12020Component } from './q12020/q12020.component';
import { Q22020Component } from './q22020/q22020.component';
import { Q32020Component } from './q32020/q32020.component';
import { Q42020Component } from './q42020/q42020.component';
import { Q12021Component } from './q12021/q12021.component';
import { Q22021Component } from './q22021/q22021.component';
import { Q32021Component } from './q32021/q32021.component';
import { Q42021Component } from './q42021/q42021.component';
import { CapitalcallComponent } from './capitalcall/capitalcall.component';
import { K12017Component } from './k12017/k12017.component';
import { K12018Component } from './k12018/k12018.component';
import { K12019Component } from './k12019/k12019.component';
import { K12020Component } from './k12020/k12020.component';
import { Capitalaccount2017Component } from './capitalaccount2017/capitalaccount2017.component';
import { Capitalaccount2018Component } from './capitalaccount2018/capitalaccount2018.component';
import { Capitalaccount2019Component } from './capitalaccount2019/capitalaccount2019.component';
import { Capitalaccount2020Component } from './capitalaccount2020/capitalaccount2020.component';
import { Capitalaccount2021Component } from './capitalaccount2021/capitalaccount2021.component';
import { CapitalCall2017Component } from './capital-call2017/capital-call2017.component';
import { CapitalCall2018Component } from './capital-call2018/capital-call2018.component';
import { CapitalCall2019Component } from './capital-call2019/capital-call2019.component';
import { CapitalCall2020Component } from './capital-call2020/capital-call2020.component';
import { CapitalCall2021Component } from './capital-call2021/capital-call2021.component';
import { Distribution2017Component } from './distribution2017/distribution2017.component';
import { Distribution2018Component } from './distribution2018/distribution2018.component';
import { Distribution2019Component } from './distribution2019/distribution2019.component';
import { Distribution2020Component } from './distribution2020/distribution2020.component';
import { Distribution2021Component } from './distribution2021/distribution2021.component';
import { NewsletterQ1Component } from './newsletter-q1/newsletter-q1.component';
import { NewsletterQ2Component } from './newsletter-q2/newsletter-q2.component';
import { NewsletterQ3Component } from './newsletter-q3/newsletter-q3.component';
import { NewsletterQ4Component } from './newsletter-q4/newsletter-q4.component';
import { K12021Component } from './k12021/k12021.component';

@NgModule({
  declarations: [
    DefaultComponent, 
    ECommerceComponent, 
    UniversityComponent, 
    BitcoinComponent, 
    ServerComponent, 
    QuartertwoComponent,
    QuarterthreeComponent,
    QuarterfourComponent,
    ProjectComponent,
    LP01Q3Component,
    QuarteroneComponent,
    Q12017Component, Q22017Component, Q32017Component, Q42017Component, Q12018Component, Q22018Component, Q32018Component, Q42018Component, Q12019Component, Q22019Component, Q32019Component, Q42019Component, Q12020Component, Q22020Component, Q32020Component, Q42020Component, Q12021Component, Q22021Component, Q32021Component, Q42021Component, CapitalcallComponent, K12017Component, K12018Component, K12019Component, K12020Component, Capitalaccount2017Component, Capitalaccount2018Component, Capitalaccount2019Component, Capitalaccount2020Component, Capitalaccount2021Component, CapitalCall2017Component, CapitalCall2018Component, CapitalCall2019Component, CapitalCall2020Component, CapitalCall2021Component, Distribution2017Component, Distribution2018Component, Distribution2019Component, Distribution2020Component, Distribution2021Component, NewsletterQ1Component, NewsletterQ2Component, NewsletterQ3Component, NewsletterQ4Component, K12021Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    CarouselModule,
    NgbModule,
    ChartistModule,
    ChartsModule,
    CountToModule,
    DashboardRoutingModule,
    NgxChartsModule,
    Ng2GoogleChartsModule,
    SharedModule,
    NgxDatatableModule
  ]
})
export class DashboardModule { }
