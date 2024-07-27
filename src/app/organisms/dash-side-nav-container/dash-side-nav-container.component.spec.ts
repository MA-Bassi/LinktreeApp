import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashSideNavContainerComponent } from './dash-side-nav-container.component';

describe('DashSideNavContainerComponent', () => {
  let component: DashSideNavContainerComponent;
  let fixture: ComponentFixture<DashSideNavContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashSideNavContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashSideNavContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
