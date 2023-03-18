import { Injectable } from '@nestjs/common';
import { CreateAtividadeDto } from './dtos/create-atividade.dto';
import { AtividadeRepository } from './repositories/atividade.repository';
import { UpdateAtividadeDTO } from './dtos/update-atividade.dto';

@Injectable()
export class AtividadeService {
    constructor(
        private readonly atividadeRepo: AtividadeRepository
    ){}

    async create(atividade: CreateAtividadeDto){
        return this.atividadeRepo.create(atividade);
    }

    async findAll(){
        return this.atividadeRepo.findAll();
    }

    async findById(id: string){
        return this.atividadeRepo.findById(id);   
    }

    async findByDescricao(desc: string){
        return this.atividadeRepo.findByDescricao(desc);
    }

    async update(atividade: UpdateAtividadeDTO){
        return this.atividadeRepo.update(atividade);
    }

    async deleteById(id: string){
        const atividade = this.findById(id)
        if (!atividade) throw new Error(`Atividade não existe`)

        return this.atividadeRepo.deleteById(id)
    }

    async deleteAll(){
        return this.atividadeRepo.deleteAll()
    }
}
