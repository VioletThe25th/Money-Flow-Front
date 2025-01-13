import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { AccountListComponent } from "./account-list/account-list.component";
import { AddAmountComponent } from './add-amount/add-amount.component';
import { AmountListComponent } from './amount-list/amount-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuBarComponent, AccountListComponent, AddAmountComponent, AmountListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'money-flow-front';
}
