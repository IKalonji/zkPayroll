import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { ClientDto, EmployeeDto, ProjectDto, ProjectStatus } from "models/models";
import { v4 as uuid } from 'uuid';

@Component({
  selector: "app-add-project",
  templateUrl: "./add-project.component.html",
  styleUrls: ["./add-project.component.sass"],
})
export class AddprojectsComponent {
  projectForm: FormGroup;
  hide3 = true;
  agree3 = false;
  public Editor = ClassicEditor;

  teamList: EmployeeDto[] = [
    { id: 'id1', name: 'Employee 1', walletAddress: 'address1' },
    { id: 'id2', name: 'Employee 2', walletAddress: 'address2' },
    { id: 'id3', name: 'Employee 3', walletAddress: 'address3' },
    { id: 'id4', name: 'Employee 4', walletAddress: 'address4' }
  ];

  clientList: ClientDto[] = [
    { 
      id: 'id1', 
      name: 'Client 1', 
      email: 'client1@email.com', 
      number: '0174258963', 
      date: new Date() 
    },
    { 
      id: 'id2', 
      name: 'Client 2', 
      email: 'client2@email.com', 
      number: '0184258963', 
      date: new Date() 
    }
  ];

  statusList: any[] = [ 
    { name: 'Completed', value: ProjectStatus.Completed },
    { name: 'In Progress', value: ProjectStatus.InProgress },
    { name: 'Pending', value: ProjectStatus.Pending }
  ];

  constructor(private fb: FormBuilder) {
    const id = uuid();
    this.projectForm = this.fb.group({
      id: [id, [Validators.required]],
      titleId: ["", [Validators.required]],
      client: ["", [Validators.required]],
      rate: ["", [Validators.required]],
      startDate: ["", [Validators.required]],
      endDate: ["", [Validators.required]],
      team: ["", [Validators.required]],
      status: ["", [Validators.required]],
      description: ["", [Validators.required]]
    });
  }
  onSubmit() {
    const project: ProjectDto = this.projectForm.value;
    console.log(project);
    console.log("Form Value", this.projectForm.value);
  }
}
