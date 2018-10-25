import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnershipManagementComponent } from './ownership-management.component';

describe('OwnershipManagementComponent', () => {
  let component: OwnershipManagementComponent;
  let fixture: ComponentFixture<OwnershipManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnershipManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnershipManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
