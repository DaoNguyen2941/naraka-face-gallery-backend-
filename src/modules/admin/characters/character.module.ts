import { Module } from '@nestjs/common';
import { CharactersModule } from 'src/modules/core/characters/characters.module';
import { AdminCharactersController } from './character.controller';

@Module({
  imports: [CharactersModule],
  controllers: [AdminCharactersController],
})
export class AdminCharactersModule {}
