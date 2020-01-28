import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { UsersPageComponent } from './users-page/users-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { ProposalsPageComponent } from './proposals-page/proposals-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { AuthService } from './shared/components/services/auth.service';
import { SharedModule } from './shared/components/shared.module';

@NgModule({
  declarations: [AdminLayoutComponent,
    LoginPageComponent,
    UsersPageComponent,
    EditPageComponent,
    ProposalsPageComponent,
    DashboardPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '', component: AdminLayoutComponent, children: [
          { path: '', redirectTo: '/admin/login', pathMatch: 'full' },
          { path: 'login', component: LoginPageComponent },
          { path: 'users', component: UsersPageComponent },
          { path: 'edit', component: EditPageComponent },
          { path: 'proposals', component: ProposalsPageComponent },
          { path: 'dashboard', component: DashboardPageComponent },
        ]
      }
    ])
  ],
  exports: [RouterModule],
  providers: [AuthService]
})
export class AdminModule {

}