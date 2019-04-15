import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VinilComponent } from './vinil.component';

describe('VinilComponent', () => {
  let component: VinilComponent;
  let fixture: ComponentFixture<VinilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VinilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VinilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
