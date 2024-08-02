import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ngxPermissionsGuard } from 'ngx-permissions';
import { EditdataComponent } from './editdata/editdata.component';

const routes: Routes = [
  {
    path: 'edit-component',
    component: EditdataComponent,
    canActivate: [ngxPermissionsGuard],
    data: {
      permissions: {
        only: ['admin_write'],
      }
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
