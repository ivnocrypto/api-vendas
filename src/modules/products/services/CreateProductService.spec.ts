import 'reflect-metadata';
import CreateProductService from './CreateProductService';
import FakeProductsRepository from '../domain/repositories/fakes/FakeProductsRepository';
import AppError from '../../../shared/errors/AppError';

let fakeProductsRepository: FakeProductsRepository;
let createProductService: CreateProductService;

jest.setTimeout(20000);

describe('CreateProduct', () => {
  beforeEach(() => {
    fakeProductsRepository = new FakeProductsRepository();
    createProductService = new CreateProductService(fakeProductsRepository);
  });

  it('should be able to create a new product', async () => {
    const product = await createProductService.execute({
      name: 'notFound',
      price: 1000,
      quantity: 100,
    });

    expect(product).toHaveProperty('name', 'notFound');
    expect(product).toHaveProperty('price', 1000);
    expect(product).toHaveProperty('quantity', 100);
  });

  it('should not be able to create two product with the same name', async () => {
    expect(
      createProductService.execute({
        name: 'guitarra',
        price: 1000,
        quantity: 100,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
