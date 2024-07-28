import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashLinkCardComponent } from './dash-link-card.component';

describe('DashLinkCardComponent', () => {
  let component: DashLinkCardComponent;
  let fixture: ComponentFixture<DashLinkCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashLinkCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashLinkCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
