import { Injectable, Scope } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ContactsEntity } from './contacts.entity';
import { UpdateResult, DeleteResult } from  'typeorm';
import { ContactsRepository } from './contacts.repository';
import { ContactsDto } from './dto/contacts.dto';

@Injectable({scope: Scope.REQUEST})
export class ContactsService {
    constructor(
        @InjectRepository(ContactsEntity)
        private readonly contactRepository: ContactsRepository
    ) { }
    async  findAll(): Promise<ContactsDto[]> {
        return await this.contactRepository.find();
    }
    async findById(id):Promise<ContactsDto>{
        return await this.contactRepository.findOne(id);
    }

    async  create(contact: ContactsDto): Promise<ContactsDto> {
        return await this.contactRepository.save(contact);
    }

    async update(contact: ContactsDto): Promise<UpdateResult> {
        return await this.contactRepository.update(contact.id, contact);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.contactRepository.delete(id);
    }
}