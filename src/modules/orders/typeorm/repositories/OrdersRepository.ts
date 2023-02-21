import { EntityRepository, Repository } from 'typeorm';
import Order from '../entities/Order';

@EntityRepository(Order)
class OrdersRepository extends Repository<Order> {
  public async findByName(id: string): Promise<Order | undefined> {
    const order = this.findOne(id, {
      relations: ['order_products', 'customer'],
    });

    return order;
  }
}

export default OrdersRepository;
