import 'reflect-metadata';
import AppError from '../../../shared/errors/AppError';
import FakeUsersRepository from '../domain/repositories/fakes/FakeUsersRepository';
import UpdateProfileService from './UpdateProfileService';

let fakeUsersRepository: FakeUsersRepository;
let updateProfileService: UpdateProfileService;

jest.setTimeout(20000);

describe('UpdateCustomerService', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    updateProfileService = new UpdateProfileService(fakeUsersRepository);
  });

  it('should be able to update a customer', async () => {
    const updateProfile = await updateProfileService.execute({
      user_id: '123456',
      name: 'Ivano',
      email: 'teste@email.com',
      password: '123456',
      old_password: '654321',
    });

    expect(updateProfile).toHaveProperty('id', '123456');
    expect(updateProfile).toHaveProperty('name', 'nomeTeste');
    expect(updateProfile).toHaveProperty('email', 'notFound');
  });

  it('not should be able to delete a non exist customer', async () => {
    await expect(
      updateProfileService.execute({
        user_id: '123456',
        name: 'Ivano',
        email: 'teste@email.com',
        password: '123456',
        old_password: '654321',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('not should be able to update two customers with the same email', async () => {
    expect(
      updateProfileService.execute({
        user_id: '123456',
        name: 'Ivano',
        email: 'teste@email.com',
        password: '123456',
        old_password: '654321',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
