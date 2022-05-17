import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageParticularComponent } from './homepage-particular.component';

describe('HomepageParticularComponent', () => {
  let component: HomepageParticularComponent;
  let fixture: ComponentFixture<HomepageParticularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageParticularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageParticularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
