import { dias_da_semana } from '../../atividade/enums/dias-da-semana.enum';
export class CreateFrequenciaDTO{
    id_atividade: string;

    dias_da_semana: dias_da_semana;
}