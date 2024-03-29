import { IOrdersRepository } from './../../modules/orders/domain/repositories/IOrdersRepository';
import { IProductsRepository } from '../../modules/products/domain/repositories/IProductsRepository';
import { container } from 'tsyringe';

import { ICustomersRepository } from '../../modules/customers/domain/repositories/ICustomersRepository';

import CustomersRepository from '../../modules/customers/infra/typeorm/repositories/CustomersRepository';
import { IUsersRepository } from '../../modules/users/domain/repositories/IUsersRepository';
import UsersRepository from '../../modules/users/infra/typeorm/repositories/UsersRepository';
import ProductsRepository from '../../modules/products/infra/typeorm/repositories/ProductsRepository';
import OrdersRepository from '../../modules/orders/infra/typeorm/repositories/OrdersRepository';

import '../../modules/users/providers';

container.registerSingleton<ICustomersRepository>(
  'CustomersRepository',
  CustomersRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IProductsRepository>(
  'ProductsRepository',
  ProductsRepository,
);

container.registerSingleton<IOrdersRepository>(
  'OrdersRepository',
  OrdersRepository,
);
