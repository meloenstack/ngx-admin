import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TablesComponent } from "./tables.component";
import { SmartTableComponent } from "./smart-table/smart-table.component";
import { TreeGridComponent } from "./tree-grid/tree-grid.component";

const routes: Routes = [
  {
    path: "",
    component: TablesComponent,
    children: [
      {
        path: "",
        redirectTo: "settlement",
        pathMatch: "full",
      },
      {
        path: "settlement",
        component: SmartTableComponent,
      },
      {
        path: "manual-entries",
        component: TreeGridComponent,
      },
      {
        path: "remittances",
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
  SmartTableComponent,
  TreeGridComponent,
];
