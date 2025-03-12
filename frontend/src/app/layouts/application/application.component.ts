import { Component } from "@angular/core";
import { SidebarService } from '@core/services/sidebar.service';
@Component({
  selector: 'application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss'],
  standalone: false
})

export class ApplicationComponent{
  constructor(public sidebarService: SidebarService){}

  toggleSidebar(): void {
    this.sidebarService.toggle();
  }
}
