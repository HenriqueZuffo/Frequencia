import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AtividadeModule } from './atividade/atividade.module';
import { FrequenciaModule } from './frequencia/frequencia.module';

@Module({
  imports: [FrequenciaModule, AtividadeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
