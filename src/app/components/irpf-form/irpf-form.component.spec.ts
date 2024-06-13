import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IrpfFormComponent } from './irpf-form.component';

describe('IrpfFormComponent', () => {
  let component: IrpfFormComponent;
  let fixture: ComponentFixture<IrpfFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IrpfFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IrpfFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
