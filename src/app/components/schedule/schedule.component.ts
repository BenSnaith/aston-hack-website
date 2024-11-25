import {Component, OnInit} from '@angular/core';
import { EVENTS } from '../../util/events'
import { ScheduleEvent } from '../../util/ScheduleEvent';
import {NgForOf} from '@angular/common';
import {ScheduleItemComponent} from '../schedule-item/schedule-item.component';
import {HeaderComponent} from '../header/header.component';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [
    NgForOf, ScheduleItemComponent, HeaderComponent
  ],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css'
})
export class ScheduleComponent implements OnInit {
  events: ScheduleEvent[] = EVENTS;
  dayOneEvents: ScheduleEvent[] = [];
  dayTwoEvents: ScheduleEvent[] = [];

  ngOnInit(): void {
    this.dayOneEvents = this.events.filter((e: ScheduleEvent): boolean => e.isDayOne);

    this.dayTwoEvents = this.events.filter((e: ScheduleEvent): boolean => !e.isDayOne);
  }
}
