import { Controller, Get, Param } from '@nestjs/common';
import { LostarkService } from './lostark.service';

@Controller('lostark')
export class LostarkController {
  constructor(private readonly lostarkService: LostarkService) {}

  @Get('characters/:characterName/siblings')
  async getCharacterSiblings(@Param('characterName') characterName: string) {
    return this.lostarkService.getCharacterSiblings(characterName);
  }
}
