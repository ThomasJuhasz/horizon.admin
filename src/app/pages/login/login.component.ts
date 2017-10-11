import { IAjaxButtonParams } from './../../widgets/ajax-button/ajax-button.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { Observable } from 'rxjs/Observable';
import { I18nService } from '../../services/shared/i18n.service';

@Component({
	moduleId: module.id,
	templateUrl: 'login.component.html',
	styleUrls: ['./login.component.less']
})

export class LoginComponent implements OnInit {
	model: any = {};
	loading = false;
	error = '';
	loginButtonParams: IAjaxButtonParams;

	constructor(
		private authenticationService: AuthenticationService,
		private i18n: I18nService,
		private router: Router) { }

	ngOnInit() {
		// reset login status
		// TODO: take out when we have a profile page
		this.authenticationService.logout();
		this.model.username = 'horizontest';
		this.model.password = 'SuperPassword';

		this.loginButtonParams = {
			title: this.i18n.instant('login.login_button'),
			onClick: this.login.bind(this),
			successCallback: this.loginSuccess.bind(this),
			errorCallback: this.loginError.bind(this)
		};
	}

	login() {
		this.error = null;
		return this.authenticationService.login(this.model.username, this.model.password);
	}

	loginSuccess(result) {
		setTimeout(() => {
			this.router.navigate(['/dashboard']);
		}, 700);
	}

	loginError(error) {
		this.error = error;
	}

	logout() {
		this.authenticationService.logout();
	}
}
