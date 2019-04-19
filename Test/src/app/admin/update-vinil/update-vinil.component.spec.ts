import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVinilComponent } from './update-vinil.component';

describe('UpdateVinilComponent', () => {
  let component: UpdateVinilComponent;
  let fixture: ComponentFixture<UpdateVinilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateVinilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVinilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
