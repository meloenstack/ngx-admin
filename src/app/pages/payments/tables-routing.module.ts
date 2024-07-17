import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TablesComponent } from "./tables.component";
import { RemittanceTableComponent } from "./remittance/remittance.component";
import { TreeGridComponent } from "./tree-grid/tree-grid.component";

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
