import { NgModule } from "@angular/core";
import { Routes ,RouterModule} from "@angular/router";
import { AuthGuard } from "./auth-guard.service";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { UsersComponent } from "./users/users.component";
const appRoutes: Routes = [
    { path: "", component: HomeComponent },
    { path: "users", component: UsersComponent ,children:[
      { path: ":id/:name", component: UsersComponent }
    ]},
  
    {
      path: "servers",
      canActivate:[AuthGuard],
      canActivateChild:[AuthGuard],
      component: ServerComponent,
      children: [
        { path: ":id", component: ServerComponent },
        { path: ":id/edit", component: EditServerComponent },
      ],
    },
    {path:'not-found',component:PageNotFoundComponent},
    {path:'**',redirectTo:'/not-found'}
  ];
@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}