import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TaskViewComponent } from "./pages/task-view/task-view.component";

import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NewListComponent } from "./pages/new-list/new-list.component";
import { NewTaskComponent } from "./pages/new-task/new-task.component";
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { WebReqInterceptor } from "./web-req.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    TaskViewComponent,
    NewListComponent,
    NewTaskComponent,
    LoginPageComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: WebReqInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
