import { BadRequestException, Body, Controller, Get, Param, ParseIntPipe, Post, Put, UnauthorizedException } from '@nestjs/common';
import { UpdateUserDto } from 'src/users/dtos/updateUser.dto';
import { CreateUserDto } from 'src/users/dtos/User.dto';
import { UsersService } from 'src/users/services/users/users.service';
import * as bcrypt from 'bcrypt'
import { UserProfileDto } from 'src/users/dtos/createUserProfile.dto';
import { JwtService } from '@nestjs/jwt';
import {  Req, Res } from '@nestjs/common/decorators';
import { Response ,Request, response} from 'express';

@Controller('users')
export class UsersController {
    constructor( 
        private userService:UsersService,
        private jwtService:JwtService
        ){}
    
    @Get()
   
     getUsers(){
    
return this.userService.findUsers()

    }
    @Get("email")
    sendMail(): any {
      return this.userService.example();
    }
    @Post('register')
   async createUser(@Body() createUserdto:CreateUserDto){
    createUserdto.password=await bcrypt.hash(createUserdto.password,12)

this.userService.createUser(createUserdto)
    }
    @Put(':id')
    update(@Param('id',ParseIntPipe)id:number,@Body()updateUserDto:UpdateUserDto){ return  this.userService.updateUser(id,updateUserDto)

    }

    @Post('login')
    async login(@Body() createUserdto:CreateUserDto,
    
    @Res({passthrough:true})reponse:Response
    ){
        console.log(createUserdto.email);
        
        const user=await this.userService.findByEmail(createUserdto.email);
        console.log(user);
        
        if(!user){

            throw new BadRequestException('user is not found')
            
        }
        if(!await bcrypt.compare(createUserdto.password,user.password)){
            throw new BadRequestException('Invalid redentilas')
        }
        const jwt= await this.jwtService.signAsync({id:user.id})
        console.log(jwt);
        
        reponse.cookie('jwt',jwt,{httpOnly:true})
        return {
            message:'success'
        };
    }


    @Get('user')
    async user(@Req()requset:Request
    ){
try {
    const cookie=  requset.cookies['jwt']
        const data= await this.jwtService.verifyAsync(cookie)
        if(!data){
            throw new UnauthorizedException()
        }
        console.log(data);
        
        const user = await this.userService.findByid(data['id'])
        const {password,...resultat}=user
    return resultat
    
} catch (error) {
    throw new UnauthorizedException()
    
    
}
      
    }
    @Post(':id/profiles')
    createUserProfile(@Param('id',ParseIntPipe)id:number,@Body()createProfile:UserProfileDto ){
       return  this.userService.createProfile(id,createProfile)
    }

}
