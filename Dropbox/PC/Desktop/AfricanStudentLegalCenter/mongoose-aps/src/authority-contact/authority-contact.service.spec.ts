import { Test, TestingModule } from '@nestjs/testing';
import { AuthorityContactService } from './authority.service';

describe('AuthorityContactService', () => {
  let service: AuthorityContactService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthorityContactService],
    }).compile();

    service = module.get<AuthorityContactService>(AuthorityContactService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
