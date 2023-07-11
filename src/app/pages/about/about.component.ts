import { Component } from '@angular/core';
import { HeroComponent } from 'src/app/components/hero/hero.component';

@Component({
  standalone: true,
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  imports: [HeroComponent],
})
export class AboutComponent {

}
