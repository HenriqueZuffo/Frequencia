import { Module } from '@nestjs/common';
import { AtividadeController } from './atividade.controller';
import { AtividadeService } from './atividade.service';
import { AtividadeRepository } from './repositories/atividade.repository';
import { BancoAtividade } from './repositories/Implemetation/banco-atividade.repository';


@Module({
  controllers: [AtividadeController],
  providers: [AtividadeService, 
    {
    provide: AtividadeRepository,
    useClass: BancoAtividade
    }]
})
export class AtividadeModule {}
