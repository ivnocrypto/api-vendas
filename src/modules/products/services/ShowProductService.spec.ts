import 'reflect-metadata';
import AppError from '../../../shared/errors/AppError';
import FakeProductsRepository from '../domain/repositories/fakes/FakeProductsRepository';
import ShowProductService from './ShowProductService';

let fakeProductsRepository: FakeProductsRepository;
let showProductService: ShowProductService;

jest.setTimeout(20000);

describe('ShowProductService', () => {
  beforeEach(() => {
    fakeProductsRepository = new FakeProductsRepository();
    showProductService = new ShowProductService(fakeProductsRepository);
  });

  it('should be able to show a Product', async () => {
    const showProduct = await showProductService.execute({
      id: '123456',
    });

    expect(showProduct).toHaveProperty('id', '123456');
  });

  it('not should be able to show a non exist Product', async () => {
    await expect(
      showProductService.execute({
        id: 'notFound',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
