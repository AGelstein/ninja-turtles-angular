import { Component, inject, Input } from '@angular/core';
import { HeroCardComponent } from '../hero-card/hero-card/hero-card.component';
import { Hero } from '../../models/Hero';
import { AuditLogRepository } from '../../repository/audit-log.repository';
import { HeroRepository } from '../../repository/hero.repository';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs/internal/Observable';
import { map, tap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

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

  @Input()
  hasSearched: boolean = false

  logsExist = toSignal(this.auditLogRepository.logsExist$)
  heroes$: Observable<Hero[]> = this.heroRepository.selectAllHeroes()
  heroesExist = toSignal(this.heroes$.pipe(
    map((heroes: Hero[]) => heroes.length > 0)
  ))

  heroClick(hero: Hero) {
    this.auditLogRepository.log(`${hero.name} has been clicked`)
  }
}
