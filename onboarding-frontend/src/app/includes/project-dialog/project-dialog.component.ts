import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ApiService } from 'src/app/_services/api.service';

@Component({
  selector: 'app-project-dialog',
  templateUrl: './project-dialog.component.html',
  styleUrls: ['./project-dialog.component.scss']
})
export class ProjectDialogComponent implements OnInit{
 
  projectForm!: FormGroup;
  actionBtn : string = "Create";

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private toast: NgToastService,
    private router: Router,
    private dialogRef: MatDialogRef<ProjectDialogComponent>,
    @Inject (MAT_DIALOG_DATA) public editData: any,
  ){}

 ngOnInit(): void {
  this.projectForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    docURL: ['', [Validators.required]],
    milestoneURL: ['', [Validators.required]]
    
  })

  if(this.editData){
    this.actionBtn = "Update"
    this.projectForm.controls['name'].setValue(this.editData.name);
    this.projectForm.controls['docURL'].setValue(this.editData.docURL);
    this.projectForm.controls['milestoneURL'].setValue(this.editData.milestoneURL);
  }
  }

  addProject(){
    if(!this.editData){
      if(this.projectForm.valid){
        this.api.addProject(this.projectForm.value)
        .subscribe({ next: (res: any) => {
          this.toast.success({
            detail: 'Success',
            summary: 'Team Created Successfully',
            duration: 3000,
          });
          this.projectForm.reset()
          this.dialogRef.close('save');
        }
  
        })
      }
    }else{
      this.updateProject()
    }
  }

  updateProject(){
    this.api.updateProject(this.projectForm.value, this.editData.id)
    .subscribe({
      next: (res: any) => {
        this.toast.success({
          detail: 'Success',
          summary: 'Team Name Changed..',
          duration: 3000,
        });
        this.projectForm.reset()
        this.dialogRef.close('update');
      },
      error: () => {
        this.toast.error({
          detail: 'Error', summary: 'Error Updating Team Name',
          duration: 3000,
        });
      }
    })
  }
  
}
