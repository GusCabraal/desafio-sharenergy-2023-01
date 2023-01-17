import { Client, ClientBD } from '../Contracts/Entities/Client';
import { ClientManagerRepository } from '../Contracts/Repository/ClientManager.Repository';
import { ClientODM } from '../Models/ClientODM';


export class clientManagerRepository implements ClientManagerRepository {
  private model: ClientODM;

  constructor(model: ClientODM) {
    this.model = model;
  }

  create(data: Client): Promise<Client> {
    return this.model.create(data);
  }
  getAll(): Promise<Client[]> {
    return this.model.getAll();
  }
  update(id: string, data: Client): Promise<Client | null> {
    return this.model.update(id, data);
  }
  delete(id: string): Promise<void | null> {
    return this.model.delete(id);;
  }


}