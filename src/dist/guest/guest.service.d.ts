import { Repository } from 'typeorm';
import { Guest } from './entities/guest.entity';
import { CreateGuestDto } from './dto/create-guest.dto';
import { UpdateGuestDto } from './dto/update-guest.dto';
export declare class GuestService {
    private readonly guestRepository;
    constructor(guestRepository: Repository<Guest>);
    create(createGuestDto: CreateGuestDto): Promise<Guest>;
    findAll(): Promise<Guest[]>;
    findOne(id: number): Promise<Guest>;
    update(id: number, updateGuestDto: UpdateGuestDto): Promise<Guest>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
