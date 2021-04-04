import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TasksComponent } from './components/tasks/tasks.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { WelcomeComponent } from './components/pages/welcome/welcome.component';
import { AboutComponent } from './components/pages/about/about.component';
import { UserManagerComponent } from './components/pages/admin/user-manager/user-manager.component';
import { LoginComponent } from './components/pages/auth/login/login.component';
import { CreateAccountComponent } from './components/pages/auth/create-account/create-account.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { FooterComponent } from './components/layouts/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskListComponent,
    WelcomeComponent,
    AboutComponent,
    UserManagerComponent,
    LoginComponent,
    CreateAccountComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
