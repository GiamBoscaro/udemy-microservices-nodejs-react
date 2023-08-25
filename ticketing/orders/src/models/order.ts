import mongoose from 'mongoose';
import { OrderStatus } from '@gboscaro-udemy-ticketing/common';
import { ITicket } from './ticket';

interface IOrder {
  userId: string;
  status: OrderStatus;
  expiresAt: Date;
  ticket: ITicket;
}

const schema = new mongoose.Schema<IOrder>({
    userId: { type: String, required: true },
    status: {
      type: String,
      required: true,
      enum: Object.values(OrderStatus),
      default: OrderStatus.Created,
    },
    expiresAt: {
      type: mongoose.Schema.Types.Date,
    },
    ticket: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Ticket',
    },
}, {
  toJSON: {
    transform(doc, ret) {
      ret.id = ret._id;
      delete ret._id;
    },
  },
});

const Order = mongoose.model('Order', schema);

export { Order, IOrder, OrderStatus };
