import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { KeysPipe } from './keys.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, TableComponent, KeysPipe],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
