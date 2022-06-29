import { Component, OnInit } from '@angular/core';
import { fileList } from 'src/app/fileList';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  fileList = fileList;

  constructor(private httpService: HttpService) {}

  $data = this.httpService.getList();
  objectKeys = Object.keys;
  observableData: any[] = [];
  checked: boolean = false;

  ngOnInit(): void {
    this.httpService.getListObservable().subscribe((result) => {
      this.observableData = result;
    });
  }
}
