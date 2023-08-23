import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ApiService } from 'src/app/_services/api.service';

@Component({
  selector: 'app-team-dialog',
  templateUrl: './team-dialog.component.html',
  styleUrls: ['./team-dialog.component.scss']
})
export class TeamDialogComponent implements OnInit {

  teamForm!: FormGroup;
  actionBtn : string = "Create";

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private toast: NgToastService,
    private router: Router,
    private dialogRef: MatDialogRef<TeamDialogComponent>,
    @Inject (MAT_DIALOG_DATA) public editData: any,
  ){}

  ngOnInit(): void {
    this.teamForm = this.formBuilder.group({
      name: ['', [Validators.required]]
    })

    if(this.editData){
      this.actionBtn = "Update"
      this.teamForm.controls['name'].setValue(this.editData.name);
    }
  }

  addTeam(){
    if(!this.editData){
      if(this.teamForm.valid){
        this.api.addTeam(this.teamForm.value)
        .subscribe({ next: (res: any) => {
          this.toast.success({
            detail: 'Success',
            summary: 'Team Created Successfully',
            duration: 3000,
          });
          this.teamForm.reset()
          this.dialogRef.close('save');
        }
  
        })
      }
    }else{
      this.updateTeam()
    }
  }

  updateTeam(){
    this.api.updateTeam(this.teamForm.value, this.editData.id)
    .subscribe({
      next: (res: any) => {
        this.toast.success({
          detail: 'Success',
          summary: 'Team Name Changed..',
          duration: 3000,
        });
        this.teamForm.reset()
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
