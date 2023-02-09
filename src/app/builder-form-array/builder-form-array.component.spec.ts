import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderFormArrayComponent } from './builder-form-array.component';

describe('BuilderFormArrayComponent', () => {
  let component: BuilderFormArrayComponent;
  let fixture: ComponentFixture<BuilderFormArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuilderFormArrayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuilderFormArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
