import { NgStyle } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-mouse-glow',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './mouse-glow.component.html',
  styleUrl: './mouse-glow.component.scss'
})
export class MouseGlowComponent {

  // Initial coordinates for the radial gradient
  x = 0;
  y = 0;

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.x = event.clientX;
    this.y = event.clientY;
  }

  getGradientStyle(): string {
    return `radial-gradient(600px at ${this.x}px ${this.y}px, var(--dark-teal), transparent 80%)`;
  }

}
