import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TrackplayerComponent } from './trackplayer/trackplayer.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { ContentComponent } from './maincontent/content/content.component';
import { LoginpageComponent } from './loginpage/loginpage.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TrackplayerComponent,
    SearchbarComponent,
    MaincontentComponent,
    ContentComponent,
    LoginpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
