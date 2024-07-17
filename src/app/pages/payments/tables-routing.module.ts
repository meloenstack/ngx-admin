import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TablesComponent } from "./tables.component";
import { RemittanceTableComponent } from "./remittance/remittance.component";
import { TreeGridComponent } from "./tree-grid/tree-grid.component";
import { AllComponent } from "./remittance/all/all.component";
import { ForPayoutComponent } from "./remittance/for-payout/for-payout.component";
import { PaidOutComponent } from "./remittance/paid-out/paid-out.component";
import { PendingComponent } from "./remittance/pending/pending.component";

const routes: Routes = [
  {
    path: "",
    component: TablesComponent,
    children: [
      {
        path: "",
        redirectTo: "remittance",
        pathMatch: "full",
      },
      {
        path: "remittance",
        component: RemittanceTableComponent,
        children: [
          {
            path: "",
            redirectTo: "pending",
            pathMatch: "full",
          },
          {
            path: "pending",
            component: PendingComponent,
          },
          {
            path: "for-payout",
            component: ForPayoutComponent,
          },
          {
            path: "paid-out",
            component: PaidOutComponent,
          },
          {
            path: "all",
            component: AllComponent,
          },
        ],
      },
      {
        path: "manual-withdrawal",
        component: TreeGridComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule {}

export const routedComponents = [
  TablesComponent,
  RemittanceTableComponent,
  TreeGridComponent,
];
