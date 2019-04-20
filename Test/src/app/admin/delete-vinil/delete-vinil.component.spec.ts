import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteVinilComponent } from './delete-vinil.component';

describe('DeleteVinilComponent', () => {
  let component: DeleteVinilComponent;
  let fixture: ComponentFixture<DeleteVinilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteVinilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteVinilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
