import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { v4 as uuid } from 'uuid';
import { ClientDto } from "models/models";
@Component({
  selector: "app-add-client",
  templateUrl: "./add-client.component.html",
  styleUrls: ["./add-client.component.sass"],
})
export class AddClientComponent {
  clientForm: FormGroup;
  hide3 = true;
  agree3 = false;
  id: string = uuid();
  constructor(private fb: FormBuilder) {
    this.clientForm = this.fb.group({
      id: [this.id, [Validators.required]],
      name: ["", [Validators.required]],
      mobile: ["", [Validators.required]],
      email: [
        "",
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      date: ["", [Validators.required]],
    });
  }
  onSubmit() {
    const obj: ClientDto = this.clientForm.value;
    console.log(obj);
    console.log("Form Value", this.clientForm.value);
  }
}
