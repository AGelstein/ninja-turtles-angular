import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroDropdownComponent } from './hero-dropdown.component';

describe('HeroDropdownComponent', () => {
  let component: HeroDropdownComponent;
  let fixture: ComponentFixture<HeroDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroDropdownComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
