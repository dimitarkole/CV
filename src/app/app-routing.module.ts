import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMePageComponent } from './pages/about-me-page/about-me-page.component';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'about', pathMatch: 'full', component: AboutMePageComponent },
  { path: 'portfolio', pathMatch: 'full', component: PortfolioPageComponent },
  { path: 'project', pathMatch: 'full', component: ProjectPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
