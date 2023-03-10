import { inject, injectable } from 'tsyringe';
import redisCache from '@shared/cache/RedisCache';
import AppError from '@shared/errors/AppError';
import Product from '../infra/typeorm/entities/Product';
import { IProductsRepository } from '../domain/repositories/IProductsRepository';
import { ICreateProduct } from '../domain/models/ICreateProduct';

@injectable()
class CreateProductService {
  constructor(
    @inject('ProductsRepository')
    private ProductsRepository: IProductsRepository,
  ) {}
  public async execute({
    name,
    price,
    quantity,
  }: ICreateProduct): Promise<Product> {
    const productExists = await this.ProductsRepository.findByName(name);

    if (productExists) {
      throw new AppError('There is already one product with this name');
    }

    const product = await this.ProductsRepository.create({
      name,
      price,
      quantity,
    });

    await redisCache.invalidate('api-vendas-PRODUCT_LIST');

    await this.ProductsRepository.save(product);

    return product;
  }
}

export default CreateProductService;
