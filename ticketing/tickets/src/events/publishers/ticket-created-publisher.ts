import { Publisher, Subjects, TicketCreatedEvent } from '@gboscaro-udemy-ticketing/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
