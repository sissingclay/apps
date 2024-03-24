import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeamsListingComponent } from './listing.component';

describe('TeamsListingComponent', () => {
  let component: TeamsListingComponent;
  let fixture: ComponentFixture<TeamsListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamsListingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TeamsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
