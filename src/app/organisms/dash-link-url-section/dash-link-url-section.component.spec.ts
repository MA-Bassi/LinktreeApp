import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashLinkUrlSectionComponent } from './dash-link-url-section.component';

describe('DashLinkUrlSectionComponent', () => {
  let component: DashLinkUrlSectionComponent;
  let fixture: ComponentFixture<DashLinkUrlSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashLinkUrlSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashLinkUrlSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
