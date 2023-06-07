import { Component, OnInit, Inject } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";

import { MatSnackBar } from "@angular/material/snack-bar";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

import { ProjectService } from "../core/project.service";
import { ClientDto, ProjectDto, ProjectStatus } from "models/models";
import { Contract } from "src/services/contract.service";

@Component({
  selector: "app-project-dialog",
  templateUrl: "./project-dialog.component.html",
})
export class ProjectDialogComponent implements OnInit {
  public project: ProjectDto;
  public dialogTitle: string;
  public projectForm: FormGroup;
  statusChoices: typeof ProjectStatus;
  clientList: ClientDto[];

  constructor(
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ProjectDialogComponent>,
    private snackBar: MatSnackBar,
    private projectService: ProjectService,
    private contractService: Contract
  ) {
    this.dialogTitle = data.title;
    this.project = data.project;
    this.statusChoices = ProjectStatus;

    const nonWhiteSpaceRegExp: RegExp = new RegExp("\\S");

    this.projectForm = this.formBuilder.group({
      clientId: [this.project?.clientId, [Validators.required]],
      title: [
        this.project?.title,
        [Validators.required, Validators.pattern(nonWhiteSpaceRegExp)],
      ],
      status: [
        this.project ? this.project.status : this.statusChoices.Pending,
      ],
      description: [this.project?.description],
      rate: [this.project?.rate, [Validators.required]],
      startDate: [this.project?.startDate, []],
      endDate: [this.project?.endDate, []]
    });
  }

  public ngOnInit(): void {
    this.contractService.getClients().then(data => {
      this.clientList = data;
    })
  }

  public save(): void {
    console.log("save");
    if (!this.projectForm.valid) {
      return;
    }
    if (this.project) {
      // update project object with form values
      Object.assign(this.project, this.projectForm.value);
      this.projectService.updateObject(this.project);
      this.snackBar.open("Project updated Successfully...!!!", "", {
        duration: 2000,
        verticalPosition: "bottom",
        horizontalPosition: "center",
        panelClass: "black",
      });

      this.dialogRef.close();
    } else {
      this.projectService.createOject(this.projectForm.value);
      this.snackBar.open("Project created Successfully...!!!", "", {
        duration: 2000,
        verticalPosition: "bottom",
        horizontalPosition: "center",
        panelClass: "black",
      });

      this.dialogRef.close();
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
