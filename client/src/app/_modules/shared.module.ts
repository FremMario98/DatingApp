import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    })
  ],
  // To be able to access all imports in app.module.ts, we have to export them(imported)
  exports: [
    BsDropdownModule,
    ToastrModule, // No need to add the configuration .forRoot() because it's in the import
  ]
})
export class SharedModule { }
