import { Message } from 'node-nats-streaming';
import { Subjects, Listener, ExampleEvent } from '@rivky.shachar/common';
import { queueGroupName } from './queue-group-name';

export class ExampleListener extends Listener<ExampleEvent> {
  subject: Subjects.Example = Subjects.Example;
  queueGroupName = queueGroupName;

  async onMessage(data: ExampleEvent['data'], msg: Message) {
    const { id, name } = data;
    console.log(`id: ${id}, name: ${name}`);
    
    msg.ack();
  }
}
