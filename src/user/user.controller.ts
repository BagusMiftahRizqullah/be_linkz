import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserInstance } from './user.entity';

@Controller('user')
export class UserController {
  constructor(private service: UserService) {}

  @Post('signin')
  signin(@Body() req: UserInstance) {
    return this.service.login(req);
  }

  @Post('signup')
  signup(@Body() req: UserInstance) {
    return this.service.signup(req);
  }

  @Get('auth')
  auth() {
    return this.service.GetAuth();
  }
}
