import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SearchHeroService } from '../../api/search-hero-name.service';
import { Subject, takeUntil } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { Hero } from '../../models/Hero';
import {
  SelectAllHeroQuery,
  SelectHeroCountQuery,
} from '../../repository/hero.query';

@Component({
  selector: 'app-hero-search',
  standalone: true,
  imports: [ReactiveFormsModule, AsyncPipe],
  providers: [],
  templateUrl: './hero-search.component.html',
  styleUrl: './hero-search.component.css',
})
export class HeroSearchComponent implements OnDestroy {
  searchForm: FormGroup;
  heroes: Hero[] = [];
  private _destroy$ = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private searchNameService: SearchHeroService
  ) {
    this.searchForm = this.fb.group({
      query: [''],
    });
  }

  onSubmit() {
    if (this.searchForm.valid) {
      const queryValue = this.searchForm.get('query')?.value;
      this.searchNameService
        .searchHeroes(queryValue)
        .pipe(takeUntil(this._destroy$))
        .subscribe();
    }
    // SelectHeroCountQuery.subscribe((query: any) => console.log(query));

    SelectAllHeroQuery.subscribe((heroQuery) =>
      console.log('ALL HEROES: ', heroQuery)
    );
  }

  ngOnDestroy(): void {
    this._destroy$.next();
  }
}
