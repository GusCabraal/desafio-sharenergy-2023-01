import { Client, ClientBD } from "../Entities/Client";

export interface ClientManagerService {
    create(data: Client): Promise<Client>
    getAll(): Promise<Client[]>
    update(id:string, data:Client): Promise<Client | null>
    delete(id:string): Promise<void | null>
}