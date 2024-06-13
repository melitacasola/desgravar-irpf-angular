import { TestBed } from '@angular/core/testing';
import { IrpfService } from './irpf.service';

describe('IrpfService', () => {
  let service: IrpfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IrpfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('obtenerPorcentajeIRPF', () => {
    type TestCase =  {renta: number, expected: number}
    const testCases = [
      { renta: 12449, expected: 19 },
      { renta: 20000, expected: 24 },
      { renta: 30000, expected: 30 },
      { renta: 50000, expected: 37 },
      { renta: 100000, expected: 45 },
      { renta: 300000, expected: 47 },
      { renta: 0, expected: 0 },
    ];

    testCases.forEach(({ renta, expected }) => {
      it(`should return ${expected} for renta ${renta}`, () => {
        expect(service.getPercentageIRPF(renta)).toBe(expected);
      });
    });
  });

  describe('calcularIRPF', () => {

    const testCases = [
      {
        renta: 50000,
        ppersonal: 2000,
        pempresa: 1500,
        pautonomo: 500,
        expected: {
          renta: 50000,
          totalPlanesPensiones: 4000,
          porcentajeIRPF: 37,
          desgravacion: 1480
        }
      },
      {
        renta: 50000,
        ppersonal: 0,
        pempresa: 0,
        pautonomo: 0,
        expected: {
          renta: 50000,
          totalPlanesPensiones: 0,
          porcentajeIRPF: 37,
          desgravacion: 0
        }
      },
      {
        renta: 12449,
        ppersonal: 1000,
        pempresa: 0,
        pautonomo: 0,
        expected: {
          renta: 12449,
          totalPlanesPensiones: 1000,
          porcentajeIRPF: 19,
          desgravacion: 190
        }
      }
    ];

    // testCases.forEach(({ renta, ppersonal, pempresa, pautonomo, expected }) => {
    //   it(`should calculate correct IRPF for renta ${renta}, ppersonal ${ppersonal}, pempresa ${pempresa}, pautonomo ${pautonomo}`, () => {
    //     const result = service.calculateIRPF(renta, ppersonal, pempresa, pautonomo);
    //     expect(result.renta).toBe(expected.renta);
    //     expect(result.totalPlanesPensiones).toBe(expected.totalPlanesPensiones);
    //     expect(result.porcentajeIRPF).toBe(expected.porcentajeIRPF);
    //     expect(result.desgravacion).toBeCloseTo(expected.desgravacion, 2);
    //   });
    // });
  });
});
