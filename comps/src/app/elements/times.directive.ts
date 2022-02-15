import { Directive, ViewContainerRef, TemplateRef,Input } from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {

  constructor(
    private viewConatainer: ViewContainerRef,
    private templateRef: TemplateRef<any>,
  ) {}
  @Input('appTimes') set render(times: number) {
    this.viewConatainer.clear();

    for(let i = 0; i < times; i++) {
      this,this.viewConatainer.createEmbeddedView(this.templateRef, {});     
    }
  } 
}
