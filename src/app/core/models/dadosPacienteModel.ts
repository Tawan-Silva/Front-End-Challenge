import { nascimentoModel } from "./nascimentoModel";
import { emailModel } from "./emailModel";
import { idModel } from "./idModel";
import { localizacaoModel } from "./localizacaoModel";
import { nomeModel } from "./nomeModel";
import { fotoModel } from "./fotoModel";

export class dadosPacienteModel {
  constructor(public picture: fotoModel[],
    public name: nomeModel[],
    public email: emailModel[],
    public gender: string,
    public dob: nascimentoModel[],
    public phone: string,
    public nat: string,
    public location: localizacaoModel[],
    public id: idModel[],
  ) { }
}
