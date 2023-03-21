import { Module } from '@nestjs/common';
import { AtividadeModule } from '../atividade/atividade.module';
import { FrequenciaController } from './frequencia.controller';
import { FrequenciaRepository } from './repositories/frequencia.repository';
import { BancoFrequenciaRepository } from './repositories/implementation/banco-frequencia.repository';
import { FrequenciaService } from './frequencia.service';


@Module({
    imports: [AtividadeModule],
    controllers:[FrequenciaController],
    providers: [
        FrequenciaService,
        {
            provide: FrequenciaRepository,
            useClass: BancoFrequenciaRepository
        }
    ]
})
export class FrequenciaModule {}
