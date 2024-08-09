import { Module } from '@nestjs/common';
import { LostarkService } from './lostark/lostark.service';
import { LostarkController } from './lostark/lostark.controller';

@Module({
  imports: [],
  controllers: [LostarkController],
  providers: [LostarkService],
})
export class AppModule {}
