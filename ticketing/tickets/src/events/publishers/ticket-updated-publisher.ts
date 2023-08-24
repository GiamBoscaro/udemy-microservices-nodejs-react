import { Publisher, Subjects, TicketUpdatedEvent } from '@gboscaro-udemy-ticketing/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
