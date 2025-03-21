import { Component } from "@angular/core";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: false
})

export class FooterComponent{
  currentYear: number = new Date().getFullYear();
  currentVersion: string = '1.2.3.4';
}
