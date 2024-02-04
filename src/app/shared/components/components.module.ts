import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from './inputs/input-text/input-text.component';
import { PrimeUiModule } from '../prime-ui/prime-ui.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PasswordComponent } from './inputs/password/password.component';
import { ButtonComponent } from './button/button.component';
import { AvatarComponent } from './avatar/avatar.component';
import { PageNotFoundComponent } from './wildcard-components/page-not-found/page-not-found.component';
import { IconComponent } from './icon/icon.component';
import { DefaultListCardComponent } from './default-list-card/default-list-card.component';



@NgModule({
  declarations: [
    InputTextComponent,
    PasswordComponent,
    ButtonComponent,
    AvatarComponent,
    PageNotFoundComponent,
    IconComponent,
    DefaultListCardComponent
  ],
  imports: [
    CommonModule,
    PrimeUiModule,
    ReactiveFormsModule
  ],
  exports: [
    InputTextComponent,
    PasswordComponent,
    ButtonComponent,
    AvatarComponent,
    PageNotFoundComponent,
    IconComponent,
    DefaultListCardComponent
  ]
})
export class ComponentsModule { }
