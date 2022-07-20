import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAppHorizontalScroll]'
})
export class AppHorizontalScrollDirective {

  constructor(private element: ElementRef) { }
  @HostListener("wheel", ["$event"])
  public onScroll(event: WheelEvent) {
    this.element.nativeElement.scrollLeft += event.deltaY;
  }
}
