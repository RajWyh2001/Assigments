import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HearerComponent } from './hearer/hearer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ProfileBuliderComponent } from './profile-bulider/profile-bulider.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoListItemComponent } from './to-do-list-item/to-do-list-item.component';
import { AddtasksComponent } from './addtasks/addtasks.component';

@NgModule({
  declarations: [
    AppComponent,
    HearerComponent,
    HomeComponent,
    ProfileBuliderComponent,
    ToDoListComponent,
    ToDoListItemComponent,
    AddtasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
