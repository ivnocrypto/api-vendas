import { ICreateProduct } from '../../models/ICreateProduct';
import { IProductsRepository } from '../IProductsRepository';
import Product from '../../../infra/typeorm/entities/Product';
import { IFindProducts } from '../../models/IFindProducts';
import { IProduct } from '../../models/IProduct';
import { IUpdateStockProduct } from '../../models/IUpdateStockProduct';

class FakeProductsRepository implements IProductsRepository {
  public async create({
    name,
    price,
    quantity,
  }: ICreateProduct): Promise<Product> {
    const product = {
      id: '123456',
      name,
      price,
      quantity,
      created_at: new Date(),
      updated_at: new Date(),
    };

    return product;
  }

  public async findByName(name: string): Promise<IProduct | undefined> {
    if (name === 'notFound') {
      return undefined;
    }

    const product = {
      id: '123456',
      name,
      price: 100,
      quantity: 1000,
      created_at: new Date(),
      updated_at: new Date(),
    };

    return product;
  }

  public async findById(id: string): Promise<IProduct | undefined> {
    if (id === 'notFound') {
      return undefined;
    }

    const product = {
      id,
      name: 'guitarra',
      price: 100,
      quantity: 1000,
      created_at: new Date(),
      updated_at: new Date(),
    };

    return product;
  }

  public async findAll(): Promise<IProduct[]> {
    const product = {
      id: '123456',
      name: 'guitarra',
      price: 100,
      quantity: 1000,
      created_at: new Date(),
      updated_at: new Date(),
    };
    return [product];
  }

  public async findAllByIds(products: IFindProducts[]): Promise<IProduct[]> {
    const findProducts: IProduct[] = [];

    products.map(productId => {
      const product = {
        id: productId.id,
        name: 'guitarra',
        price: 100,
        quantity: 1000,
        created_at: new Date(),
        updated_at: new Date(),
      };

      findProducts.push(product);
    });

    return findProducts;
  }

  public async save(product: IProduct): Promise<IProduct> {
    return product;
  }

  public async updateStock(products: IUpdateStockProduct[]): Promise<void> {
    return;
  }
  public async remove(product: IProduct): Promise<void> {
    return;
  }
}

export default FakeProductsRepository;
