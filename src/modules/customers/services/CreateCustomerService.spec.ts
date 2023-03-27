import 'reflect-metadata';
import CreateCustomerService from './CreateCustomerService';
import FakeCustomersRepository from '../domain/repositories/fakes/FakeCustomersRepository';
import AppError from '../../../shared/errors/AppError';

let fakeCustomersRepository: FakeCustomersRepository;

describe('CreateCustomer', () => {
  beforeEach(() => {});

  it('should be able to create a new customer', async () => {
    const fakeCustomersRepository = new FakeCustomersRepository();
    const createCustomer = new CreateCustomerService(fakeCustomersRepository);

    const customer = await createCustomer.execute({
      name: 'Ivano GG',
      email: 'ivanoteste@teste.com',
    });

    expect(customer).toHaveProperty('id');
  });

  it('should not be able to create two customers with the same email', async () => {
    const fakeCustomersRepository = new FakeCustomersRepository();
    const createCustomer = new CreateCustomerService(fakeCustomersRepository);

    await createCustomer.execute({
      name: 'Ivano GG',
      email: 'ivanoteste@teste.com',
    });

    expect(
      createCustomer.execute({
        name: 'Ivano GG',
        email: 'ivanoteste@teste.com',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
