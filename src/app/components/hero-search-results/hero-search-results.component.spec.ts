import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSearchResultsComponent } from './hero-search-results.component';

describe('HeroSearchResultsComponent', () => {
  let component: HeroSearchResultsComponent;
  let fixture: ComponentFixture<HeroSearchResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroSearchResultsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
