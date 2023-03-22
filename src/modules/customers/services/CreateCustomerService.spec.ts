import CreateCustomerService from './CreateCustomerService';
import FakeCustomersRepository from '../domain/repositories/fakes/FakeCustomersRepository';

describe('CreateCustomer', () => {
  it('should be able to create a new customer', () => {
    const fakeCustomersRepository = new FakeCustomersRepository();
  });

  it('should not be able to create two customers with the same email', () => {
    expect(1).toBe(2);
  });
});
