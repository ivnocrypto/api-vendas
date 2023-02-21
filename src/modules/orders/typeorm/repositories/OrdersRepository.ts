import { EntityRepository, In, Repository } from 'typeorm';
import Order from '../entities/Order';

@EntityRepository(Order)
class ProductRepository extends Repository<Product> {
  public async findByName(id: string): Promise<Product | undefined> {
    const product = await this.findOne({
      where: {
        name,
      },
    });

    return product;
  }
}

export default ProductRepository;
