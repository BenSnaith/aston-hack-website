import { Component } from '@angular/core';
import { EVENTS } from '../../util/events'
import { ScheduleEvent } from '../../util/ScheduleEvent';
import {NgForOf} from '@angular/common';
import {ScheduleItemComponent} from '../schedule-item/schedule-item.component';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [
    NgForOf, ScheduleItemComponent
  ],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css'
})
export class ScheduleComponent {
  events: ScheduleEvent[] = EVENTS;
  protected readonly EVENTS = EVENTS;
}
