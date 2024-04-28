/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ApadrinamientosComponent } from './apadrinamientos.component';

describe('ApadrinamientosComponent', () => {
  let component: ApadrinamientosComponent;
  let fixture: ComponentFixture<ApadrinamientosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApadrinamientosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApadrinamientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
