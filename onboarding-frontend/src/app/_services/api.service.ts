import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public baseUrl : string = "http://localhost:3000/api"

  constructor(
    private http: HttpClient
  ) { }

  saveCustomer(registerObj: Customer) {
    return this.http.post<Customer>(`${this.baseUrl}/customer`, registerObj);
  }

  getAllCustomers() {
    return this.http.get<Customer[]>(`${this.baseUrl}/customer`);
  }

  getCustomerById(id: number) {
    return this.http.get<Customer>(`${this.baseUrl}/customer/${id}`);
  }

  updateCustomer(registerObj: Customer, id: number) {
    return this.http.put<Customer>(`${this.baseUrl}/customer/${id}`, registerObj);
  }

  deleteCustomer(id: number) {
    return this.http.delete<Customer>(`${this.baseUrl}/customer/${id}`);
  }

  getCustomerWithTables(id: number){
    return this.http.get<Customer>(`${this.baseUrl}/customerwithtables/${id}`);
  }

  // Projects
  getAllProjects() {
    return this.http.get<any>(`${this.baseUrl}/project`);
  }

  addProject(data: any) {
    return this.http.post<any>(`${this.baseUrl}/project`, data);
  }

  updateProject(data: any, id: number){
    return this.http.put<any>(`${this.baseUrl}/project/${id}`, data)
  }

  deleteProject(id: number){
    return this.http.delete<any>(`${this.baseUrl}/project/${id}`)
  }

  // Teams

  getAllTeams() {
    return this.http.get<any>(`${this.baseUrl}/team`);
  }

  addTeam(data: any) {
    return this.http.post<any>(`${this.baseUrl}/team`, data);
  }

  updateTeam(data: any, id: number){
    return this.http.put<any>(`${this.baseUrl}/team/${id}`, data)
  }

  deleteTeam(id: number){
    return this.http.delete<any>(`${this.baseUrl}/team/${id}`)
  }

 saveMember(data: any, id: number) {
    const requestData = { teamId: id, ...data };
    return this.http.post<any>(`${this.baseUrl}/member`, requestData);
  }

 getTeamWithMembers(id: number){
  return this.http.get<any>(`${this.baseUrl}/teamwithmember/${id}`);
 }

 getAllMembers(){
  return this.http.get<any>(`${this.baseUrl}/member`);
 }
 
}
