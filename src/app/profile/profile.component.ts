import { Component , HostListener } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MatCardModule,CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {


}

