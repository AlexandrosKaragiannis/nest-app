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
  greetAlex() {
    return this.appService.sayHello('Alex');
  }
}