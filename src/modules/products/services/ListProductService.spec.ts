import 'reflect-metadata';
import FakeProductsRepository from '../domain/repositories/fakes/FakeProductsRepository';
import ListProductService from './ListProductService';

let fakeProductsRepository: FakeProductsRepository;
let listProductService: ListProductService;

jest.setTimeout(20000);

describe('ListProductService', () => {
  beforeEach(() => {
    fakeProductsRepository = new FakeProductsRepository();
    listProductService = new ListProductService(fakeProductsRepository);
  });

  it('should be able to list a product', async () => {
    const products = await listProductService.execute();

    expect(Array.isArray(products)).toBe(true);
  });
});
