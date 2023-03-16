import { CreateFrequenciaDto } from '../dto/create-frequencia.dto';
import { UpdateFrequenciaDto } from '../dto/update-frequencia.dto';
import { Frequencia } from '../entities/frequencia.entity';
export abstract class FrequenciaRepository{
    abstract create(frequenciaDto: CreateFrequenciaDto): Promise<void>;
    abstract update(frequenciaDto: UpdateFrequenciaDto): Promise<void>;
    abstract findById(id: string): Promise<Frequencia>;
    abstract findByContainingName(name: string): Promise<Frequencia[]>;
    abstract delete(id: string): Promise<void>;
    abstract deleteAll(id: string): Promise<void>;
}