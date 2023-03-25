import { Controller, Get, HttpException, HttpStatus, Post, Body, HttpCode, Delete, Param } from '@nestjs/common';
import { CreateFrequenciaDTO } from './dtos/create-frequencia.dto';
import { FrequenciaService } from "./frequencia.service";

@Controller('frequencia')
export class FrequenciaController{
    
    constructor(
        private readonly frequenciaService: FrequenciaService
    ) {}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() createFrequenciaDTO: CreateFrequenciaDTO){
        try{
            return this.frequenciaService.create(createFrequenciaDTO)
        }catch(err){
            throw new HttpException(`Ocorreu um erro ao inserir a frequencia ${err.message}`, HttpStatus.BAD_REQUEST)
        }
    }

    @Delete()
    async deleteAll(){
        try{
            return this.frequenciaService.deleteAll()
        }catch(err){
            throw new HttpException(`Ocorreu um erro ao excluir todas as frequencias ${err.message}`, HttpStatus.BAD_REQUEST)
        }
    }

    @Delete(':id')
    async deleteById(@Param('id') id: string){
        try{
            return this.frequenciaService.deleteByID(id);
        }catch(err){
            throw new HttpException(`Ocorreu um erro ao excluir a frequencia ${err.message}`, HttpStatus.NOT_FOUND)
        }       
    }

    @Delete(':idAtividade')
    async deleteByIdAtividade(@Param('idAtividade') idAtividade: string){
        try{
            return this.frequenciaService.deleteByIdAtividade(idAtividade)
        }catch(err){
            throw new HttpException(`Ocorreu um erro ao excluir por idAtividade ${err.message}`, HttpStatus.NOT_FOUND)
        } 
    }

    @Get()
    async getAll(){
        try{
            return this.frequenciaService.getAll()
        }catch(err){
            throw new HttpException(`Ocorreu um erro ao buscar a frequencia ${err.message}`, HttpStatus.NOT_FOUND)
        }
    }

    @Get(':data')
    async getByCreatedAt(@Param('data') data: Date){
        try{
            return this.frequenciaService.getByCreatedAt(data)    
        }catch(err){
            throw new HttpException(`Ocorreu um erro ao buscar a frequencia pela data ${err.message}`, HttpStatus.NOT_FOUND)
        }
        
    }

    @Get(':idAtividade')
    async getByIdAtividade(@Param('idAtividade') idAtividade: string){
        try{
            return this.getByIdAtividade(idAtividade)
        }catch(err){
            throw new HttpException(`Ocorreu um erro ao buscar a frequencia pela idAtividade ${err.message}`, HttpStatus.NOT_FOUND)
        }
    }
}