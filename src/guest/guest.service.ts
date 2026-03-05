import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Guest } from './entities/guest.entity';
import { CreateGuestDto } from './dto/create-guest.dto';
import { UpdateGuestDto } from './dto/update-guest.dto';

@Injectable()
export class GuestService {

  constructor(
    @InjectRepository(Guest)
    private readonly guestRepository: Repository<Guest>,
  ) {}

  async create(createGuestDto: CreateGuestDto) {
    const guest = this.guestRepository.create(createGuestDto);
    return await this.guestRepository.save(guest);
  }

  async findAll() {
    return await this.guestRepository.find();
  }

  async findOne(id: number) {
    const guest = await this.guestRepository.findOne({ where: { id } });

    if (!guest) {
      throw new NotFoundException('Guest not found');
    }

    return guest;
  }

  async update(id: number, updateGuestDto: UpdateGuestDto) {
    await this.findOne(id);
    await this.guestRepository.update(id, updateGuestDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.findOne(id);
    return await this.guestRepository.delete(id);
  }
}