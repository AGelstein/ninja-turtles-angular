import { Component, inject } from '@angular/core';
import { HeroSearchComponent } from '../hero-search/hero-search.component';
import { HeroCardComponent } from '../hero-card/hero-card/hero-card.component';
import { HeroRepository } from '../../repository/hero.repository';
import { AsyncPipe, NgFor } from '@angular/common';
import { AuditLogRepository } from '../../repository/audit-log.repository';
import { HeroSearchResultsComponent } from '../hero-search-results/hero-search-results.component';
import { TitlebarComponent } from "../titlebar/titlebar.component";
import { AuditLogComponent } from "../audit-log/audit-log.component";
import { toSignal } from '@angular/core/rxjs-interop';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroSearchComponent,
    HeroCardComponent,
    AsyncPipe,
    NgFor,
    HeroSearchResultsComponent,
    TitlebarComponent,
    AuditLogComponent,
],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  Title = 'Room of Really Really Strong Dudes'
  heroRepository = inject(HeroRepository)
  auditLogRepository = inject(AuditLogRepository)
  heroes = toSignal(this.heroRepository.selectAllHeroes())
}

