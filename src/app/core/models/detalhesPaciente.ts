import { nascimentoModel } from "./nascimentoModel";
import { emailModel } from "./emailModel";
import { idModel } from "./idModel";
import { localizacaoModel } from "./localizacaoModel";
import { loginModel } from "./loginModel";
import { nomeModel } from "./nomeModel";
import { fotoModel } from "./fotoModel";
import { registradoModel } from "./registradoModel";

export class detalhesPacienteModel {
  cell!: string;
  dob!: nascimentoModel;
  email!: emailModel;
  gender!: string;
  id!: idModel;
  location!: localizacaoModel;
  login!: loginModel;
  name!: nomeModel;
  nat!: string;
  phone!: string;
  picture!: fotoModel;
  registered!: registradoModel;
}
