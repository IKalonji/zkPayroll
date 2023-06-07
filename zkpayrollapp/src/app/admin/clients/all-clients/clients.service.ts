import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Clients } from "./clients.model";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { UnsubscribeOnDestroyAdapter } from "src/app/shared/UnsubscribeOnDestroyAdapter";
import { Contract } from "src/services/contract.service";
import { ClientDto } from "models/models";
@Injectable()
export class ClientsService extends UnsubscribeOnDestroyAdapter {
  private readonly API_URL = "assets/data/clients.json";
  isTblLoading = true;
  dataChange: BehaviorSubject<ClientDto[]> = new BehaviorSubject<ClientDto[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private contract: Contract) {
    super();
  }
  get data(): ClientDto[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllClients(): void {
    this.contract.getClients().then(
      (data) => {
        this.isTblLoading = false;
        this.dataChange.next(data);
      }).catch(
      (error) => {
        this.isTblLoading = false;
        console.log(error.name + " " + error.message);
      }
    );
  }
  addClient(clients: ClientDto): void {
    this.dialogData = clients;
    console.log(clients);

    /*  this.httpClient.post(this.API_URL, client).subscribe(data => {
      this.dialogData = client;
      },
      (err: HttpErrorResponse) => {
     // error code here
    });*/
  }
  updateClient(clients: ClientDto): void {
    this.dialogData = clients;

    /* this.httpClient.put(this.API_URL + client.id, client).subscribe(data => {
      this.dialogData = client;
    },
    (err: HttpErrorResponse) => {
      // error code here
    }
  );*/
  }
  deleteClient(id: number): void {
    console.log(id);

    /*  this.httpClient.delete(this.API_URL + id).subscribe(data => {
      console.log(id);
      },
      (err: HttpErrorResponse) => {
         // error code here
      }
    );*/
  }
}
