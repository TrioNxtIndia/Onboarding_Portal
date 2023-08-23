import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ApiService } from 'src/app/_services/api.service';

@Component({
  selector: 'app-member-registration',
  templateUrl: './member-registration.component.html',
  styleUrls: ['./member-registration.component.scss']
})
export class MemberRegistrationComponent implements OnInit{

  public registerForm! : FormGroup
  isUpdateActive: boolean = false
  customerId!: number

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private toast: NgToastService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
        name: ['',[Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
        location: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
        role: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
        responsibility: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
    });

    this.activatedRoute.params.subscribe(val =>{
      this.customerId = val['id'];
      console.log('route id', this.customerId);
    })
  }

  submit(){
    if(this.registerForm.valid){
      this.api.saveMember(this.registerForm.value, this.customerId)
      .subscribe( res => {
        console.log('details' ,res)
      this.toast.success({ detail: 'Success', summary: 'Customer Added Successfully..', duration: 3000 })
      this.registerForm.reset()
      this.router.navigate(['team'])
    })
    }
  }
}
