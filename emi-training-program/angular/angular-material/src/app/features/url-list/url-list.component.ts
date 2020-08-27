import { Component, OnInit, ViewChild } from '@angular/core';
import { UrlLink } from '../../core/models/url-link.model';
import { DataService } from '../../core/services/data.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { AddUrlModalComponent } from '../add-url-modal/add-url-modal.component';

@Component({
  selector: 'app-url-links',
  templateUrl: './url-list.component.html',
  styleUrls: ['./url-list.component.scss']
})
export class UrlListComponent implements OnInit {

  public urlLinks: Array<UrlLink>;
  public filteredUrlLinks: Array<UrlLink>;
  public tableDataSource: MatTableDataSource<UrlLink>;
  public displayedColumns: Array<string> = ['id', 'from', 'to', 'dateCreated', 'permanentLink'];

  @ViewChild(MatPaginator, { static: true })
  public paginator: MatPaginator;

  constructor(
    private dataService: DataService,
    public dialog: MatDialog
  ) {
    if (localStorage.getItem('storedUrlLinks')) {
      this.urlLinks = JSON.parse(localStorage.getItem('storedUrlLinks'));
    }
    else {
      this.urlLinks = dataService.getData();
    }
  }

  public ngOnInit(): void {
    this.bindDataSource(this.urlLinks);
  }

  private bindDataSource(urlLinks: Array<UrlLink>): void {
    this.filteredUrlLinks = urlLinks.filter((item, index) => { // Filter out duplicates
      return index === urlLinks.findIndex(obj => {
        return JSON.stringify(obj) === JSON.stringify(item);
      });
    });
    this.tableDataSource = new MatTableDataSource<UrlLink>(this.filteredUrlLinks);
    this.tableDataSource.paginator = this.paginator;
  }

  public addUrl(): void {
    const dialogRef = this.dialog.open(AddUrlModalComponent, { disableClose: false });

    dialogRef.afterClosed().subscribe(modalValues => {
      if (modalValues !== undefined) {
        this.urlLinks.push(Object.assign({}, modalValues));
        this.bindDataSource(this.urlLinks);
        localStorage.setItem('storedUrlLinks', JSON.stringify(this.urlLinks));
      }
    });
  }

}
