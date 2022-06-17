import { nascimentoModel } from "./nascimentoModel";
import { emailModel } from "./emailModel";
import { localizacaoModel } from "./localizacaoModel";
import { naturalidadeModel } from "./naturalidadeModel";
import { pacienteModel } from "./pacientesModel";
import { telefoneModel } from "./telefoneModel";
import { fotoModel } from "./fotoModel";
import { registradoModel } from "./registradoModel";

export interface resultadoModel {
  patient: pacienteModel[];
  location: localizacaoModel[];
  email: emailModel[];
  dob: nascimentoModel[];
  registered: registradoModel[];
  phone: telefoneModel[];
  picture: fotoModel[];
  nat: naturalidadeModel[];
}
