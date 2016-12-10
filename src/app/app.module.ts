import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, RequestOptions } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms' // use of form control

import { AppComponent } from './app.component';
import { Angular2MdSeedRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { DataOverTimeComponent } from './samples/01-observable-intro/data-over-time/data-over-time.component';
import { DataOverTimeWithCancelComponent } from './samples/01-observable-intro/data-over-time-with-cancel/data-over-time-with-cancel.component';
import { DataOverTimePipelineComponent } from './samples/01-observable-intro/data-over-time-pipeline/data-over-time-pipeline.component';
import { ObservableFromEventComponent } from './samples/02-dom-observables/observable-from-event/observable-from-event.component';
import { ObservableFromEventMoreComponent } from './samples/02-dom-observables/observable-from-event-more/observable-from-event-more.component';
import { ObservableFromEventTextComponent } from './samples/02-dom-observables/observable-from-event-text/observable-from-event-text.component';
import { ObservableFromEventTextMoreComponent } from './samples/02-dom-observables/observable-from-event-text-more/observable-from-event-text-more.component';
import { ObservableFromEventTextRelaxComponent } from './samples/02-dom-observables/observable-from-event-text-relax/observable-from-event-text-relax.component';
import { ObservableFromEventTextFunComponent } from './samples/02-dom-observables/observable-from-event-text-fun/observable-from-event-text-fun.component';
//import { ClothingIntoArrayComponent, ClothingAggregationComponent} from './samples/clothing/index';
import { ClothingIntoArrayComponent} from './samples/clothing/into-array/clothing-into-array.component';
import { ClothingAggregationComponent} from './samples/clothing/aggregation/clothing-aggregation.component';
import { EnumPipe } from './shared/enum.pipe';
import { SchedulingComponent } from './samples/scheduling/scheduling.component';
import { DragDropComponent } from './samples/drag-drop/drag-drop.component';
import { websocketComponent } from './samples/websocket/websocket.component';

@NgModule({
  declarations: [
    AppComponent,
    EnumPipe,
    HomeComponent,
    DataOverTimeComponent,
    DataOverTimeWithCancelComponent,
    DataOverTimePipelineComponent,
    ObservableFromEventComponent,
    ObservableFromEventMoreComponent,
    ObservableFromEventTextComponent,
    ObservableFromEventTextMoreComponent,
    ObservableFromEventTextRelaxComponent,
    ObservableFromEventTextFunComponent,
    ClothingIntoArrayComponent,
    ClothingAggregationComponent,
    SchedulingComponent,
    DragDropComponent,   
    websocketComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    Angular2MdSeedRoutingModule ,
    ReactiveFormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
