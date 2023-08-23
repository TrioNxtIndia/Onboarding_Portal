import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { ApiService } from 'src/app/_services/api.service';
import { NgConfirmService } from 'ng-confirm-box';
import { NgToastService } from 'ng-angular-popup';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-team',
  templateUrl: './view-team.component.html',
  styleUrls: ['./view-team.component.scss']
})
export class ViewTeamComponent implements OnInit {

  displayedColumns: string[] = ['name', 'location', 'role', 'responsibility', 'action' ];
  public dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  teamId: any;
  teamData: any;

  constructor(
    private api: ApiService,
    private toast: NgToastService,
    private confirm: NgConfirmService,
    private activatedRoute: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(val => {
      this.teamId = val['id']
      console.log('team id',this.teamId)
    })

    this.getTeamWithMembers();
  }

  getTeamWithMembers(){
    this.api.getTeamWithMembers(this.teamId).subscribe(res => {
      this.teamData = res;
      // console.log('team data', this.teamData);
      this.dataSource = new MatTableDataSource(res.Members);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
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
