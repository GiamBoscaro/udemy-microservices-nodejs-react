import { Publisher, OrderCreatedEvent, Subjects } from '@gboscaro-udemy-ticketing/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
