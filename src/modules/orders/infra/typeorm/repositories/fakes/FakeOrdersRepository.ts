import { ICreateOrder } from '../../../../domain/models/ICreateOrder';
import { IOrder } from '../../../../domain/models/IOrder';
import { IOrdersRepository } from '../../../../domain/repositories/IOrdersRepository';
import Order from '../../entities/Order';

class FakeOrdersRepository implements IOrdersRepository {
  public async create({ customer, products }: ICreateOrder): Promise<Order> {
    const order = {
      id: '123456',
      customer,
      products,
      created_at: new Date(),
      updated_at: new Date(),
    };

    return order;
  }
  public async findById(id: string): Promise<IOrder | undefined> {
    if (id === 'notFound') {
      return undefined;
    }
  }
}
export default FakeOrdersRepository;
