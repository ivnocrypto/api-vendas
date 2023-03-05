import { ICustomer } from '../models/ICustomer';

export interface ICustomersRepository {
  findByName(name: string): Promise<ICustomer | undefined>;
}
