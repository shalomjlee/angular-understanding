import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TownhomesComponent } from './townhomes.component';

describe('TownhomesComponent', () => {
  let component: TownhomesComponent;
  let fixture: ComponentFixture<TownhomesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TownhomesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TownhomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
