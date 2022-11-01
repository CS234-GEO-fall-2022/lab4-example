import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentItemComponent } from './student-item/student-item.component';
import { StudentManagementComponent } from './student-management/student-management.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentItemComponent,
    StudentManagementComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
