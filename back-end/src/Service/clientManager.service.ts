import { Client, ClientBD } from '../Contracts/Entities/Client';
import { ClientManagerRepository } from '../Contracts/Repository/ClientManager.Repository';
import { ClientManagerService } from '../Contracts/Service/ClientManager.Service';

export class clientManagerService implements ClientManagerService {

  constructor(private clientManagerRepository: ClientManagerRepository) {}
  
  create(data: Client): Promise<Client> {
    return this.clientManagerRepository.create(data);
  }
  
  getAll(): Promise<Client[]> {
    return this.clientManagerRepository.getAll();
  }
  
  update(id: string, data: Client): Promise<Client | null> {
    return this.clientManagerRepository.update(id, data);
  }
  
  delete(id: string): Promise<void | null> {
    return this.clientManagerRepository.delete(id)
  }

}