import { Injectable } from '@angular/core';
import { TramoIRPF } from '../models/tramoIRPF-interface';
import { ResultadoIRPF } from '../models/resultadoIRPF-interface';

const tramosIRPF: TramoIRPF[] = [
  { limiteSuperior: 12449, porcentaje: 19 },
  { limiteSuperior: 20199, porcentaje: 24 },
  { limiteSuperior: 35199, porcentaje: 30 },
  { limiteSuperior: 59999, porcentaje: 37 },
  { limiteSuperior: 299999, porcentaje: 45 },
  { limiteSuperior: Infinity, porcentaje: 47 },
];

@Injectable({
  providedIn: 'root'
})

export class IrpfService {

  constructor() { }
  obtenerPorcentajeIRPF(renta: number): number {
    for (const tramo of tramosIRPF) {
      if (renta <= tramo.limiteSuperior) {
        return tramo.porcentaje;
      }
    }
    return 0;
  }

  calcularIRPF(renta: number, ppersonal: number, pempresa: number, pautonomo: number): ResultadoIRPF {
    const totalPlanesPensiones = ppersonal + pempresa + pautonomo;
    const porcentajeIRPF = this.obtenerPorcentajeIRPF(renta);
    const desgravacion = totalPlanesPensiones * (porcentajeIRPF / 100);

    return {
      renta,
      totalPlanesPensiones,
      porcentajeIRPF,
      desgravacion
    };
  }
}
