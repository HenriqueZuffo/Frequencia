import { dias_da_semana } from '../enums/dias-da-semana.enum';
export class UpdateFrequenciaDto{
    id: string;
    descricao?: string;
    dias?: dias_da_semana[];
}