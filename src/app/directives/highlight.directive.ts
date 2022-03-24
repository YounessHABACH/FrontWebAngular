import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[highLight]'
})
export class HighlightDirective {

  constructor(private elRef: ElementRef,
              private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter(){
    this.renderer.addClass(this.elRef.nativeElement, "highlight")
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.renderer.removeClass(this.elRef.nativeElement, "highlight")
  }
}
