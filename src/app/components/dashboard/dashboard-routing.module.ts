import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { UniversityComponent } from './university/university.component';
import { BitcoinComponent } from './bitcoin/bitcoin.component';
import { ServerComponent } from './server/server.component';
import { ProjectComponent } from './project/project.component';
import { QuartertwoComponent} from './quartertwo/quartertwo.component';

import { QuarterthreeComponent} from './quarterthree/quarterthree.component';
import { QuarterfourComponent} from './quarterfour/quarterfour.component';
import { QuarteroneComponent} from './quarterone/quarterone.component';

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
import { K12021Component } from './k12021/k12021.component';

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
import { NewsletterQ3Component } from './newsletter-q3/newsletter-q3.component';
import { NewsletterQ4Component } from './newsletter-q4/newsletter-q4.component';
import { NewsletterQ2Component } from './newsletter-q2/newsletter-q2.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'default',
        component: DefaultComponent,
        data: {
          title: "Default",
          breadcrumb: "Default"
        }
      },
      // {
      //   path: 'quartertwo',
      //   component: QuartertwoComponent,
      //   data: {
      //     title: "quartertwo",
      //     breadcrumb: "quartertwo"
      //   }
      // },
      {
        path: 'e-commerce',
        component: ECommerceComponent,
        data: {
          title: "E-commerce",
          breadcrumb: "E-commerce"
        }
      },
      {
        path: 'university',
        component: UniversityComponent,
        data: {
          title: "University",
          breadcrumb: "University"
        }
      },
      {
        path: 'bitcoin',
        component: BitcoinComponent,
        data: {
          title: "Crypto",
          breadcrumb: "Crypto"
        }
      },
      // {
      //   path: 'quartertwo',
      //   component: QuartertwoComponent,
      //   data: {
      //     title: "quartertwo",
      //     breadcrumb: "quartertwo"
      //   }
      // },
      {
        path: 'project',
        component: ProjectComponent,
        data: {
          title: "Project",
          breadcrumb: "Project"
        }
      },
      {
        path: 'q12017',
        component: Q12017Component,
        data: {
          title: "q1-2017",
          breadcrumb: "q1-2017"
        }
      },
      {
        path: 'q22017',
        component: Q22017Component,
        data: {
          title: "q2-2017",
          breadcrumb: "q2-2017"
        }
      },
      {
        path: 'q32017',
        component: Q32017Component,
        data: {
          title: "q3-2017",
          breadcrumb: "q3-2017"
        }
      },
      {
        path: 'q42017',
        component: Q42017Component,
        data: {
          title: "q4-2017",
          breadcrumb: "q4-2017"
        }
      },
      {
        path: 'k12017',
        component: K12017Component,
        data: {
          title: "k1-2017",
          breadcrumb: "k1-2017"
        }
      },
      {
        path: 'q12018',
        component: Q12018Component,
        data: {
          title: "q1-2018",
          breadcrumb: "q1-2018"
        }
      },
      {
        path: 'q22018',
        component: Q22018Component,
        data: {
          title: "q2-2018",
          breadcrumb: "q2-2018"
        }
      },
      {
        path: 'q32018',
        component: Q32018Component,
        data: {
          title: "q3-2018",
          breadcrumb: "q3-2018"
        }
      },
      {
        path: 'q42018',
        component: Q42018Component,
        data: {
          title: "q4-2018",
          breadcrumb: "q4-2018"
        }
      },
      {
        path: 'q12019',
        component: Q12019Component,
        data: {
          title: "q1-2019",
          breadcrumb: "q1-2019"
        }
      },
      {
        path: 'q12019',
        component: Q12019Component,
        data: {
          title: "q1-2019",
          breadcrumb: "q1-2019"
        }
      },
      {
        path: 'q22019',
        component: Q22019Component,
        data: {
          title: "q2-2019",
          breadcrumb: "q2-2019"
        }
      },
      {
        path: 'q32019',
        component: Q32019Component,
        data: {
          title: "q3-2019",
          breadcrumb: "q3-2019"
        }
      },
      {
        path: 'q42019',
        component: Q42019Component,
        data: {
          title: "q4-2019",
          breadcrumb: "q4-2019"
        }
      },
      {
        path: 'q12020',
        component: Q12020Component,
        data: {
          title: "q12020",
          breadcrumb: "q12020"
        }
      },
      {
        path: 'q22020',
        component: Q22020Component,
        data: {
          title: "q2-2020",
          breadcrumb: "q2-2020"
        }
      },
      {
        path: 'q32020',
        component: Q32020Component,
        data: {
          title: "q3-2020",
          breadcrumb: "q3-2020"
        }
      },
      {
        path: 'q42020',
        component: Q42020Component,
        data: {
          title: "q4-2020",
          breadcrumb: "q4-2020"
        }
      },
      {
        path: 'q12021',
        component: Q12021Component,
        data: {
          title: "q1-2021",
          breadcrumb: "q1-2021"
        }
      },
      {
        path: 'q22021',
        component: Q22021Component,
        data: {
          title: "q2-2021",
          breadcrumb: "q2-2021"
        }
      },
      {
        path: 'q32021',
        component: Q32021Component,
        data: {
          title: "q3-2021",
          breadcrumb: "q3-2021"
        }
      },
      {
        path: 'q42021',
        component: Q42021Component,
        data: {
          title: "q4-2021",
          breadcrumb: "q4-2021"
        }
      },

      {
        path: 'k12017',
        component: K12017Component,
        data: {
          title: "k1-2017",
          breadcrumb: "k1-2017"
        }
      },
      {
        path: 'k12018',
        component: K12018Component,
        data: {
          title: "k1-2018",
          breadcrumb: "k1-2018"
        }
      },
      {
        path: 'k12019',
        component: K12019Component,
        data: {
          title: "k1-2019",
          breadcrumb: "k1-2019"
        }
      },
      {
        path: 'k12020',
        component: K12020Component,
        data: {
          title: "k1-2020",
          breadcrumb: "k1-2020"
        }
      },
      {
        path: 'k12021',
        component: K12021Component,
        data: {
          title: "k1-2021",
          breadcrumb: "k1-2021"
        }
      },
      {
        path: 'capitalcall',
        component: CapitalcallComponent,
        data: {
          title: "capitalcall",
          breadcrumb: "capitalcall"
        }
      },
      {
        path: 'capitalcall2017',
        component: CapitalCall2017Component,
        data: {
          title: "capitalcall2017",
          breadcrumb: "capitalcall2017"
        }
      },
      {
        path: 'capitalcall2018',
        component: CapitalCall2018Component,
        data: {
          title: "capitalcall2018",
          breadcrumb: "capitalcall2018"
        }
      },
      {
        path: 'capitalcall2019',
        component: CapitalCall2019Component,
        data: {
          title: "capitalcall2019",
          breadcrumb: "capitalcall2019"
        }
      },
    
      {
        path: 'capitalaccount2017',
        component: Capitalaccount2017Component,
        data: {
          title: "capitalacct-2017",
          breadcrumb: "capitalacct-2017"
        }
      },
      {
        path: 'capitalcall2021',
        component: CapitalCall2021Component,
        data: {
          title: "capitalcall2021",
          breadcrumb: "capitalcall2021"
        }
      },
      {
        path: 'capitalcall2020',
        component: CapitalCall2020Component,
        data: {
          title: "capitalcall2020",
          breadcrumb: "capitalcall2020"
        }
      },

      {
        path: 'capitalaccount2018',
        component: Capitalaccount2018Component,
        data: {
          title: "capitalaccount-2018",
          breadcrumb: "capitalaccount-2018"
        }
      },

      {
        path: 'capitalaccount2019',
        component: Capitalaccount2019Component,
        data: {
          title: "capitalaccount2019",
          breadcrumb: "capitalaccount2019"
        }
      },

      {
        path: 'capitalaccount2020',
        component: Capitalaccount2020Component,
        data: {
          title: "capitalaccount-2020",
          breadcrumb: "capitalaccount-2020"
        }
      },
   
      {
        path: 'capitalaccount2021',
        component: Capitalaccount2021Component,
        data: {
          title: "capitalaccount-2021",
          breadcrumb: "capitalaccount-2021"
        }
      }, 
      
      {
        path: 'distribution2017',
        component: Distribution2017Component,
        data: {
          title: "distribution2017",
          breadcrumb: "distribution2017"
        }
      },
      
      {
        path: 'distribution2018',
        component: Distribution2018Component,
        data: {
          title: "distribution2018",
          breadcrumb: "distribution2018"
        }
      },   {
        path: 'distribution2019',
        component: Distribution2019Component,
        data: {
          title: "distribution2019",
          breadcrumb: "distribution2019"
        }
      },   
      
      {
        path: 'distribution2020',
        component: Distribution2020Component,
        data: {
          title: "distribution2020",
          breadcrumb: "distribution2020"
        }
      },
      {
        path: 'newsletter-q1',
        component: NewsletterQ1Component,
        data: {
          title: "NewsletterQ1",
          breadcrumb: "Newsletter-Q1"
        }
      },
      {
        path: 'newsletter-q2',
        component: NewsletterQ2Component,
        data: {
          title: "NewsletterQ2",
          breadcrumb: "Newsletter-Q2"
        }
      },  
      {
        path: 'newsletter-q3',
        component: NewsletterQ3Component,
        data: {
          title: "NewsletterQ3",
          breadcrumb: "Newsletter-Q3"
        }
      },  
      {
        path: 'newsletter-q4',
        component: NewsletterQ4Component,
        data: {
          title: "NewsletterQ4",
          breadcrumb: "Newsletter-Q4"
        }
      },
      {
        path: 'distribution2021',
        component: Distribution2021Component,
        data: {
          title: "distribution2021",
          breadcrumb: "distribution2021"
        }
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
