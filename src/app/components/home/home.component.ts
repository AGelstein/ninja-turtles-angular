import { Component, inject } from '@angular/core';
import { HeroSearchComponent } from '../hero-search/hero-search.component';
import { HeroCardComponent } from '../hero-card/hero-card/hero-card.component';
import { HeroRepository } from '../../repository/hero.repository';
import { AsyncPipe, NgFor } from '@angular/common';
import { AuditLogComponent } from '../action-log/audit-log/audit-log.component';
import { AuditLogRepository } from '../../repository/audit-log.repository';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroSearchComponent,
    HeroCardComponent,
    AsyncPipe,
    NgFor,
    AuditLogComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  Title = 'Room of Really Really Strong Dudes'
  heroRepository = inject(HeroRepository)
  auditLogRepository = inject(AuditLogRepository)

  logsExist$ = this.auditLogRepository.logsExist$
  Heroes$ = this.heroRepository.getAll()
}
