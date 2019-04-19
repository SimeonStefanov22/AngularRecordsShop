import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVinilComponent } from './create-vinil.component';

describe('CreateVinilComponent', () => {
  let component: CreateVinilComponent;
  let fixture: ComponentFixture<CreateVinilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateVinilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVinilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
