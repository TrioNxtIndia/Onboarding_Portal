import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ApiService } from 'src/app/_services/api.service';
import { Customer } from 'src/app/models/customer.model';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.scss']
})
export class CustomerRegistrationComponent implements OnInit{
  
  minDate = new Date();
  public contractstatus = [ 'Signed', 'In Progress', 'Not Signed' ] 
  public registerForm! : FormGroup
  customerIdToUpdate!: number
  projects: any
  isUpdateActive: boolean = false
  members: any;

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
        projectName: ['', [Validators.required]],
        contractStatus: ['', [Validators.required]],
        saleContact: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
        goLiveDate: ['', [Validators.required]]
    });
    this.getProjects();
    this.getAllMembers()

    this.activatedRoute.params.subscribe(val =>{
      this.customerIdToUpdate = val['id'];
      this.api.getCustomerById(this.customerIdToUpdate).subscribe( res => {
        this.isUpdateActive = true
        this.fillFormToUpdate(res)
      })
    })
  }
  submit(){
    if(this.registerForm.valid){
      this.api.saveCustomer(this.registerForm.value)
      .subscribe( res => {
      this.toast.success({ detail: 'Success', summary: 'Customer Added Successfully..', duration: 3000 })
      this.registerForm.reset()
      this.router.navigate(['list'])
    })
    }
  }
  
  update(){
    if(this.registerForm.valid){
      this.api.updateCustomer(this.registerForm.value, this.customerIdToUpdate)
      .subscribe( res => {
      this.toast.success({ detail: 'Success', summary: 'Customer Updated Successfully..', duration: 3000 })
      this.registerForm.reset()
      this.router.navigate(['list'])
    })
    }
  }

  fillFormToUpdate(customer: Customer){
    this.registerForm.setValue({
      name: customer.name,
      projectName: customer.projectName,
      contractStatus: customer.contractStatus,
      saleContact: customer.saleContact,
      goLiveDate: customer.goLiveDate
    })
  }
  
  getProjects(){
    this.api.getAllProjects().subscribe( res => {
      this.projects = res
      console.log(this.projects);
    })
  }

  getAllMembers(){
    this.api.getAllMembers().subscribe( res => {
      this.members = res;
      console.log(this.members)
    })
  }
}
