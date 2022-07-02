import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, AfterViewInit {
  constructor(private httpService: HttpService) {}

  observableData: any[] = [];
  checkedAll: boolean = false;
  selectCount: number = 0;

  /**@description After init: add new 'checked' prop to each item in object
   */
  private addCheckedPropToObject() {
    this.observableData.map((i) => {
      this.observableData[i].checked = false;
    });
  }

  /**@description this will only change individual check values triggered by the user clicking the input's parent table row */
  public changeMyCheckValue(element: any, index: number) {
    this.observableData[index].checked = !element;
    this.checkValue();
  }

  /**@description this will ask if all items are checked and then check the selectAll button if true.
   */
  public checkValue(): void {
    this.tallyCount();
    if (
      this.observableData.map((res) => res.checked).filter((res) => res == true)
        .length == this.observableData.length
    ) {
      this.checkedAll = true;
    } else {
      this.checkedAll = false;
    }
  }

  /**@description keep track of how many are checked and update prop for use in dom */
  private tallyCount() {
    this.selectCount = this.observableData
      .map((res) => res.checked)
      .filter((res) => res == true).length;
  }

  /**@description triggered when user clicks select all checkbox.
   * loops through all inputs and changes their checked status, ngModel updates the dom
   */
  public changeAllChecks(checkedAll: boolean) {
    this.observableData.map((res) => (res.checked = checkedAll));
    this.tallyCount();
  }

  /**@description add window alert of all downloadSelected devices and their respective paths */
  public downloadSelected() {
    let selectedFiles = this.observableData
      .map((res) => res)
      .filter((res) => res.checked == true);
    let messageArray = [];
    for (let entry of selectedFiles) {
      messageArray.push(`${entry.device}: ${entry.path}`);
    }
    if (messageArray.length) window.alert([...messageArray]);
  }

  ngOnInit(): void {
    // subscribe to data when component initialises
    this.httpService.getListObservable().subscribe((result) => {
      this.observableData = result;
    });
  }

  ngAfterViewInit(): void {
    // add checked prop to object after template is rendered so the extra column does not get used
    this.addCheckedPropToObject();
  }
}
