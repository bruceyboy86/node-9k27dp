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
  observableData: any[] = [];
  checkedAll: boolean = false;
  checkedInputsObject = {} as any;

  checkValue(val: any) {
    const target: string = val.target.id;
    const checkBool: boolean = val.target.checked;
    this.checkedInputsObject[target] = checkBool;

    /**
     Use the checkedInputsObject to check all in the if else instead of checkedAll
     */

    // console.log(
    //   Object.keys(this.checkedInputsObject).length,
    //   Object.values(this.checkedInputsObject),
    //   this.allAreTrue(Object.values(this.checkedInputsObject))
    // );
    if (
      Object.keys(this.checkedInputsObject).length ==
        this.observableData.length &&
      this.allAreTrue(Object.values(this.checkedInputsObject))
    ) {
      this.checkedAll = true;
    } else {
      this.checkedAll = false;
    }
  }

  public changeAllChecks(checkedAll: boolean) {
    return Object.keys(this.checkedInputsObject).forEach((key) => {
      this.checkedInputsObject[key] = checkedAll;
      console.log(this.checkedInputsObject[key]);
    });
  }

  private allAreTrue(arr: any[]) {
    return arr.every((element: boolean) => element);
  }

  ngOnInit(): void {
    this.httpService.getListObservable().subscribe((result) => {
      this.observableData = result;
    });
  }
}
