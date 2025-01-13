import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { AccountListComponent } from './account-list/account-list.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenubarModule,
    OverlayPanelModule,
    MenuBarComponent,
    AccountListComponent
  ]
})
export class AppModule { }
