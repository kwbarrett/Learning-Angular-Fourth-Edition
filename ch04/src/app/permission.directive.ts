import { Directive, Input, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appPermission]'
})
export class PermissionDirective {
  @Input() appPermission: string[] = [];
  private currentRole = 'agent';

  constructor( private tmplRef: TemplateRef<any>, private vc: ViewContainerRef ) { };
  ngOnInit(): void{
    console.log( this.appPermission )
    if( this.appPermission.indexOf( this.currentRole ) === -1 ){
      console.log( this.appPermission );
      this.vc.clear();
    }else{
      console.log( this.appPermission )
      this.vc.createEmbeddedView( this.tmplRef );
    }
  }

}
