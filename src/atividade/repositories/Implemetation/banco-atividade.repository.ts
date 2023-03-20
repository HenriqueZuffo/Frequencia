import { Injectable } from "@nestjs/common";
import { CreateAtividadeDto } from "src/atividade/dtos/create-atividade.dto";
import { UpdateAtividadeDTO } from "src/atividade/dtos/update-atividade.dto";
import { AtividadeEntity } from "src/atividade/entities/atividade.entity";
import { AtividadeRepository } from '../atividade.repository';

@Injectable()
export class BancoAtividade extends AtividadeRepository{
    create(atividade: CreateAtividadeDto): Promise<void> {
        throw new Error("Method not implemented.");
    }
    findAll(): Promise<AtividadeEntity[]> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<AtividadeEntity> {
        throw new Error("Method not implemented.");
    }
    findByDescricao(descricao: string): Promise<AtividadeEntity[]> {
        throw new Error("Method not implemented.");
    }
    update(atividade: UpdateAtividadeDTO): Promise<void> {
        throw new Error("Method not implemented.");
    }
    deleteById(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    deleteAll(): Promise<void> {
        throw new Error("Method not implemented.");
    }

}