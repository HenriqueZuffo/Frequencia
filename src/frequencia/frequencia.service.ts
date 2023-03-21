import { Injectable} from '@nestjs/common';
import { CreateFrequenciaDTO } from './dtos/create-frequencia.dto';
import { FrequenciaRepository } from './repositories/frequencia.repository';

@Injectable()
export class FrequenciaService{
    constructor(
        private readonly frequenciaRepo: FrequenciaRepository
    ){}
    
    create(frequenciaDTO: CreateFrequenciaDTO){
        return this.frequenciaRepo.create(frequenciaDTO);
    }

    deleteAll(){
        return this.frequenciaRepo.deleteAll();
    }

    deleteByID(id: string){
        return this.frequenciaRepo.deleteByID(id);
    }

    deleteByIdAtividade(id_atividade: string){
        return this.frequenciaRepo.deleteByIdAtividade(id_atividade);
    }

    getAll(){
        return this.frequenciaRepo.getAll();
    }
    getByCreatedAt(date: Date){
        return this.frequenciaRepo.getByCreatedAt(date);
    }
    getByIdAtividade(id_atividade: string){
        return this.frequenciaRepo.getByIdAtividade(id_atividade);
    }
}