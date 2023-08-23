import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatDialog, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import { ApiService } from 'src/app/_services/api.service';
import { NgConfirmService } from 'ng-confirm-box';
import { NgToastService } from 'ng-angular-popup';
import { TeamDialogComponent } from 'src/app/includes/team-dialog/team-dialog.component';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  
  displayedColumns: string[] = ['name', 'action', 'team-op' ];
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
    this.getTeams()
  }

  openDialog() {
    this.dialog.open(TeamDialogComponent, {
      width: '30%',
      height: '30%'
    }).afterClosed().subscribe(val => {
      if(val === 'save'){
        this.getTeams();
      }
    })
  }

  getTeams(){
    this.api.getAllTeams().subscribe({
      next: (res)=> {
        this.dataSource = new MatTableDataSource(res)
        this.dataSource.paginator = this.paginator
        this.dataSource.sort = this.sort
      }
    })
  }

  editTeam(row : any){
    this.dialog.open(TeamDialogComponent, {
      width: '30%',
      height: '30%',
      data: row
    }).afterClosed().subscribe(val => {
      if(val === 'update'){
        this.getTeams();
      }
    })
  }

  delete(id: number){
    this.confirm.showConfirm("Are You Sure Want To Delete ?",
    ()=>{
      this.api.deleteTeam(id).subscribe(res => {
        this.toast.success({ detail: 'Success', summary: 'Team Deleted Successfully...', duration: 3000 });
        this.getTeams();
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
