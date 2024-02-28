import { Publisher, ExampleEvent, Subjects } from '@rivky.shachar/common';

export class ExamplePublisher extends Publisher<ExampleEvent> {
  subject: Subjects.Example = Subjects.Example;
}