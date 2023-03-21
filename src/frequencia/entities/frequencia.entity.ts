import { dias_da_semana } from '../../atividade/enums/dias-da-semana.enum';
export class FrequenciaEntity{
    id: string;
    //FK -> atividade
    id_atividade: string;
    dias_da_semana: dias_da_semana;
    created_at: Date;
}