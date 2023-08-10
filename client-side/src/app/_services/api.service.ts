import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../models/customer.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public baseUrl : string = "http://localhost:3000/api"

  constructor(
    private http: HttpClient
  ) { }

  saveCustomer(registerObj: Customer): Observable<any> {
    return this.http.post<Customer>(`${this.baseUrl}/customers`, registerObj);
  }

  getAllCustomers(): Observable<any> {
    return this.http.get<Customer[]>(`${this.baseUrl}/customers`);
  }

  getCustomerById(id: number): Observable<any> {
    return this.http.get<Customer>(`${this.baseUrl}/customers/${id}`);
  }

  updateCustomer(registerObj: Customer, id: number): Observable<any> {
    return this.http.put<Customer>(`${this.baseUrl}/customers/${id}`, registerObj);
  }

  deleteCustomer(id: number): Observable<any> {
    return this.http.delete<Customer>(`${this.baseUrl}/customers/${id}`);
  }

}
