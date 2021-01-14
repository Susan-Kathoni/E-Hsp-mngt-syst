// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  baseurl: "https://hmsystem234.herokuapp.com/api/",
  loginEndpoint: 'https://hmsystem234.herokuapp.com/api/login/',
  signupEndpoint: 'https://hmsystem234.herokuapp.com/api/users/',
  allUsersEndpoint: 'https://hmsystem234.herokuapp.com/api/users/',
  bookAppointmentEndpoint: 'https://hmsystem234.herokuapp.com/api/appointments/',
  viewApointmentEndpoint: 'https://hmsystem234.herokuapp.com/api/appointments/',
  responseToAppointmentEndpoint: 'https://hmsystem234.herokuapp.com/api/response/',
  patientViewsAppointmentEndpoint: 'https://hmsystem234.herokuapp.com/api/response/',
  
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
