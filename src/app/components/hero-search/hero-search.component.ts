import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SearchNameService } from '../../api/search-hero-name.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hero-search',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './hero-search.component.html',
  styleUrl: './hero-search.component.css',
})
export class HeroSearchComponent implements OnDestroy {
  searchForm: FormGroup;
  subscriptions = new Subscription();

  constructor(
    private fb: FormBuilder,
    private searchNameService: SearchNameService
  ) {
    this.searchForm = this.fb.group({
      query: [''],
    });
  }

  onSubmit() {
    if (this.searchForm.valid) {
      const queryValue = this.searchForm.get('query')?.value;
      this.subscriptions.add(
        this.searchNameService.searchHeroes(queryValue).subscribe((res) => {
          // this is where we will populate our store
          console.log(res);
        })
      );
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
