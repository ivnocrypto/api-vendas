import 'reflect-metadata';
import AppError from '../../../shared/errors/AppError';
import FakeCustomersRepository from '../domain/repositories/fakes/FakeCustomersRepository';
import ShowCustomerService from './ShowCustomerService';

let fakeCustomersRepository: FakeCustomersRepository;
let showCustomerService: ShowCustomerService;

jest.setTimeout(20000);

describe('ShowCustomerService', () => {
  beforeEach(() => {
    fakeCustomersRepository = new FakeCustomersRepository();
    showCustomerService = new ShowCustomerService(fakeCustomersRepository);
  });

  it('should be able to show a customer', async () => {
    const showCustomer = await showCustomerService.execute({
      id: '123456',
    });

    expect(showCustomer).toHaveProperty('id', '123456');
  });

  it('not should be able to show a non exist customer', async () => {
    await expect(
      showCustomerService.execute({
        id: 'notFound',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
