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

  @Get()
  greetKnowledge() {
    return this.appService.sayHello('Knowledge');
  }

  @Get()
  sayGoodbyeToKnowledge() {
    return this.appService.sayGoodbye('Knowledge');
  }
}