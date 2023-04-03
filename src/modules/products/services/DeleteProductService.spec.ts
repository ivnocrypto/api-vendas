import 'reflect-metadata';
import AppError from '../../../shared/errors/AppError';
import FakeProductsRepository from '../domain/repositories/fakes/FakeProductsRepository';
import DeleteProductService from './DeleteProductService';

let fakeProductsRepository: FakeProductsRepository;
let deleteProductService: DeleteProductService;

jest.setTimeout(20000);

describe('DeleteProductService', () => {
  beforeEach(() => {
    fakeProductsRepository = new FakeProductsRepository();
    deleteProductService = new DeleteProductService(fakeProductsRepository);
  });

  it('should be able to delete a product', async () => {
    const deletedProduct = await deleteProductService.execute({
      id: '123456',
    });

    expect(deletedProduct).toBe(undefined);
  });

  it('not should be able to delete a non exist product', async () => {
    await expect(
      deleteProductService.execute({
        id: 'notFound',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
