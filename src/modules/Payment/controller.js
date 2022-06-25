import fs from 'fs';
import InvoiceGenerator from '../../libs/PDFCreate';
import invoiceData from './invoice';

class PaymentController {
  constructor(paymentService) {
    this.paymentService = paymentService;
  }

  getAll = async ({ res, next }) => {
    try {
      const payments = await this.paymentService.getAll();
      res.status(200).json(payments);
    } catch (err) {
      next(err);
    }
  };

  register = async (req, res, next) => {
    try {
      const paymentRegistry = await this.paymentService.register({ ...req.body });
      const data = await this.paymentService.getOne({ ...paymentRegistry });
      const invoice = await invoiceData(data.dataValues.Reservation.dataValues.User.dataValues, data.dataValues.Reservation.dataValues, paymentRegistry);
      const ig = new InvoiceGenerator(invoice);
      ig.generate();
      res.status(201).json(paymentRegistry);
    } catch (err) {
      next(err);
    }
  };

  getOne = async (req, res, next) => {
    try {
      const service = await this.paymentService.getOne({ ...req.body });

      res.status(201).json(service);
    } catch (err) {
      next(err);
    }
  };

  getAllByReservation = async (req, res, next) => {
    try {
      const service = await this.paymentService.getAllByReservation({ ...req.body });

      res.status(201).json(service);
    } catch (err) {
      next(err);
    }
  };

  update = async (req, res, next) => {
    try {
      const service = await this.paymentService.update({ ...req.body });
      res.status(201).json(service);
    } catch (err) {
      next(err);
    }
  };

  downloadInvoice = async (req, res, next) => {
    try {
      
      const data = fs.readFileSync(__dirname+`/files/Facture-${req.body.paymentId}.pdf`);
      res.contentType('application/pdf');
      res.status(201).sendFile(__dirname+`/files/Facture-${req.body.paymentId}.pdf`);
    } catch (err) {
      next(err);
    }
  };
}

export default PaymentController;
