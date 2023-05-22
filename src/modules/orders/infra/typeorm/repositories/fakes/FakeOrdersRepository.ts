import { ICreateOrder } from '../../../../domain/models/ICreateOrder';
import { IOrder } from '../../../../domain/models/IOrder';
import { IOrdersRepository } from '../../../../domain/repositories/IOrdersRepository';

class FakeOrdersRepository implements IOrdersRepository {
  public async create({ customer, products }: ICreateOrder): Promise<IOrder> {
    const order = {
      id: '123456',
      customer,
      order_products: [],
      products,
      created_at: new Date(),
      updated_at: new Date(),
    };

    return order;
  }
  public async findById(id: string): Promise<IOrder | null> {
    if (id === 'notFound') {
      return null;
    }

    const order = {
      id,
      customer: {
        id: '1234567',
        name: 'string',
        email: 'email@email.com',
        created_at: new Date(),
        updated_at: new Date(),
      },
      order_products: [],
      products: [
        {
          id: '123456',
          name: 'Ordem 1',
          price: 300,
          quantity: 100,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      created_at: new Date(),
      updated_at: new Date(),
    };

    return order;
  }
}
export default FakeOrdersRepository;
