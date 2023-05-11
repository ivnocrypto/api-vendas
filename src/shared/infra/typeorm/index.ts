import { DataSource } from 'typeorm';

import User from '../../../modules/users/infra/typeorm/entities/User';
import UserToken from '../../../modules/users/infra/typeorm/entities/UserToken';
import Customer from '../../../modules/customers/infra/typeorm/entities/Customer';
import Order from '../../../modules/orders/infra/typeorm/entities/Order';
import OrdersProducts from '../../../modules/orders/infra/typeorm/entities/OrdersProducts';
import Product from '../../../modules/products/infra/typeorm/entities/Product';

import { CreateProducts1657632565103 } from './migrations/1675541043779-CreateProducts';
import { CreateUsers1675691379651 } from './migrations/1675691379651-CreateUsers';
import { CreateUsersTokens1675914445952 } from './migrations/1675914445952-CreateUsersTokens';
import { CreateCustomers1676800801401 } from './migrations/1676800801401-CreateCustomers';
import { CreateOrders1676839974465 } from './migrations/1676839974465-CreateOrders';
import { AddCustomerIdToOrders1676840592094 } from './migrations/1676840592094-AddCustomerIdToOrders';
import { CreateOrdersProducts1676845817548 } from './migrations/1676845817548-CreateOrdersProducts';
import { AddOrderIdToOrdersProducts1676846779078 } from './migrations/1676846779078-AddOrderIdToOrdersProducts';
import { AddProductIdToOrdersProducts1676847828416 } from './migrations/1676847828416-AddProductIdToOrdersProducts';

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'db',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'apivendas',
  entities: [User, UserToken, Customer, Order, OrdersProducts, Product],
  migrations: [
    CreateProducts1657632565103,
    CreateUsers1675691379651,
    CreateUsersTokens1675914445952,
    CreateCustomers1676800801401,
    CreateOrders1676839974465,
    AddCustomerIdToOrders1676840592094,
    CreateOrdersProducts1676845817548,
    AddOrderIdToOrdersProducts1676846779078,
    AddProductIdToOrdersProducts1676847828416,
  ],
});
