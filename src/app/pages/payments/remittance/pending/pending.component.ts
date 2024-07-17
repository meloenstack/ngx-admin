import { Component } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { SmartTableData } from "../../../../@core/data/smart-table";
@Component({
  selector: "ngx-pending",
  templateUrl: "./pending.component.html",
  styleUrls: ["./pending.component.scss"],
})
export class PendingComponent {
  settings = {
    // add: {
    //   addButtonContent: '<i class="nb-plus"></i>',
    //   createButtonContent: '<i class="nb-checkmark"></i>',
    //   cancelButtonContent: '<i class="nb-close"></i>',
    // },
    // edit: {
    //   editButtonContent: '<i class="nb-edit"></i>',
    //   saveButtonContent: '<i class="nb-checkmark"></i>',
    //   cancelButtonContent: '<i class="nb-close"></i>',
    // },
    // delete: {
    //   deleteButtonContent: '<i class="nb-trash"></i>',
    //   confirmDelete: true,
    // },
    actions: false,
    columns: {
      firstName: {
        title: "First Name",
        type: "string",
      },
      user_id: {
        title: "User ID",
        type: "number",
      },
      order_id: {
        title: "Order ID",
        type: "number",
      },
      payment_channel: {
        title: "Payment Channel",
        type: "string",
      },
      status: {
        title: "Status",
        type: "string",
      },
      order_status: {
        title: "Order Status",
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
      amount: {
        title: "Amount",
        type: "number",
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
