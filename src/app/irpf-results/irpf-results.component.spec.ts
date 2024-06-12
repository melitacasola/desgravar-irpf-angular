import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IrpfResultsComponent } from './irpf-results.component';

describe('IrpfResultsComponent', () => {
  let component: IrpfResultsComponent;
  let fixture: ComponentFixture<IrpfResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IrpfResultsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IrpfResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
