import { Controller, Get, Param } from '@nestjs/common';
import { LostarkService } from './lostark.service';

@Controller('lostark')
export class LostarkController {
  constructor(private readonly lostarkService: LostarkService) {}

  @Get('characters/:characterName/siblings')
  async getCharacterSiblings(@Param('characterName') characterName: string) {
    return this.lostarkService.getCharacterSiblings(characterName);
  }

  @Get('/armories/characters/:characterName/collectibles')
  async getCollectables(@Param('characterName') characterName: string) {
    return this.lostarkService.getCharacterArmories(
      characterName,
      '/collectibles',
    );
  }

  @Get('/auctions/options')
  async getAuctions() {
    return this.lostarkService.getAcution();
  }

  @Get('/markets/items/:itemId')
  async getMarketsItems(@Param('itemId') itemId: number) {
    return this.lostarkService.getItems(`${itemId}`);
  }

  @Get('/markets/options')
  async getMarketsOptions() {
    return this.lostarkService.getMarkets();
  }

  // 어비스
  @Get('gamecontents/challenge-abyss-dungeons')
  async getAbyss() {
    return this.lostarkService.getAbyss();
  }

  // 가디언 레이드
  @Get('gamecontents/challenge-guardian-raids')
  async getGuardian() {
    return this.lostarkService.getGuardian();
  }

  // 캘린더
  @Get('gamecontents/calendar')
  async getCalendar() {
    return this.lostarkService.getCalendar();
  }
}
