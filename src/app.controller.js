import { Controller, Dependencies, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('/api/greets')
@ApiTags('nestapp')
@Dependencies(AppService)
export class AppController {
  constructor(appService) {
    this.appService = appService;
  }

  @Get('/hello')
  helloKnowledge() {
    return this.appService.sayHello('Knowledge');
  }

  @Get('/goodbye')
  sayGoodbyeToKnowledge() {
    return this.appService.sayGoodbye('Knowledge');
  }
}