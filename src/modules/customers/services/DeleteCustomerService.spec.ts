import 'reflect-metadata';
import AppError from '../../../shared/errors/AppError';
import FakeCustomersRepository from '../domain/repositories/fakes/FakeCustomersRepository';
import DeleteCustomerService from './DeleteCustomerService';

let fakeCustomersRepository: FakeCustomersRepository;
let deleteCustomerService: DeleteCustomerService;

describe('DeleteCustomerService', () => {
  beforeEach(() => {
    fakeCustomersRepository = new FakeCustomersRepository();
    deleteCustomerService = new DeleteCustomerService(fakeCustomersRepository);
  });

  it('should be able to delete a customer', async () => {
    const deletedCustomer = await deleteCustomerService.execute({
      id: '123456',
    });

    expect(deletedCustomer).toBe(undefined);
  });

  it('not should be able to delete a non exist customer', async () => {
    await expect(
      deleteCustomerService.execute({
        id: 'notFound',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
