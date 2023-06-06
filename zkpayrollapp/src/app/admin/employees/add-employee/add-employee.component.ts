import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { EmployeeDto } from "models/models";
import { v4 as uuid } from 'uuid';
@Component({
  selector: "app-add-employee",
  templateUrl: "./add-employee.component.html",
  styleUrls: ["./add-employee.component.sass"],
})
export class AddEmployeeComponent {
  docForm: FormGroup;
  hide3 = true;
  agree3 = false;
  constructor(private fb: FormBuilder) {
    this.docForm = this.fb.group({
      id: [uuid(), [Validators.required]],
      firstName: ["", [Validators.required, Validators.pattern("[a-zA-Z]+")]],
      lastName: [""],
      walletAddress: ["", [Validators.required]],
      confirmWalletAddress: ["", [Validators.required]],
    });
  }
  onSubmit() {
    const empl: EmployeeDto = this.docForm.value;
    console.log(empl);
    console.log("Form Value", this.docForm.value);
  }
}
