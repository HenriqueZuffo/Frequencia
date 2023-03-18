import { CreateAtividadeDto } from "../dtos/create-atividade.dto";
import { AtividadeEntity } from "../entities/atividade.entity";
import { Injectable } from '@nestjs/common';
import { UpdateAtividadeDTO } from "../dtos/update-atividade.dto";

@Injectable()
export abstract class AtividadeRepository{
    abstract create(atividade: CreateAtividadeDto): Promise<void>;
    abstract findAll(): Promise<AtividadeEntity[]>;
    abstract findById(id: string): Promise<AtividadeEntity>;
    abstract findByDescricao(descricao: string): Promise<AtividadeEntity[]>;
    abstract update(atividade: UpdateAtividadeDTO): Promise<void>;
    abstract deleteById(id: string): Promise<void>;
    abstract deleteAll(): Promise<void>;
}