import AppError from '@shared/errors/AppError';
import { ICustomer } from './../domain/models/ICustomer';
import { ICreateCustomer } from './../domain/models/ICreateCustomer';
import { ICustomersRepository } from '../domain/repositories/ICustomersRepository';

class CreateCustomerService {
  constructor(private CustomersRepository: ICustomersRepository) {}

  public async execute({ name, email }: ICreateCustomer): Promise<ICustomer> {
    const emailExists = await this.CustomersRepository.findByEmail(email);

    if (emailExists) {
      throw new AppError('Email address already used.');
    }

    const customer = await this.CustomersRepository.create({
      name,
      email,
    });

    return customer;
  }
}

export default CreateCustomerService;
