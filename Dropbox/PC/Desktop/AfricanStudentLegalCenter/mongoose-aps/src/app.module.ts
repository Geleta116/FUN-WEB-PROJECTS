import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogModule } from './blog/blog.module';
import { AuthorityModule } from './authority-contact/authority-contact.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [BlogModule, AuthorityModule, MongooseModule.forRoot('mongodb://127.0.0.1:27017')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
