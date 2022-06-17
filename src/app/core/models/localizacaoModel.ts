import { coordenadasModel } from "./cordenadasModel";
import { ruaModel } from "./ruaModel";
import { fusoHorarioModel } from "./fusoHorarioModel";

export interface localizacaoModel {
  street: ruaModel;
  city: string;
  state: string;
  postcode: string;
  coordinates: coordenadasModel[];
  timezone: fusoHorarioModel[];
}
