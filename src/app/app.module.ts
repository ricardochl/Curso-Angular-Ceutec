import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './containers/layout/layout.component';
import { RegisterComponent } from './pages/register/register.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UserComponent } from './pages/user/user.component';
import { UserCreateComponent } from './pages/user/create/user.create.component';
import { UserListComponent } from './pages/user/list/user.list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    LayoutComponent,
    RegisterComponent,
    SidebarComponent,
    UserComponent,
    UserCreateComponent,
    UserListComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
