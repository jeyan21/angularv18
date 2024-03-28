import { Component, OnInit } from '@angular/core';

import { GoogleLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';
import { SocialUser } from '@abacritt/angularx-social-login';
import {
  FacebookLoginProvider,
  AmazonLoginProvider,
  VKLoginProvider,
  MicrosoftLoginProvider,
} from '@abacritt/angularx-social-login';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit{

  user: SocialUser | undefined;
  GoogleLoginProvider = GoogleLoginProvider;

  private accessToken = '';

  constructor(private _authService:SocialAuthService,  private httpClient: HttpClient){}

 

  ngOnInit(): void {
    const signUpButton: HTMLElement = document.getElementById('signUp') as HTMLElement;
    const signInButton: HTMLElement = document.getElementById('signIn') as HTMLElement;
    const container: HTMLElement = document.getElementById('container') as HTMLElement;

    signUpButton.addEventListener('click', () => {
      container.classList.add("right-panel-active");
    });

    signInButton.addEventListener('click', () => {
      container.classList.remove("right-panel-active");
    });

    this._authService.authState.subscribe((user) => {
      this.user = user;
    });
  }

  signInWithFB(): void {
    this._authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signInWithAmazon(): void {
    this._authService.signIn(AmazonLoginProvider.PROVIDER_ID);
  }

  signInWithVK(): void {
    this._authService.signIn(VKLoginProvider.PROVIDER_ID);
  }

  signInWithMicrosoft(): void {
    this._authService.signIn(MicrosoftLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this._authService.signOut();
  }

  refreshGoogleToken(): void {
    this._authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }

}
