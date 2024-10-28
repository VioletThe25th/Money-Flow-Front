import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { MenuBarComponent } from './menu-bar/menu-bar.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenubarModule,
    OverlayPanelModule,
    MenuBarComponent
  ]
})
export class AppModule { }
