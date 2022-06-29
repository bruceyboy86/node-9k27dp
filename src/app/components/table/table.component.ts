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
  ngOnInit(): void {}
}
