import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import {
  MatButtonModule
} from '@angular/material/button';
import {
  MatCardModule,
  
} from '@angular/material/card';
import {

  MatIconModule
} from '@angular/material/icon';
import {
  
  MatCheckboxModule,
  
} from '@angular/material/checkbox';
import {
 
  MatInputModule,
  
} from '@angular/material/input';
import {
  
  MatFormFieldModule,
  
} from '@angular/material/form-field';
import {
  MatTabsModule,
  
} from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterUserComponent } from './register-user/register-user.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
