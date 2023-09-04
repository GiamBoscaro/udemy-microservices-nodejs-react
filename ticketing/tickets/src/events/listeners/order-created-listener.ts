import { Message } from 'node-nats-streaming';
import { Listener, OrderCreatedEvent, Subjects } from '@gboscaro-udemy-ticketing/common';
import { queueGroupName } from './queue-group-name';

export class OrderCreatedListener extends Listener<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
  queueGroupName = queueGroupName;

  async onMessage(data: OrderCreatedEvent['data'], msg: Message) {}
}
