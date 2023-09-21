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
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { DimSecuritySystemComponent } from './components/projects/dim-security-system/dim-security-system.component';
import { AlgorithmsComponent } from './components/projects/algorithms/algorithms.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { VacationManagerComponent } from './components/projects/vacation-manager/vacation-manager.component';
import { MusicHubComponent } from './components/projects/music-hub/music-hub.component';
import { MusicHubShopComponent } from './components/projects/music-hub-shop/music-hub-shop.component';
import { RentACarComponent } from './components/projects/rent-acar/rent-acar.component';
import { CareerComponent } from './components/career/career.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ETableComponent } from './components/projects/e-table/e-table.component';
import { HotelManagerComponent } from './components/projects/hotel-manager/hotel-manager.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { RossAutoComponent } from './components/projects/ross-auto/ross-auto.component';
import { PortfolioProjectComponent } from './components/portfolio-project/portfolio-project.component';
import { WavResizerComponent } from './components/projects/wav-resizer/wav-resizer.component';

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
    ImageSliderComponent,
    DimSecuritySystemComponent,
    AlgorithmsComponent,
    SocialMediaComponent,
    VacationManagerComponent,
    MusicHubComponent,
    MusicHubShopComponent,
    RentACarComponent,
    CareerComponent,
    ContactComponent,
    ETableComponent,
    HotelManagerComponent,
    RossAutoComponent,
    PortfolioProjectComponent,
    WavResizerComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
  ],
  providers: [
    NgbActiveModal,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
