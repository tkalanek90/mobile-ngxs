import {
  PlatformStateModel,
  PlatformItem
} from './../store/platform/platform.model';
import { PlatformState } from './../store/platform/platform.state';
import { GetPlatform } from './../store/platform/platform.action';
import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { PlatformService } from '../store/platform/platform.service';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @Select(PlatformState.getPlatforms)
  platforms$: Observable<PlatformStateModel>;

  constructor(private store: Store, private service: PlatformService) {}
  ngOnInit() {
    this.store.dispatch(new GetPlatform());
  }
}
