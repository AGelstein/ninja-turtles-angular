import { Component, inject } from '@angular/core';
import { HeroSearchComponent } from '../hero-search/hero-search.component';
import { HeroCardComponent } from '../hero-card/hero-card/hero-card.component';
import { HeroRepository } from '../../repository/hero.repository';
import { AsyncPipe, NgFor } from '@angular/common';
import { AuditLogComponent } from '../action-log/audit-log/audit-log.component';
import { AuditLogRepository } from '../../repository/audit-log.repository';
import { HeroSearchResultsComponent } from '../hero-search-results/hero-search-results.component';
import { TitlebarComponent } from "../titlebar/titlebar.component";
import { Hero } from '../../models/Hero';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroSearchComponent,
    HeroCardComponent,
    AsyncPipe,
    NgFor,
    AuditLogComponent,
    HeroSearchResultsComponent,
    TitlebarComponent
],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  Title = 'Room of Really Really Strong Dudes'
  heroRepository = inject(HeroRepository)
  auditLogRepository = inject(AuditLogRepository)
  Heroes$: Observable<Hero[]> = this.heroRepository.getAll()
}
