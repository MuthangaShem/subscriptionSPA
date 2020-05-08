# SubscriptionApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Mock API 

The Mock API server is built using [json-server](https://www.npmjs.com/package/json-server). Make sure it is installed before running the Mock API commands.

Run `yarn run api` on a new terminal to start the mock API server. Navigate to `http://localhost:3000` to view all the API endpoints.
`http://localhost:3000/subscriptions` is the endpoint to make a POST request when subscribing to a plan.
`http://localhost:3000/plans` is the endpoint to make a GET request to display the subscription plans on the subscribe page.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
