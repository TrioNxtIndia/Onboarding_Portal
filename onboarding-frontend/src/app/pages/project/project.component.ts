import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatDialog, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import { ApiService } from 'src/app/_services/api.service';
import { NgConfirmService } from 'ng-confirm-box';
import { NgToastService } from 'ng-angular-popup';
import { ProjectDialogComponent } from 'src/app/includes/project-dialog/project-dialog.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  displayedColumns: string[] = ['name', 'docURL', 'milestoneURL', 'action'];
  public dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(
    private api: ApiService,
    public dialog: MatDialog,
    private toast: NgToastService,
    private confirm: NgConfirmService
  ){}


  ngOnInit(): void {
    this.getProjects()
  }

  openDialog() {
    this.dialog.open(ProjectDialogComponent, {
      width: '30%',
      height: '55%'
    }).afterClosed().subscribe(val => {
      if(val === 'save'){
        this.getProjects();
      }
    })
  }

  getProjects(){
    this.api.getAllProjects().subscribe({
      next: (res)=> {
        this.dataSource = new MatTableDataSource(res)
        this.dataSource.paginator = this.paginator
        this.dataSource.sort = this.sort
      }
    })
  }

  editProject(row : any){
    this.dialog.open(ProjectDialogComponent, {
      width: '30%',
      height: '55%',
      data: row
    }).afterClosed().subscribe(val => {
      if(val === 'update'){
        this.getProjects();
      }
    })
  }

  delete(id: number){
    this.confirm.showConfirm("Are You Sure Want To Delete ?",
    ()=>{
      this.api.deleteProject(id).subscribe(res => {
        this.toast.success({ detail: 'Success', summary: 'Team Deleted Successfully...', duration: 3000 });
        this.getProjects();
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
