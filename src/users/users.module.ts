import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt/dist';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profile } from 'src/typeorm/entities/profile';
import { User } from 'src/typeorm/entities/User';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';

@Module({
  imports:[TypeOrmModule.forFeature([User,Profile]),
  JwtModule.register({
    secret:'secret123',
    signOptions:{expiresIn:'1d'}
  })
],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
