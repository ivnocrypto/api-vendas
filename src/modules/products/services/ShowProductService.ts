import { inject, injectable } from 'tsyringe';
import AppError from '../../../shared/errors/AppError';
import { IShowProduct } from '../domain/models/IShowProduct';
import { IProductsRepository } from '../domain/repositories/IProductsRepository';
import Product from '../infra/typeorm/entities/Product';

@injectable()
class ShowProductService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}
  public async execute({ id }: IShowProduct): Promise<Product> {
    const product = await this.productsRepository.findById(id);

    if (!product) {
      throw new AppError('Product not found.', 400);
    }

    return product;
  }
}

export default ShowProductService;
