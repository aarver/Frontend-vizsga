import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KonyvajanloComponent } from './konyvajanlo.component';

describe('KonyvajanloComponent', () => {
  let component: KonyvajanloComponent;
  let fixture: ComponentFixture<KonyvajanloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KonyvajanloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KonyvajanloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
