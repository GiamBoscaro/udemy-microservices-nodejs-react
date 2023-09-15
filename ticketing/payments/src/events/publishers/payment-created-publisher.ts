import { Subjects, Publisher, PaymentCreatedEvent } from '@gboscaro-udemy-ticketing/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
