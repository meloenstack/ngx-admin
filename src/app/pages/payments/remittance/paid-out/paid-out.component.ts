import { Component } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { SmartTableData } from "../../../../@core/data/smart-table";
@Component({
  selector: "ngx-paid-out",
  templateUrl: "./paid-out.component.html",
  styleUrls: ["./paid-out.component.scss"],
})
export class PaidOutComponent {
  settings = {
    actions: false,
    columns: {
      date_created: {
        title: "Date Created",
        type: "date",
      },
      user_id: {
        title: "User ID",
        type: "number",
      },
      withdrawal_status: {
        title: "Withdrawal Status",
        type: "string",
      },
      payout_type: {
        title: "Payout Type",
        type: "string",
      },
      total_withdrawal: {
        title: "Total Withdrawal",
        type: "number",
      },
      action: {
        title: "Action",
        type: "string",
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData) {
    const data = this.service.getData();
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm("Are you sure you want to delete?")) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
