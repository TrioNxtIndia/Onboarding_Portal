import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/_services/api.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {
  customerId: any;
  data: any


  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private api: ApiService
  ){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( val => {
      this.customerId = val['id']
    })

    this.getCustomerWithTables();
  }

  getCustomerWithTables(){
    this.api.getCustomerWithTables(this.customerId).subscribe( res => {
      console.log(res); 
      this.data = res
    })
  }

  ob(){
    this.router.navigate
  }
}
