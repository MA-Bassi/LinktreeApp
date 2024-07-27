import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashLinksPageComponent } from './dash-links-page.component';

describe('DashLinksPageComponent', () => {
  let component: DashLinksPageComponent;
  let fixture: ComponentFixture<DashLinksPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashLinksPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashLinksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
