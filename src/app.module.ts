import { Module } from '@nestjs/common';
import { ContactsModule } from './contacts/contacts.module';
import config from './database/config';

@Module({
  imports: [ContactsModule,config],
 
})
export class AppModule {}
