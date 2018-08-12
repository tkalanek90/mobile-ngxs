import { PlatformService } from './platform.service';
import { GetPlatform } from './platform.action';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { PlatformStateModel, PlatformItem } from './platform.model';

@State<PlatformStateModel>({
  name: 'Platform',
  defaults: {
    platforms: []
  }
})
export class PlatformState {
  constructor(private service: PlatformService) {}

  @Selector()
  static getPlatforms(state: PlatformStateModel) {
    return state.platforms;
  }

  @Action(GetPlatform)
  getPlatform({ patchState }: StateContext<PlatformStateModel>) {
    this.service.getPlatforms().subscribe(res => {
      patchState({
        platforms: <PlatformItem[]>res
      });
    });
  }
}
