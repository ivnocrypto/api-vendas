import 'reflect-metadata';
import CreateCustomerService from './CreateCustomerService';
import FakeCustomersRepository from '../domain/repositories/fakes/FakeCustomersRepository';
import AppError from '../../../shared/errors/AppError';

let fakeCustomersRepository: FakeCustomersRepository;
let createCustomerService: CreateCustomerService;

describe('CreateCustomer', () => {
  beforeEach(() => {
    fakeCustomersRepository = new FakeCustomersRepository();
    createCustomerService = new CreateCustomerService(fakeCustomersRepository);
  });

  it('should be able to create a new customer', async () => {
    const customer = await createCustomerService.execute({
      name: 'Ivano GG',
      email: 'notFound',
    });

    expect(customer).toHaveProperty('name', 'Ivano GG');
    expect(customer).toHaveProperty('email', 'notFound');
  });

  it('should not be able to create two customers with the same email', async () => {
    expect(
      createCustomerService.execute({
        name: 'nomeTeste',
        email: 'none@emaail.com',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
