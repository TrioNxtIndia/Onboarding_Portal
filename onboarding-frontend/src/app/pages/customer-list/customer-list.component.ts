import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/_services/api.service';
import { Customer } from 'src/app/models/customer.model';
import { NgConfirmService } from 'ng-confirm-box';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  public dataSource!: MatTableDataSource<Customer>;
  public customers!: Customer[];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns: string[] = ['name', 'projectName','contractStatus', 'saleContact', 'goLiveDate', 'action'];
  
  constructor(
    private api: ApiService,
    private router: Router,
    private confirm: NgConfirmService,
    private toast: NgToastService
  ){}


  ngOnInit(): void {
    this.getCustomers()
  }

  getCustomers(){
    this.api.getAllCustomers().subscribe( res => {
      this.customers = res;
      this.dataSource = new MatTableDataSource(this.customers);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  edit(id: number){
    this.router.navigate(['update', id])
  }

  delete(id: number){
    this.confirm.showConfirm("Are You Suer Want To Delete ?",
    ()=> {
      this.api.deleteCustomer(id).subscribe( res => {
        this.toast.success({ detail: 'Success', summary: 'Customer Deleted Successfully..', duration: 3000 })
        this.getCustomers()
      })
    },
    ()=>{

    })
    
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
