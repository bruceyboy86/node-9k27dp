import { Component, OnInit } from '@angular/core';
import { fileList } from 'src/app/fileList';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  fileList = fileList;
  constructor() {}

  ngOnInit(): void {}
}
