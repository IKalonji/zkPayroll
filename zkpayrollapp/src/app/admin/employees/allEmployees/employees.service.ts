import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { UnsubscribeOnDestroyAdapter } from "src/app/shared/UnsubscribeOnDestroyAdapter";
import { EmployeeDto } from "models/models";
import { Contract } from "src/services/contract.service";
@Injectable()
export class EmployeesService extends UnsubscribeOnDestroyAdapter {
  isTblLoading = true;
  dataChange: BehaviorSubject<EmployeeDto[]> = new BehaviorSubject<EmployeeDto[]>(
    []
  );
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private contract: Contract) {
    super();
  }
  get data(): EmployeeDto[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllEmployeess(): void {
    this.contract.getEmployees().then(
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
  addEmployees(employees: EmployeeDto): void {
    this.dialogData = employees;

    /*  this.httpClient.post(this.API_URL, employees).subscribe(data => {
      this.dialogData = employees;
      },
      (err: HttpErrorResponse) => {
     // error code here
    });*/
  }
  updateEmployees(employees: EmployeeDto): void {
    this.dialogData = employees;

    /* this.httpClient.put(this.API_URL + employees.id, employees).subscribe(data => {
      this.dialogData = employees;
    },
    (err: HttpErrorResponse) => {
      // error code here
    }
  );*/
  }
  deleteEmployees(id: number): void {
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
