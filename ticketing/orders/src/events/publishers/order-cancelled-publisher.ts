import { Subjects, Publisher, OrderCancelledEvent } from '@gboscaro-udemy-ticketing/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
