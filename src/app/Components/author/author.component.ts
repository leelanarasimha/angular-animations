import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css'],
})
export class AuthorComponent {
  @ViewChild('authorRef') authorElement!: ElementRef<HTMLDivElement>;
  isActive: boolean = true;

  constructor(private renderer: Renderer2) {}

  getActiveClasses() {
    return ['isActive'];
  }

  ngAfterViewInit() {
    console.log(this.authorElement);
  }

  getColor() {
    return this.isActive ? 'green' : 'red';
  }

  changeColor() {
    this.renderer.setStyle(this.authorElement.nativeElement, 'color', 'green');
  }
}

//String
//array
