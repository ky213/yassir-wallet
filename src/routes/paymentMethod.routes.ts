import { Router, Request, Response } from 'express';
import PaymentMethodController from '../controllers/paymentMethod.controller';
import { checkNewData } from '../middlewares/validators/data.validator';

const paymentMethodController = new PaymentMethodController();
const PaymentMethod: Router = Router();

PaymentMethod.get('/all', async (req: Request, res: Response) => {
  const paymentMethod = await paymentMethodController.getAllPaymentMethods();
  res.send(paymentMethod);
});

PaymentMethod.get('/:id', async (req: Request, res: Response) => {
  const paymentMethod = await paymentMethodController.getPaymentMethod(
    req.params.id
  );
  res.send(paymentMethod);
});

PaymentMethod.post('/', checkNewData, async (req: Request, res: Response) => {
  const paymentMethod = await paymentMethodController.createPaymentMethod(
    req.body
  );
  res.send(paymentMethod);
});

PaymentMethod.put('/:id', checkNewData, async (req: Request, res: Response) => {
  const paymentMethod = await paymentMethodController.updatePaymentMethod(
    req.params.id,
    req.body
  );
  res.send(paymentMethod);
});

PaymentMethod.delete('/:id', async (req: Request, res: Response) => {
  const deleteResult = await paymentMethodController.deletePaymentMethod(
    req.params.id
  );
  res.send(deleteResult);
});

export default PaymentMethod;
