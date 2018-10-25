import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatIconModule,
  MatRadioModule,
  MatDividerModule,
  MatSelectModule,
  MatProgressBarModule
} from "@angular/material";

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OwnershipManagementComponent } from './components/ownership-management/ownership-management.component';
import { YourOrderComponent } from './components/your-order/your-order.component';
import { TextInputComponent } from './components/material/text-input/text-input.component';
import { TextareaInputComponent } from './components/material/textarea-input/textarea-input.component';
import { DropdownComponent } from './components/material/dropdown/dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    OwnershipManagementComponent,
    YourOrderComponent,
    TextInputComponent,
    TextareaInputComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule, MatFormFieldModule, MatInputModule, MatCardModule,MatIconModule,
    MatRadioModule,MatDividerModule,MatSelectModule,MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
