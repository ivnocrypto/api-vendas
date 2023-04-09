import 'reflect-metadata';
import FakeUsersRepository from '../domain/repositories/fakes/FakeUsersRepository';
import ListUserService from './ListUserService';

let fakeUsersRepository: FakeUsersRepository;
let listUserService: ListUserService;

jest.setTimeout(20000);

describe('ListUserService', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    listUserService = new ListUserService(fakeUsersRepository);
  });

  it('should be able to list a user', async () => {
    const users = await listUserService.execute();

    expect(Array.isArray(users)).toBe(true);
  });
});
