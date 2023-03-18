import { dias_da_semana } from '../enums/dias-da-semana.enum';
export class AtividadeEntity{
    id: string;
    descricao: string;
    DiasDaSemana: dias_da_semana[];
}