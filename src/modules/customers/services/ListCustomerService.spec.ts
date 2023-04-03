import 'reflect-metadata';
import FakeCustomersRepository from '../domain/repositories/fakes/FakeCustomersRepository';
import ListCustomerService from './ListCustomerService';

let fakeCustomersRepository: FakeCustomersRepository;
let listCustomerService: ListCustomerService;

jest.setTimeout(20000);

describe('ListCustomerService', () => {
  beforeEach(() => {
    fakeCustomersRepository = new FakeCustomersRepository();
    listCustomerService = new ListCustomerService(fakeCustomersRepository);
  });

  it('should be able to list a customer', async () => {
    const customers = await listCustomerService.execute();

    expect(Array.isArray(customers)).toBe(true);
  });
});
