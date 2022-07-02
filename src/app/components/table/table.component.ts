import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  constructor(private httpService: HttpService) {}

  observableData: any[] = [];
  checkedAll: boolean = false;
  checkedInputsObject = {} as any;
  selectCount: number = 0;

  /**@description Used on init: create a map of all list items so the assigned ngModel can
   * react to their checked status. This object is used to trigger the
   * select all checkbox at the top if all items have been checked
   */
  private createlistMap() {
    this.observableData.map((item, i) => {
      this.checkedInputsObject[i] = false;
    });
  }

  /**@description this will only change individual check values triggered by the user clicking the input's parent table row */
  public changeCheckValueFor(element: any, index: number) {
    this.checkedInputsObject[index] = !element;
    this.checkValue();
  }

  /**@description this will ask if all items are checked and then check the selectAll button if true.
   */
  public checkValue(): void {
    if (this.allAreTrue(Object.values(this.checkedInputsObject))) {
      this.checkedAll = true;
    } else {
      this.checkedAll = false;
    }
  }

  /**@description are all the list items checked */
  private allAreTrue(arr: any[]): boolean {
    this.tallyCount();
    return arr.every((element: boolean) => element);
  }

  /**@description keep track of how many are checked and update prop for use in dom */
  private tallyCount() {
    this.selectCount = Object.values<number>(this.checkedInputsObject).reduce(
      (a: any, item: any) => a + item,
      0
    );
  }

  /**@description triggered when user clicks select all checkbox.
   * loops through all inputs and changes their checked status, ngModel updates the dom
   */
  public changeAllChecks(checkedAll: boolean) {
    return Object.keys(this.checkedInputsObject).forEach((key) => {
      this.checkedInputsObject[key] = checkedAll;
      this.tallyCount();
    });
  }

  ngOnInit(): void {
    // subscribe to data when component initialises
    this.httpService.getListObservable().subscribe((result) => {
      this.observableData = result;
      this.createlistMap();
    });
  }
}
