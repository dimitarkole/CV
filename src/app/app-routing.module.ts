import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMePageComponent } from './pages/about-me-page/about-me-page.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';

const routes: Routes = [
  { path: 'about', component: AboutMePageComponent },
  { path: 'portfolio', component: PortfolioPageComponent },
  { path: 'project', component: ProjectPageComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', pathMatch: 'full', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
