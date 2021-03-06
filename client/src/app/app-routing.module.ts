import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { TestErrorsComponent } from './errors/test-errors/test-errors.component';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthGuard } from './_guards/auth-guard.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'lists', component: ListsComponent },
      { path: 'messages', component: MessagesComponent },
      { path: 'members', component: MemberListComponent },
      { path: 'members/:id', component: MemberDetailComponent },
    ]
  },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'test-error', component: TestErrorsComponent },
  { path: 'server-error', component: ServerErrorComponent },
  { path: '**', component: HomeComponent, pathMatch: 'full' }
];

// { path: '**', component: HomeComponent, pathMatch: 'full' } --> put at the end, meaning on any path, go to component ...

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
