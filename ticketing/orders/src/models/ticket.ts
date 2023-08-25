import mongoose from "mongoose";
import { Order, OrderStatus } from "./order";

interface ITicket {
    title: string;
    price: number;
    userId: string;
    isReserved(): Promise<boolean>;  
}

const schema = new mongoose.Schema<ITicket>({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    userId: { type: String, required: true },
}, {
  toJSON: {
    transform(doc, ret) {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
    },
  },
});

schema.methods.isReserved = async function () {
  // this === the ticket document that we just called 'isReserved' on
  const existingOrder = await Order.findOne({
    ticket: this,
    status: {
      $in: [
        OrderStatus.Created,
        OrderStatus.AwaitingPayment,
        OrderStatus.Complete,
      ],
    },
  });

  return !!existingOrder;
};

const Ticket = mongoose.model('Ticket', schema);

export { Ticket, ITicket };
