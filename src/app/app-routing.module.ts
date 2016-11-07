import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home';

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
import { DragDropComponent } from './samples/drag-drop/drag-drop.component';

const routes = [
    {path: '', component: HomeComponent },    
    {path: 'home', component: HomeComponent },
    {path: 'observable-intro-data-over-time', component: DataOverTimeComponent },
    {path: 'observable-intro-data-over-time-with-cancel', component: DataOverTimeWithCancelComponent },   
    {path: 'observable-intro-data-over-time-pineline', component: DataOverTimePipelineComponent },   
    {path: 'observable-from-event', component: ObservableFromEventComponent },   
    {path: 'observable-from-event-more', component: ObservableFromEventMoreComponent },   
    {path: 'observable-from-event-text', component: ObservableFromEventTextComponent },   
    {path: 'observable-from-event-text-more', component: ObservableFromEventTextMoreComponent },   
    {path: 'observable-from-event-text-relax', component: ObservableFromEventTextRelaxComponent },   
    {path: 'observable-from-event-text-fun', component: ObservableFromEventTextFunComponent },   
    {path: 'drag-drop', component: DragDropComponent },   
    {path: 'clothing-into-array', component: ClothingIntoArrayComponent },   
    {path: 'clothing-aggregation', component: ClothingAggregationComponent },   
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers:[]
}) export class Angular2MdSeedRoutingModule
{

}