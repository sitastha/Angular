import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminFormComponent } from './componenets/admin-form/admin-form.component';
import { QuestionFormComponent } from './componenets/question-form/question-form.component';


const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home', component:AdminFormComponent},
  {path:'question', component:QuestionFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
