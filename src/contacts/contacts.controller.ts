import { Controller, Get } from '@nestjs/common';
import { ContactsEntity } from './contacts.entity';

import { Post,Put, Delete, Body, Param } from  '@nestjs/common';
import { ContactsService } from './contacts.service';

@Controller('contacts')
export class ContactsController {
    constructor(private readonly contactsService: ContactsService){}

    @Get()
    findAll(): Promise<ContactsEntity[]> {
      return this.contactsService.findAll();
    } 

    @Get(':id')
    findById(@Param('id')id): Promise<ContactsEntity> {
      return this.contactsService.findById(id);
    } 
    
    @Post('create')
    async create(@Body() contactData: ContactsEntity): Promise<any> {
      return this.contactsService.create(contactData);
    }    
    @Put(':id/update')
    async update(@Param('id') id, @Body() contactData: ContactsEntity): Promise<any> {
        contactData.id = Number(id);
        console.log('Update #' + contactData.id)
        return this.contactsService.update(contactData);
    }  
    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return this.contactsService.delete(id);
    }  

}