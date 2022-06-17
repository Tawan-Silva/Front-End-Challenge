import { infoModel } from "./infoModel";
import { resultadoModel } from "./resultadoModel";

export interface infoGeralModel {
  results: resultadoModel[];
  info: infoModel[];
}
