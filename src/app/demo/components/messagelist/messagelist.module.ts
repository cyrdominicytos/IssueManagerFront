import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessageListComponent } from './messagelist.component';
import { MessageListRoutingModule } from './messagelist-routing.module';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { RippleModule } from 'primeng/ripple';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { SliderModule } from 'primeng/slider';
import { RatingModule } from 'primeng/rating';
import { InputTextareaModule } from "primeng/inputtextarea";

import { SplitterModule } from 'primeng/splitter';
import { PanelModule } from 'primeng/panel';
import { DividerModule } from 'primeng/divider';
import { ChipModule } from 'primeng/chip';
import { TagModule } from 'primeng/tag';
import { FieldsetModule } from 'primeng/fieldset';
@NgModule({
	imports: [
		CommonModule,
		MessageListRoutingModule,
		FormsModule,
		TableModule,
		RatingModule,
		ButtonModule,
		SliderModule,
		InputTextModule,
		ToggleButtonModule,
		RippleModule,
		DropdownModule,
		ProgressBarModule,
		
		MultiSelectModule,
		ToastModule,
		DividerModule,
		SplitterModule,
		PanelModule,
		InputTextareaModule,
		ChipModule,
		TagModule,
		FieldsetModule
	],
	declarations: [MessageListComponent]
})
export class MessageListModule { }
