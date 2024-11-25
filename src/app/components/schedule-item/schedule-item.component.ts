import {Component, Input} from '@angular/core';
import {ScheduleEvent} from '../../util/ScheduleEvent';

@Component({
  selector: 'app-schedule-item',
  standalone: true,
  imports: [],
  templateUrl: './schedule-item.component.html',
  styleUrl: './schedule-item.component.css'
})
export class ScheduleItemComponent {
  @Input() event: ScheduleEvent;
}
