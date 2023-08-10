import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer.model';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../_services/api.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {

  public customerId!: number
  customerDetail!: Customer

  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiService
  ){  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(val=> {
      this.customerId = val['id'];
      this.customerDetail = { name: '', email: '', mobile: 0, project: '', sale_contact: '', status: '', golivedate: '', id: 0}
      this.fetchCustomerDetails(this.customerId);
    })
  }

  fetchCustomerDetails(customerId: number){
    this.api.getCustomerById(this.customerId).subscribe(res => {
      console.log(res)
      this.customerDetail = res;
    })
  }

}
