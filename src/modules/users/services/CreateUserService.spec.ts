import 'reflect-metadata';
import CreateUserService from './CreateUserService';
import FakeUsersRepository from '../domain/repositories/fakes/FakeUsersRepository';
import AppError from '../../../shared/errors/AppError';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';

let fakeUsersRepository: FakeUsersRepository;
let createUserService: CreateUserService;
let fakeHashProvider: FakeHashProvider;

jest.setTimeout(20000);

describe('CreateUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();
    createUserService = new CreateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );
  });

  it('should be able to create a new User', async () => {
    const User = await createUserService.execute({
      name: 'Ivano GG',
      email: 'notFound',
      password: '123456',
    });

    expect(User).toHaveProperty('name', 'Ivano GG');
    expect(User).toHaveProperty('email', 'notFound');
    expect(User).toHaveProperty('password', '123456');
  });

  it('should not be able to create two Users with the same email', async () => {
    expect(
      createUserService.execute({
        name: 'nomeTeste',
        email: 'none@emaail.com',
        password: 'nonePass',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
