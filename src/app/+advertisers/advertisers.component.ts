import {Component, OnInit, ViewChild} from '@angular/core';
import {CommonModule} from "@angular/common";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {MatSort, MatSortModule, Sort} from "@angular/material/sort";
import {AdvertisersService} from "../features/advertisers/advertisers.service";
import {AdvertiserModel} from "../features/advertisers/models";
import {FormsModule} from "@angular/forms";

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './advertisers.component.html',
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    FormsModule
  ],
  styleUrls: ['./advertisers.component.scss']
})
export class AdvertisersComponent implements OnInit {
  public displayedColumns: string[] = ['advertiserId', 'name', 'profit'];
  public dataSource = new MatTableDataSource<AdvertiserModel>();
  public filterValue = '';
  public advertisers: AdvertiserModel[] = [];

  @ViewChild(MatSort) public sort!: MatSort;

  constructor(private advertisersService: AdvertisersService) {
  }

  public ngOnInit() {
    this.advertisersService.getAdvertisers().subscribe(
      (res: AdvertiserModel[]) => {
        this.advertisers = res;
        this.dataSource.data = this.advertisers;
        this.dataSource.sort = this.sort;
      }
    );
  }

  applyFilter(): void {
    this.dataSource.filter = this.filterValue.trim().toLowerCase();
    this.dataSource.data = this.advertisers.filter(item => item.name.trim().toLowerCase().includes(this.filterValue.trim().toLowerCase()));
    this.dataSource.sort = this.sort;
  }
}
