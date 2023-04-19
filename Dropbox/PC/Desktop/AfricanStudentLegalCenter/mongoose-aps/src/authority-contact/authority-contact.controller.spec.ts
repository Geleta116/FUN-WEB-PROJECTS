import { Test, TestingModule } from '@nestjs/testing';
import { AuthorityContactController } from './authority.controller';
import { AuthorityContactService } from './authority.service';

describe('AuthorityContactController', () => {
  let controller: AuthorityContactController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthorityContactController],
      providers: [AuthorityContactService],
    }).compile();

    controller = module.get<AuthorityContactController>(AuthorityContactController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
