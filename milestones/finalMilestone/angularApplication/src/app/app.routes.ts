import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

// import { ListUsersComponent } from './users/list-users/list-users.component';
// import { CreateUserComponent } from './users/create-user/create-user.component';
// import { EditUserComponent } from './users/edit-user/edit-user.component';
// import { DeleteUserComponent } from './users/delete-user/delete-user.component';
// import { DisplayUserComponent } from './users/display-user/display-user.component';

import { ListEstateComponent } from './estates/list-estate/list-estate.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CreateEstateComponent } from './estates/create-estate/create-estate.component';
import { EditEstateComponent } from './estates/edit-estate/edit-estate.component';
import { ListOwnerEstatesComponent } from './estates/list-owner-estates/list-owner-estates.component';
// import { DeleteEstateComponent } from './estates/delete-estate/delete-estate.component';
// import { DisplayEstateComponent } from './estates/display-estate/display-estate.component';

export const routes: Routes = [
  // User Routes
  // { path: 'users', component: ListUsersComponent },
  // { path: 'users/create', component: CreateUserComponent },
  // { path: 'users/edit/:id', component: EditUserComponent },
  // { path: 'users/delete/:id', component: DeleteUserComponent },
  // { path: 'users/:id', component: DisplayUserComponent },

  // Estate Routes
  { path: 'estates', component: ListEstateComponent },
  { path: 'estates/create/:id', component: CreateEstateComponent },
  { path: 'estates/edit/:id', component: EditEstateComponent },
  { path: 'estates/owner/:id', component: ListOwnerEstatesComponent },
  // { path: 'estates/delete/:id', component: DeleteEstateComponent },
  // { path: 'estates/:id', component: DisplayEstateComponent },

  // Default Route (Redirect to users list)
  { path: '', pathMatch: 'full', component: HomePageComponent},

  // Wildcard Route (404)
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
