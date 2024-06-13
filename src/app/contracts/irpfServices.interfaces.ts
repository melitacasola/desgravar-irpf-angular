import { IrpfNeeds } from "../models/irpf-needs.interface"
import { ResultadoIRPF } from "../models/resultadoIRPF-interface"

export interface IIRPFServices {
    getPercentageIRPF(number:number):number,
    calculateIRPF(irpfNeeds: IrpfNeeds): ResultadoIRPF
}