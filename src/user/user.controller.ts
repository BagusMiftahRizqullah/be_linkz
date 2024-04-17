import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { signupInterface, signinInterface } from './interface';

@Controller('user')
export class UserController {
  constructor(private authService: UserService) {}

  @Post('signup')
  signup(@Body() req: signupInterface) {
    return 'IAM SIGNUP BROO!';
  }

  @Post('signin')
  signin(@Body() req: signinInterface) {
    return 'IAM SIGNIN BROO!';
  }
}
