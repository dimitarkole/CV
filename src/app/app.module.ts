import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './shered/navbar/navbar.component';
import { HelloComponent } from './components/hello/hello.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { SignificantItemsComponent } from './components/significant-items/significant-items.component';
import { CertificatesComponent } from './components/certificates/certificates.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { EducationComponent } from './components/education/education.component';
import { ExperiencesAndEducationComponent } from './components/experiences-and-education/experiences-and-education.component';
import { AboutMePageComponent } from './pages/about-me-page/about-me-page.component';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { GradmaChestTalesComponent } from './components/projects/gradma-chest-tales/gradma-chest-tales.component';
import { ColorFiguresComponent } from './components/projects/color-figures/color-figures.component';
import { MathHunterForFifthClassComponent } from './components/projects/math-hunter-for-fifth-class/math-hunter-for-fifth-class.component';
import { ELibraryComponent } from './components/projects/e-library/e-library.component';
import { FligthManagerComponent } from './components/projects/fligth-manager/fligth-manager.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    HelloComponent,
    AboutMeComponent,
    SignificantItemsComponent,
    CertificatesComponent,
    ExperiencesComponent,
    EducationComponent,
    ExperiencesAndEducationComponent,
    AboutMePageComponent,
    PortfolioPageComponent,
    ProjectPageComponent,
    GradmaChestTalesComponent,
    ColorFiguresComponent,
    MathHunterForFifthClassComponent,
    ELibraryComponent,
    FligthManagerComponent,
    ImageSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
