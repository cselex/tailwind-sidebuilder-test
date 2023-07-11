import { Component } from '@angular/core';
import { HeroComponent } from 'src/app/components/hero/hero.component';

@Component({
  standalone: true,
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  imports: [HeroComponent],
})
export class ContactComponent {

}
