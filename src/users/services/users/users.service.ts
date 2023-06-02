import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Profile } from "src/typeorm/entities/profile";
import { User } from "src/typeorm/entities/User";
import { UpdateUserDto } from "src/users/dtos/updateUser.dto";
import { CreateProfileParams, UserParams } from "src/utils/type";
import { Repository } from "typeorm";
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User) private nameRepository:Repository<User>,
        @InjectRepository(Profile) private profileRepository:Repository<Profile>,
        private readonly mailerService: MailerService

        ){}
findUsers(){
  return   this.nameRepository.find()
}
createUser(userdetalis:UserParams){

    const newUser=this.nameRepository.create( {...userdetalis,createdAt:new Date});
   return this.nameRepository.save(newUser)
}
 async createProfile(id:number,profiledetalis:CreateProfileParams){
    const user= await this.nameRepository.findOneBy({id})
    if(!user) throw new HttpException('User not found Cannot created',HttpStatus.BAD_REQUEST);
    const newProfile = this.profileRepository.create(profiledetalis)
    const savedProfile = await this.profileRepository.save(newProfile)
    user.profile = savedProfile
    return this.nameRepository.save(user)
}
updateUser(id:number,userdetalis:UpdateUserDto){
    this.nameRepository.update({id},{...userdetalis})


}
async findByEmail(email: any): Promise<User | undefined> {
    console.log(email);
    const user=this.nameRepository.findOneBy({email})
    user.then((value)=>{console.log(value);}
    )
    
    return user; 
}
public example(): void {
    this
      .mailerService
      .sendMail({
        to: '', // List of receivers email address
        from: '***********', // Senders email address
        subject: 'Testing Nest MailerModule ✔', // Subject line
        text: 'welcome', // plaintext body
        html: '<b>welcome</b>', // HTML body content
      })
      .then((success) => {
        console.log(success)
      })
      .catch((err) => {
        console.log(err)
      });
  }
async findByid(id: any): Promise<User | undefined> {
    console.log(id);
    const user=this.nameRepository.findOneBy({id})
    user.then((value)=>{console.log("user",value);}
    )
    
    return user; 
}
}

