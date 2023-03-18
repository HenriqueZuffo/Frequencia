import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { AtividadeService } from './atividade.service';
import { CreateAtividadeDto } from './dtos/create-atividade.dto';
import { UpdateAtividadeDTO } from './dtos/update-atividade.dto';

@Controller('atividade')
export class AtividadeController {
    constructor(
        private readonly atividadeService: AtividadeService
    ){}
    
    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() atividadeDTO: CreateAtividadeDto){
        try{
            return await this.atividadeService.create(atividadeDTO);
        }catch(err){
           throw new HttpException(`Ocorreu um erro ao criar a ativdade: ${err}`, HttpStatus.BAD_REQUEST)            
        }
    }

    @Get()
    async findAll(){        
        try{
            return await this.atividadeService.findAll();
        }catch(err){
            throw new HttpException(`Ocorreu um erro ao buscar as ativadades ${err}`, HttpStatus.NOT_FOUND)
        }
    }

    @Get(':id')
    async findById(@Param('id') id: string){
        try{
            const atividade = await this.atividadeService.findById(id);
            if(!atividade) throw new HttpException("Não foi encontrado nenhuma atividade com o id informado", HttpStatus.NOT_FOUND)
            
            return atividade
        }catch(err){
            throw new HttpException(`Ocorreu um erro ao buscar a atividade como id informado ${err}`, HttpStatus.NOT_FOUND)
        }        
    }

    @Get(':descricao')
    async findByDescricao(@Param('descricao') desc: string){
        try{
            return await this.atividadeService.findByDescricao(desc);
        }catch(err){
            throw new HttpException(`Ocorreu um erro ao buscar as atividades pela descrição ${err}`, HttpStatus.NOT_FOUND)
        }
    }

    @Put()
    @HttpCode(HttpStatus.NO_CONTENT)
    async update(@Body() atividade: UpdateAtividadeDTO){
        try{
            return this.atividadeService.update(atividade)
        }catch(err){
            throw new HttpException(`Ocorreu um erro ao atualizar a atividade ${err}`, HttpStatus.BAD_REQUEST)
        }
    }

    @Delete(':id')
    async deleteById(@Param('id') id: string){
        try{
            return this.atividadeService.deleteById(id)
        }catch(err){
            throw new HttpException(`Ocorreu um erro ao tentar excluir a atividade ${err}`, HttpStatus.NOT_FOUND)
        }
    }

    @Delete()
    async deleteAll(){
        return this.atividadeService.deleteAll()
    }
}
