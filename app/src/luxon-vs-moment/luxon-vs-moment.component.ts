import { Component } from '@angular/core';
import moment from 'moment';

import { DateTime } from 'luxon';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-luxon-vs-moment',
  standalone: true,
  imports: [MatCardModule, MatToolbarModule],
  templateUrl: './luxon-vs-moment.component.html',
  styleUrl: './luxon-vs-moment.component.scss',
})
export class LuxonVsMomentComponent {
  // MOMENT - mutable
  currentDateMoment = moment();
  formattedMomentDateTime = moment().format('DD/mm/yyyy');

  // LUXON - immutable
  currentLuxonDate = DateTime.now();
  formattedLuxonDateTime = DateTime.now().toFormat('dd/mm/yyyy');
}
