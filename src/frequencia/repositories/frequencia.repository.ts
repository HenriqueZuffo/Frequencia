import { CreateFrequenciaDTO } from '../dtos/create-frequencia.dto';
import { FrequenciaEntity } from '../entities/frequencia.entity';
export abstract class FrequenciaRepository{
    abstract create(frequenciaDTO: CreateFrequenciaDTO): Promise<void>;
    abstract deleteAll(): Promise<void>;
    abstract deleteByID(id: string): Promise<void>;
    abstract deleteByIdAtividade(id_atividade: string): Promise<void>;
    abstract getAll(): Promise<FrequenciaEntity[]>;
    abstract getByCreatedAt(date: Date): Promise<FrequenciaEntity>;
    abstract getByIdAtividade(id_atividade: string): Promise<FrequenciaEntity>;
}