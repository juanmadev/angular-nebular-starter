
import { Component, OnInit, OnDestroy, AfterViewChecked } from '@angular/core';
import { Subscription } from 'rxjs';
import { BODialogService } from '../../@core/services/bo-dialog.service';

@Component({
  selector: 'bo-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class BOAuthComponent implements AfterViewChecked {

  constructor(
    private dialogService: BODialogService,
  ) {

  }

  ngAfterViewChecked(): void {
    this.dialogService.appLoaded = true;
  }

}
