import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FrequenciaModule } from './frequencia/frequencia.module';

@Module({
  imports: [FrequenciaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
