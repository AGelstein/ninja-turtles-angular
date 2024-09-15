import { Component, inject, input } from '@angular/core';
import { Hero } from '../../../models/Hero';
import { AuditLogRepository } from '../../../repository/audit-log.repository';
@Component({
  selector: 'app-hero-card',
  standalone: true,
  imports: [],
  templateUrl: './hero-card.component.html',
})
export class HeroCardComponent  {
  public hero = input.required<Hero>()
  auditLogRepository = inject(AuditLogRepository)

  heroClick(hero: Hero) {
    this.auditLogRepository.log(`${hero.name} has been clicked`)
  }
}
