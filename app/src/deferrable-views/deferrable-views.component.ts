import { Component } from '@angular/core';
import { LargeComponentComponent } from '../large-component/large-component.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-deferrable-views',
  standalone: true,
  imports: [CommonModule, LargeComponentComponent, MatButtonModule],
  templateUrl: './deferrable-views.component.html',
  styleUrl: './deferrable-views.component.scss',
})
export class DeferrableViewsComponent {
  showDiv = false;
}
