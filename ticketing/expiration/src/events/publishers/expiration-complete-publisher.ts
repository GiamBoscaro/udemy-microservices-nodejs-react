import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@gboscaro-udemy-ticketing/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
