import { CreateFrequenciaDTO } from 'src/frequencia/dtos/create-frequencia.dto';
import { FrequenciaEntity } from 'src/frequencia/entities/frequencia.entity';
import { FrequenciaRepository } from '../frequencia.repository';
export class BancoFrequenciaRepository extends FrequenciaRepository{
    getAll(): Promise<FrequenciaEntity[]> {
        throw new Error('Method not implemented.');
    }
    getByCreatedAt(date: Date): Promise<FrequenciaEntity> {
        throw new Error('Method not implemented.');
    }
    getByIdAtividade(id_atividade: string): Promise<FrequenciaEntity> {
        throw new Error('Method not implemented.');
    }
    create(frequenciaDTO: CreateFrequenciaDTO): Promise<void> {
        throw new Error('Method not implemented.');
    }
    deleteAll(): Promise<void> {
        throw new Error('Method not implemented.');
    }
    deleteByID(id: string): Promise<void> {
        throw new Error('Method not implemented.');
    }
    deleteByIdAtividade(id_atividade: string): Promise<void> {
        throw new Error('Method not implemented.');
    }

}