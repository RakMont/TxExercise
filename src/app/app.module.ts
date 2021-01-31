import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule} from '@angular/forms';
import {FormControl, Validators} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule}   from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDialogModule } from "@angular/material/dialog";
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearcherComponent } from './components/searcher/searcher.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavbarComponent,
    SearcherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    FlexLayoutModule,
    MatGridListModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatDialogModule,
    MatIconModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
