import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { OverlayPanel, OverlayPanelModule } from 'primeng/overlaypanel';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [MenubarModule, OverlayPanelModule, CommonModule],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent {
  // Informations utilisateur et notifications
  userFirstName = 'John';
  userLastName = 'Doe';
  avatarUrl = 'path/to/avatar.jpg';
  notifications = ['Notification 1', 'Notification 2', 'Notification 3'];

  // Référence pour le panneau de notifications
  @ViewChild('notificationPanel') notificationPanel!: OverlayPanel;

  toggleNotifications() {
    this.notificationPanel.toggle(event);
  }
}
