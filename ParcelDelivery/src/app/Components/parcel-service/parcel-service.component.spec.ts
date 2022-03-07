import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcelServiceComponent } from './parcel-service.component';

describe('ParcelServiceComponent', () => {
  let component: ParcelServiceComponent;
  let fixture: ComponentFixture<ParcelServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParcelServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcelServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
