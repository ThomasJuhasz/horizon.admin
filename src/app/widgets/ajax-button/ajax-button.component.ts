import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

export interface IAjaxButtonParams {
  title: string;
  onClick: () => Observable<any>;
  successCallback: (result: any) => void;
  errorCallback: (error: any) => void;
}

@Component({
  selector: 'app-ajax-button',
  templateUrl: './ajax-button.component.html',
  styleUrls: ['./ajax-button.component.less']
})
export class AjaxButtonComponent implements OnInit {
  @Input() params: IAjaxButtonParams;
  stateString: string;
  state: States;
  States = States;
  disabled = false;

  constructor() { }

  ngOnInit() {
    this.setStateToDefault();
  }

  /**
   * triggers the onClick method that was passed in by the client
   * and disables the button while waiting for the response
   * @param button The button element that was clicked
   */
  save() {
    if (!this.disabled) {
      this.setStateToLoading();
      this.disabled = true;

      const saveStream = this.params.onClick();
      saveStream.subscribe(
        result => {
          this.setStateToSuccess();
          this.params.successCallback(result);

          setTimeout(() => {
            this.setStateToDefault();
            this.disabled = false;
          }, 2000);
        },
        error => {
          this.setStateToError();
          this.params.errorCallback(error);

          setTimeout(() => {
            this.setStateToDefault();
            this.disabled = false;
          }, 2000);
        });
    }
  }

  setStateToDefault() {
    this.state = States.default;
  }
  setStateToLoading() {
    this.state = States.loading;
  }
  setStateToSuccess() {
    this.state = States.success;
  }
  setStateToError() {
    this.state = States.error;
  }

}

enum States {
  default,
  loading,
  success,
  error
}
