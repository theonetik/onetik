import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { SuperuserService } from '../superuser.service';
import { SuperuserformComponent } from '../superuserform/superuserform.component';
import { User } from 'src/app/common/interface/user';

@Component({
  selector: 'app-superuserlist',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule
  ],
  templateUrl: './superuserlist.component.html',
  styleUrl: './superuserlist.component.sass'
})
export class SuperuserlistComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'role', 'password','actions'];
  dataSource = new MatTableDataSource<User>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private superuserService: SuperuserService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.loadData();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  loadData() {
    this.superuserService.getSuperUsers().subscribe(users => {
      this.dataSource.data = users;
    });
  }

  addUser() {
    const dialogRef = this.dialog.open(SuperuserformComponent, {
      width: '400px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.superuserService.addSuperUser(result);
      }
    });
  }

  editUser(user: User) {
    const dialogRef = this.dialog.open(SuperuserformComponent, {
      width: '400px',
      data: { ...user }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.superuserService.updateSuperUser(result);
      }
    });
  }

deleteUser(user: User) {
  if (!user.id) {
    console.error('User ID is missing.');
    return;
  }

  if (this.dataSource.data.length <= 1) {
    alert('At least one user must remain.');
    return;
  }

  this.superuserService.deleteSuperUser(user.id);
}

}
