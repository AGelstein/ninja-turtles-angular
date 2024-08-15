import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SearchHeroService } from '../../api/search-hero-name.service';
import { AsyncPipe } from '@angular/common';
import { Hero } from '../../models/Hero';
import { AuditLogRepository } from '../../repository/audit-log.repository';

@Component({
  selector: 'app-hero-search',
  standalone: true,
  imports: [ReactiveFormsModule, AsyncPipe],
  providers: [],
  templateUrl: './hero-search.component.html',
  styleUrl: './hero-search.component.css',
})
export class HeroSearchComponent {
  auditLogRepository = inject(AuditLogRepository)
  searchNameService = inject(SearchHeroService);
  searchForm: FormGroup;
  heroes: Hero[] = [];

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      query: [''],
    });
  }

  onSubmit() {
    if (this.searchForm.valid) {
      const queryValue = this.searchForm.get('query')?.value;
      this.searchNameService.searchHeroes(queryValue);
    }
    this.auditLogRepository.getAllAuditLogRows().subscribe(console.log)
  }
}
