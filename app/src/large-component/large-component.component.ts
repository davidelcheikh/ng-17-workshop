import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-large-component',
  standalone: true,
  imports: [],
  templateUrl: './large-component.component.html',
  styleUrl: './large-component.component.scss',
})
export class LargeComponentComponent implements OnInit {
  ngOnInit() {
    console.log('Component is loaded');
  }
}
