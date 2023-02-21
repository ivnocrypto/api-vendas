import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import OrdersController from '@modules/orders/controllers/OrdersController';

const ordersRouter = Router();
const ordersController = new OrdersController();

ordersRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  ordersController.show,
);

ordersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      customer_id: Joi.string().uuid().required(),
      product: Joi.required(),
    },
  }),
  ordersController.create,
);

export default ordersRouter;