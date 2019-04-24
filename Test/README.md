## Test

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.7.

Introduction
Test SPA web app is a project undertaken as a mandatory requirement for the course "Angular Fundamentals March 2019" by SoftUni.

##Overall Description

In the project are implemented different user roles: admins, regular and guest users, each with different permissions. Depending on its role, every user can access different sections of the application and has specific permissions of what can or cannot do and see. 
In the future many more functionalities will be added.

The public part is visible without authentication. It consists of:
Application start page with all products;
User login form;
User registration form;

After successful login, registered users can access:
Additional Product Information

Administrator has administrative access to the system after successful login. In addition to all regular user abilities he has the following:
1- Access to All users list page;
2- Rights to DELETE every single user;
3- Rights to CREATE every single product;
4- Rights to UPDATE every single product;
5- Rights to DELETE every single product;

To test administrator’s functionality use credentials in Login page: Username: Admin and Password: 111111.

Install the dependencies npm i and start the client npm start or nodemon (port: 5000).
This project was created with [Express] version 4.16.4.

This project was generated with [Angular CLI] version 7.3.7. The app will automatically reload if you change any of the source files.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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
