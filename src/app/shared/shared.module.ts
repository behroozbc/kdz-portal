import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ButtonLoadingDirective } from './directives/button-loading.directive';
import { LargeLoadingDirective } from './directives/large-loading.directive';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ImageUploaderComponent } from './components/image-uploader/image-uploader.component';
@NgModule({
  declarations: [ButtonLoadingDirective, LargeLoadingDirective, ImageUploaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
    MatCheckboxModule,
    MatIconModule,
    MatSelectModule,
    MatDialogModule,
    MatListModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule
  ],
  exports: [
    CommonModule,
    ButtonLoadingDirective,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
    MatCheckboxModule,
    MatIconModule,
    MatSelectModule,
    MatDialogModule,
    MatListModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    LargeLoadingDirective,
    ImageUploaderComponent
  ]
})
export class SharedModule { }
