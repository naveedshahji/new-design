import {Component, Injectable, OnDestroy, OnInit} from '@angular/core';
import {Subject, Subscription} from 'rxjs';

export interface LoadingIndicatorState {
  show: boolean;
  shield?: boolean;
  text?: string;
}

@Injectable()
export class LoadingIndicatorService {
  private indicatorSubject = new Subject<LoadingIndicatorState>();
  public indicatorState = this.indicatorSubject.asObservable();

  constructor() {
  }

  show(useShield = true, text?: string) {
      this.indicatorSubject.next(<LoadingIndicatorState>{show: true, shield: useShield, text});
  }

  hide() {
      this.indicatorSubject.next(<LoadingIndicatorState>{show: false});
  }

}


@Component({
  selector: 'app-loading-indicator',
  templateUrl: './loading-indicator.component.html',
  styleUrls: ['./loading-indicator.component.scss']
})

export class LoadingIndicatorComponent implements OnInit {

  show = false;
  shield = true;
  text: string = "";

  constructor(private indicatorService: LoadingIndicatorService, private subscription: Subscription) {
  }

  ngOnInit() {
      let inProgressCount = 0;
      this.subscription = this.indicatorService.indicatorState
          .subscribe((state: LoadingIndicatorState) => {
              inProgressCount += state.show ? 1 : -1;
              this.show = inProgressCount > 0;
              this.shield = state.shield||false;
              this.text = state.text||"";
          });
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }

}
