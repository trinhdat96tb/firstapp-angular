import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

//routing
import { routing } from './app.routing';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AsideComponent } from './layout/aside/aside.component';
import { HeaderComponent } from './layout/header/header.component';


//services
import { DemoService } from './services/demo.service';
import { DemoTableComponent } from './module/demo-table/demo-table.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    FooterComponent,
    AsideComponent,
    HeaderComponent,
    DemoTableComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule,
    CommonModule,
  ],
  providers: [DemoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
