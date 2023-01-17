import { Schema } from 'mongoose';
import {Client} from '../Contracts/Entities/Client';
import { AbstractODM } from './AbstractODM';

export class ClientODM extends AbstractODM<Client> {
  constructor() {
    const schema = new Schema<Client>({
      name: { type: String, required: true },
      email: { type: String, required: true },
      phone: { type: String, required: true },
      address: { type: String, required: true },
      cpf: { type: String, required: true },
    });
    super(schema, 'clients');
  }
}
