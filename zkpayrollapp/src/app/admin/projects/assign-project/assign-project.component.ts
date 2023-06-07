import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { AssignmentDto, EmployeeDto, ProjectDto } from "../../../../../models/models";
import { v4 as uuid } from 'uuid';
import { Contract } from "src/services/contract.service";

@Component({
  selector: 'app-assign-project',
  templateUrl: './assign-project.component.html',
  styleUrls: ['./assign-project.component.sass'],
})
export class AssignProjectComponent {
  projectForm: FormGroup;
  hide3 = true;
  agree3 = false;
  public Editor = ClassicEditor;

  employeeList: EmployeeDto[];

  projectList: ProjectDto[];

  constructor(private fb: FormBuilder, private contractService: Contract) {
    const id = uuid();
    this.projectForm = this.fb.group({
      id: [id, [Validators.required]],
      projectId: ["", [Validators.required]],
      employeeId: ["", [Validators.required]],
      date: ["", [Validators.required]],
    });
  }

  ngOnInit() {
    this.contractService.getEmployees().then(employees => {
      this.employeeList = employees;
    });
    
    this.contractService.getProjects().then(projects => {
      this.projectList = projects;
    });
  }

  onSubmit() {
    const assignment: AssignmentDto = this.projectForm.value;
    console.log(assignment);
    console.log("Form Value", this.projectForm.value);
  }
}
