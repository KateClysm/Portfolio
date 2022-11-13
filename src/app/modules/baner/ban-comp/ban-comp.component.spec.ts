import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanCompComponent } from './ban-comp.component';

describe('BanCompComponent', () => {
  let component: BanCompComponent;
  let fixture: ComponentFixture<BanCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BanCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BanCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
