class PaymentController {

    constructor(paymentService) {
        this.paymentService = paymentService;
       
    }

    getAll = async ({res, next}) => {
        try {
            let payments = await this.paymentService.getAll();
            res.status(200).json(payments);
        } catch (err) {
            next(err);
        }
    }

    register = async (req, res, next) => {
        try {
            const paymentRegistry = await this.paymentService.register({...req.body});
            res.status(201).json(paymentRegistry);
        }
        catch (err) {
            next(err);
        }
    }

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

   
}

export default PaymentController;