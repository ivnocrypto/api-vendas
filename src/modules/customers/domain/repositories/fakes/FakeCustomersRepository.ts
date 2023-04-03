import { ICreateCustomer } from '../../models/ICreateCustomer';
import { ICustomersRepository } from '../ICustomersRepository';
import Customer from '../../../infra/typeorm/entities/Customer';

class FakeCustomersRepository implements ICustomersRepository {
  public async create({ name, email }: ICreateCustomer): Promise<Customer> {
    const customer = {
      id: '123456',
      name,
      email,
      created_at: new Date(),
      updated_at: new Date(),
    };

    return customer;
  }

  public async save(customer: Customer): Promise<Customer> {
    return customer;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public async remove(customer: Customer): Promise<void> {}

  public async findAll(): Promise<Customer[] | undefined> {
    const customer = {
      id: '123456',
      name: 'nomeTeste',
      email: 'email@teste.com',
      created_at: new Date(),
      updated_at: new Date(),
    };

    return [customer];
  }

  public async findByName(name: string): Promise<Customer | undefined> {
    if (name === 'notFound') {
      return undefined;
    }

    const customer = {
      id: '123456',
      name,
      email: 'email@teste.com',
      created_at: new Date(),
      updated_at: new Date(),
    };

    return customer;
  }

  public async findById(id: string): Promise<Customer | undefined> {
    if (id === 'notFound') {
      return undefined;
    }

    const customer = {
      id,
      name: 'nomeTeste',
      email: 'email@teste.com',
      created_at: new Date(),
      updated_at: new Date(),
    };

    return customer;
  }

  public async findByEmail(email: string): Promise<Customer | undefined> {
    if (email === 'notFound') {
      return undefined;
    }

    const customer = {
      id: '123456',
      name: 'nomeTeste',
      email,
      created_at: new Date(),
      updated_at: new Date(),
    };

    if (email === 'none@email.com') {
      customer.id = '654321';
    }

    return customer;
  }
}

export default FakeCustomersRepository;
