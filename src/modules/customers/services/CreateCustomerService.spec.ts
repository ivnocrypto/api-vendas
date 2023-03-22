import 'reflect-metadata';
import CreateCustomerService from './CreateCustomerService';
import FakeCustomersRepository from '../domain/repositories/fakes/FakeCustomersRepository';

describe('CreateCustomer', async () => {
  it('should be able to create a new customer', async () => {
    const fakeCustomersRepository = new FakeCustomersRepository();

    const createCustomer = new CreateCustomerService(fakeCustomersRepository);

    const customer = await createCustomer.execute({
      name: 'Ivano GG',
      email: 'ivanoteste@teste.com',
    });
    expect(customer).toHaveProperty('id');
  });

  it('should not be able to create two customers with the same email', () => {
    expect(1).toBe(2);
  });
});
