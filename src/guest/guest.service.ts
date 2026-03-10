import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
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

  async create(createGuestDto: CreateGuestDto): Promise<Guest> {
    const existingDoc = await this.guestRepository.findOne({
      where: { document: createGuestDto.document },
    });
    if (existingDoc) {
      throw new ConflictException(
        `Ya existe un huésped con el documento ${createGuestDto.document}`,
      );
    }

    const existingEmail = await this.guestRepository.findOne({
      where: { email: createGuestDto.email },
    });
    if (existingEmail) {
      throw new ConflictException(
        `Ya existe un huésped con el email ${createGuestDto.email}`,
      );
    }

    const guest = this.guestRepository.create(createGuestDto);
    return await this.guestRepository.save(guest);
  }

  async findAll(): Promise<Guest[]> {
    return await this.guestRepository.find();
  }

  async findOne(id: number): Promise<Guest> {
    const guest = await this.guestRepository.findOne({ where: { id } });
    if (!guest) {
      throw new NotFoundException(`Huésped con ID ${id} no encontrado`);
    }
    return guest;
  }

  async update(id: number, updateGuestDto: UpdateGuestDto): Promise<Guest> {
    await this.findOne(id);
    await this.guestRepository.update(id, updateGuestDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.findOne(id);
    await this.guestRepository.delete(id);
  }
}
