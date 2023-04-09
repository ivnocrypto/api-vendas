import 'reflect-metadata';
import AppError from '../../../shared/errors/AppError';
import FakeProductsRepository from '../domain/repositories/fakes/FakeProductsRepository';
import UpdateProductService from './UpdateProductService';

let fakeProductsRepository: FakeProductsRepository;
let updateProductService: UpdateProductService;

jest.setTimeout(20000);

describe('UpdateProductService', () => {
  beforeEach(() => {
    fakeProductsRepository = new FakeProductsRepository();
    updateProductService = new UpdateProductService(fakeProductsRepository);
  });

  it('should be able to update a Product', async () => {
    const updateProduct = await updateProductService.execute({
      id: '123456',
      name: 'guitarra',
      price: 1000,
      quantity: 100,
    });

    expect(updateProduct).toHaveProperty('id', '123456');
    expect(updateProduct).toHaveProperty('price', 1000);
    expect(updateProduct).toHaveProperty('quantity', 100);
  });

  it('not should be able to delete a non exist Product', async () => {
    await expect(
      updateProductService.execute({
        id: 'notFound',
        name: 'guitarra',
        price: 1000,
        quantity: 100,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('not should be able to update two Products with the if products no exists', async () => {
    expect(
      updateProductService.execute({
        id: 'notFound',
        name: 'guitarra',
        price: 1000,
        quantity: 100,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('not should be able to update two Products with the other name already in use', async () => {
    expect(
      updateProductService.execute({
        id: 'toBeChange',
        name: 'guitarra',
        price: 1000,
        quantity: 100,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
