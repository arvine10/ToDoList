import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaksItemComponent } from './taks-item.component';

describe('TaksItemComponent', () => {
  let component: TaksItemComponent;
  let fixture: ComponentFixture<TaksItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaksItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaksItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
