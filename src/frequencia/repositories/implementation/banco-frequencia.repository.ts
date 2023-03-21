import { CreateFrequenciaDTO } from 'src/frequencia/dtos/create-frequencia.dto';
import { FrequenciaRepository } from '../frequencia.repository';
export class BancoFrequenciaRepository extends FrequenciaRepository{
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