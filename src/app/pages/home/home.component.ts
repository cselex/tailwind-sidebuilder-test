import { Component } from '@angular/core';
import { HeroComponent } from 'src/app/components/hero/hero.component';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [HeroComponent],
})
export class HomeComponent {

}
