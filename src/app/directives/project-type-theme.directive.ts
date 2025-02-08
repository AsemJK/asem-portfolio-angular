import { Directive, effect, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[appProjectTypeTheme]',
  standalone: true
})
export class ProjectTypeThemeDirective {
  projectType = input.required<string>();
  constructor() { }

  element = inject(ElementRef);
  stylesEffect = effect(() => {
    if (this.projectType() === 'web') {
      this.element.nativeElement.style.backgroundColor = 'lightblue';
    } else if (this.projectType() === 'mobile') {
      this.element.nativeElement.style.backgroundColor = 'lightgreen';
    } else if (this.projectType() === 'desktop') {
      this.element.nativeElement.style.backgroundColor = 'lightcoral';
    }
  });

}
