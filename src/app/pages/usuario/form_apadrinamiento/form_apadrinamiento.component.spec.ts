/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Form_apadrinamientoComponent } from './form_apadrinamiento.component';

describe('Form_apadrinamientoComponent', () => {
  let component: Form_apadrinamientoComponent;
  let fixture: ComponentFixture<Form_apadrinamientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Form_apadrinamientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Form_apadrinamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
