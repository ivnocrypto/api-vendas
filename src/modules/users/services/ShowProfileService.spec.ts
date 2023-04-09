import 'reflect-metadata';
import AppError from '../../../shared/errors/AppError';
import FakeUsersRepository from '../domain/repositories/fakes/FakeUsersRepository';
import ShowProfileService from './ShowProfileService';

let fakeUsersRepository: FakeUsersRepository;
let showProfileService: ShowProfileService;

jest.setTimeout(20000);

describe('ShowUserService', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    showProfileService = new ShowProfileService(fakeUsersRepository);
  });

  it('should be able to show a User', async () => {
    const showUser = await showProfileService.execute({
      user_id: '123456',
    });

    expect(showUser).toHaveProperty('id', '123456');
  });

  it('not should be able to show a non exist User', async () => {
    await expect(
      showProfileService.execute({
        user_id: 'notFound',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
