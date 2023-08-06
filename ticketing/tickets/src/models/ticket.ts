import mongoose from "mongoose";

interface ITicket {
    title: string;
    price: number;
    userId: string;
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

const Ticket = mongoose.model('Ticket', schema);

export { Ticket, ITicket };
