import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { RoomTypeService } from './room-type.service';
import { RoomType } from './entities/room-type.entity';

describe('RoomTypeService', () => {
  let service: RoomTypeService;

  const mockRepository = {
    create: jest.fn(),
    save: jest.fn(),
    find: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RoomTypeService,
        {
          provide: getRepositoryToken(RoomType),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<RoomTypeService>(RoomTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
