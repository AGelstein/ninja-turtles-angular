import { Component, inject } from '@angular/core';
import { HeroCardComponent } from '../hero-card/hero-card/hero-card.component';
import { Hero } from '../../models/Hero';
import { AuditLogRepository } from '../../repository/audit-log.repository';
import { HeroRepository } from '../../repository/hero.repository';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-hero-search-results',
  standalone: true,
  imports: [HeroCardComponent, AsyncPipe],
  templateUrl: './hero-search-results.component.html',
  styleUrl: './hero-search-results.component.css'
})
export class HeroSearchResultsComponent {
  heroRepository = inject(HeroRepository)
  auditLogRepository = inject(AuditLogRepository)

  logsExist$: Observable<boolean> = this.auditLogRepository.logsExist$
  Heroes$: Observable<Hero[]> = this.heroRepository.getAll()

  heroClick(hero: Hero) {
    this.auditLogRepository.log(`${hero.name} has been clicked`)
  }

  // TODO when there is a really long list of heroes we should break to another row after X amount
}
