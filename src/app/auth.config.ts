/**
 * This file contains authentication parameters. Contents of this file
 * is roughly the same across other MSAL.js libraries. These parameters
 * are used to initialize Angular and MSAL Angular configurations in
 * in app.module.ts file.
 */

import {
  LogLevel,
  Configuration,
  BrowserCacheLocation,
} from "@azure/msal-browser";

export const b2cPolicies = {
  names: {
    signUpSignIn: "B2C_1_Financial_Advisor_Signup_and_Sign_In",
    // editProfile: "b2c_1_edit_profile_v2"
  },
  authorities: {
    signUpSignIn: {
      authority:
        "https://fispokedev.b2clogin.com/fispokedev.onmicrosoft.com/B2C_1_Financial_Advisor_Signup_and_Sign_In",
    },
    // editProfile: {
    //   authority:
    //     "https://fispokedev.b2clogin.com/fispokedev.onmicrosoft.com/b2c_1_edit_profile_v2",
    // },
  },
  authorityDomain: "fispokedev.b2clogin.com",
};

/**
 * Configuration object to be passed to MSAL instance on creation.
 * For a full list of MSAL.js configuration parameters, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md
 */
export const msalConfig: Configuration = {
  auth: {
    clientId: "45492d79-d72c-45ea-8703-1708221b5989", // This is the ONLY mandatory field that you need to supply.
    authority: b2cPolicies.authorities.signUpSignIn.authority,
    knownAuthorities: [b2cPolicies.authorityDomain],
    redirectUri: "/", // Points to window.location.origin by default. You must register this URI on Microsoft Entra admin center/App Registration.
    postLogoutRedirectUri: "/#/auth/login", // Points to window.location.origin by default.
  },
  cache: {
    cacheLocation: BrowserCacheLocation.LocalStorage, // Configures cache location. "sessionStorage" is more secure, but "localStorage" gives you SSO between tabs.
  },
  system: {
    loggerOptions: {
      loggerCallback(logLevel: LogLevel, message: string) {
        console.log(message);
      },
      logLevel: LogLevel.Verbose,
      piiLoggingEnabled: false,
    },
  },
};

/**
 * Scopes you add here will be prompted for user consent during sign-in.
 * By default, MSAL.js will add OIDC scopes (openid, profile, email) to any login request.
 * For more information about OIDC scopes, visit:
 * https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
 */
export const loginRequest = {
  scopes: [
    "https://fispokedev.onmicrosoft.com/6db89ec9-4a4b-44c3-a6bf-89144f463e07/User.Read",
    "https://fispokedev.onmicrosoft.com/6db89ec9-4a4b-44c3-a6bf-89144f463e07/User.Write",
  ],
};
