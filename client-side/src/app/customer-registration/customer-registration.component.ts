import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../_services/api.service';
import { NgToastService } from 'ng-angular-popup';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../models/customer.model';


@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.scss']
})
export class CustomerRegistrationComponent implements OnInit {

  minDate = new Date();
  
  public contract = ["Signed", "In Progress", "Not Signed Yet"];
  public registerForm! : FormGroup; 
  public idToUpdate!: number;
  public isUpdateActive : boolean = false;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private toast: NgToastService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    this.idToUpdate = 0;
    this.registerForm = this.fb.group({
      id: [''],
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{1,10}$')]],
      project: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      sale_contact: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      status: ['', [Validators.required]],
      golivedate: ['', [Validators.required]],
    })

    this.activatedRoute.params.subscribe(val => {
      if(val["id"]){
        this.idToUpdate = val['id'];
      this.api.getCustomerById(this.idToUpdate).subscribe(res => {
        this.isUpdateActive = true;
        this.fillFormToUpdate(res);
      })
      }
      
    })

  }

  submit(){
    if (this.registerForm.valid)
    this.api.saveCustomer(this.registerForm.value).subscribe(res => {
      this.toast.success({ detail: 'Success', summary: 'Customer Added Successfully', duration: 3000 });
      this.registerForm.reset();
      this.router.navigate(['list']);
    },
    (error) => { 
      if (error.status === 400) {
        this.toast.warning({
          detail: 'Error !',
          summary: 'Customer with this E-Mail already exists',
          duration: 3000,
        });
      } else {
        this.toast.error({
          detail: 'Error !',
          summary: 'Error adding customer',
          duration: 3000,
        });
      }
    })
  }
  
  update(){
    this.api.updateCustomer(this.registerForm.value, this.idToUpdate).subscribe(res => {
      this.toast.success({ detail: 'Success', summary: 'Customer Updated Successfully', duration: 3000 });
      this.registerForm.reset();
      this.router.navigate(['list'])
    })
  }

  fillFormToUpdate(customer: Customer){
    this.registerForm.setValue({
      id: customer.id,
      name: customer.name,
      email: customer.email,
      mobile: customer.mobile,
      project: customer.project,
      sale_contact: customer.sale_contact,
      status: customer.status,
      golivedate: customer.golivedate,
    })
  }
  
}
