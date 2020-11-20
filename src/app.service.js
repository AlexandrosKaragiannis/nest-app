import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  sayHello(name) {
    return 'Hello from NestJS ' + name + '!';
  }
  sayGoodbye(name) {
    return 'Goodbye ' + name + '!';
  }
}
