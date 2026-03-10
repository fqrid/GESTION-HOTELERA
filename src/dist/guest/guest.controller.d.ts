import { GuestService } from './guest.service';
import { CreateGuestDto } from './dto/create-guest.dto';
import { UpdateGuestDto } from './dto/update-guest.dto';
export declare class GuestController {
    private readonly guestService;
    constructor(guestService: GuestService);
    create(createGuestDto: CreateGuestDto): Promise<import("./entities/guest.entity").Guest>;
    findAll(): Promise<import("./entities/guest.entity").Guest[]>;
    findOne(id: string): Promise<import("./entities/guest.entity").Guest>;
    update(id: string, updateGuestDto: UpdateGuestDto): Promise<import("./entities/guest.entity").Guest>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
