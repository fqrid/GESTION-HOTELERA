import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RoomType } from './entities/room-type.entity';
import { CreateRoomTypeDto } from './dto/create-room-type.dto';
import { UpdateRoomTypeDto } from './dto/update-room-type.dto';

@Injectable()
export class RoomTypeService {
  constructor(
    @InjectRepository(RoomType)
    private roomTypeRepository: Repository<RoomType>,
  ) {}

  async create(createRoomTypeDto: CreateRoomTypeDto): Promise<RoomType> {
    const roomType = this.roomTypeRepository.create(createRoomTypeDto);
    return await this.roomTypeRepository.save(roomType);
  }

  async findAll(): Promise<RoomType[]> {
    return await this.roomTypeRepository.find();
  }

  async findOne(id: number): Promise<RoomType> {
    const roomType = await this.roomTypeRepository.findOne({ where: { id } });
    if (!roomType) {
      throw new NotFoundException(`Tipo de habitación con ID ${id} no encontrado`);
    }
    return roomType;
  }

  async update(id: number, updateRoomTypeDto: UpdateRoomTypeDto): Promise<RoomType> {
    await this.findOne(id);
    await this.roomTypeRepository.update(id, updateRoomTypeDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.findOne(id);
    await this.roomTypeRepository.delete(id);
  }
}
