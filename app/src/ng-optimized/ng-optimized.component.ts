import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-ng-optimized',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './ng-optimized.component.html',
  styleUrl: './ng-optimized.component.scss',
})
export class NgOptimizedComponent {}
