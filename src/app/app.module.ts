import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestingComponent } from './testing/testing.component';
import { NbLayoutDirection, NbSidebarModule, NbLayoutModule, NbButtonModule, NbThemeModule, NbMediaBreakpoint, DEFAULT_THEME, DEFAULT_MEDIA_BREAKPOINTS, DARK_THEME } from '@nebular/theme';
import { DataTablesModule } from 'angular-datatables';
import { ParentContainerComponent } from './parent-container/parent-container.component';

@NgModule({
  declarations: [	
    AppComponent,
    TestingComponent,
      ParentContainerComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbThemeModule.forRoot({
      name: "default",
    }, [DEFAULT_THEME, DARK_THEME], DEFAULT_MEDIA_BREAKPOINTS, NbLayoutDirection.RTL),
    NbLayoutModule,
    NbSidebarModule.forRoot(), 
    NbButtonModule,

    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
