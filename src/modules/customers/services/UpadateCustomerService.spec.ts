import 'reflect-metadata';
import AppError from '../../../shared/errors/AppError';
import FakeCustomersRepository from '../domain/repositories/fakes/FakeCustomersRepository';
import UpdateCustomerService from './UpdateCustomerService';

let fakeCustomersRepository: FakeCustomersRepository;
let updateCustomerService: UpdateCustomerService;

describe('UpdateCustomerService', () => {
  beforeEach(() => {
    fakeCustomersRepository = new FakeCustomersRepository();
    updateCustomerService = new UpdateCustomerService(fakeCustomersRepository);
  });

  it('should be able to update a customer', async () => {
    const updateCustomer = await updateCustomerService.execute({
      id: '123456',
      name: 'nomeTeste',
      email: 'notFound',
    });

    expect(updateCustomer).toHaveProperty('id', '123456');
    expect(updateCustomer).toHaveProperty('name', 'nomeTeste');
    expect(updateCustomer).toHaveProperty('email', 'notFound');
  });

  it('not should be able to delete a non exist customer', async () => {
    await expect(
      updateCustomerService.execute({
        id: 'notFound',
        name: 'nomeTeste',
        email: 'teste@email.com',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('not should be able to update two customers with the same email', async () => {
    expect(
      updateCustomerService.execute({
        id: '123456',
        name: 'nomeTeste',
        email: 'none@emaail.com',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
