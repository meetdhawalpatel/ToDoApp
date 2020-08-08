import { AppErrorHandler } from './common/app.error.hanlder';
import { BrowserModule} from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoComponent } from './todolist/todo/todo.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { TimeAgoPipe } from './time-ago.pipe';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    TodoComponent,
    FavoriteComponent,
    TimeAgoPipe,
    SignupComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {provide : ErrorHandler , useClass : AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
