import { Directive, Input, Output, HostBinding, HostListener, EventEmitter } from '@angular/core';

@Directive({
  selector: '[gsHighlight]'
})
export class HighlightDirective {
  @Input() gsHighlight;
  @Output() onClick = new EventEmitter();

  @HostBinding('class.highlight') className = true;

  @HostListener('click')
  handleClick() {
      console.log('clicked', this.gsHighlight);
      this.onClick.emit();
  }
}
