# Introduction

This activity goes over how to install the development dependencies to build a test application running on Angular.

# Screenshots

This is a screenshot of the version of the Angular CLI.
![](../activity2Screenshots/Pasted%20image%2020250205104602.png)

This is a screenshot of the angular application running in the browser.
![](../activity2Screenshots/Pasted%20image%2020250205110905.png)

This is a screenshot of the browser after changing the title and saving the file.
![](../activity2Screenshots/Pasted%20image%2020250205110837.png)

# Research Questions

> Research Question 1
> Inspect the default test project structure created in the Activity. Describe the purpose for each of the folders of the following in the project structure: `node_modules`, `src`,` src/app`,` src/assets`, and `src/environments`. Also, describe the purpose for each of the following files in the project: `angular.json`, `package.json`, and `tsconfig.json`,

The purpose for the `src` folder is to hold all of the source files for the project. The `node_modules` folder holds the project dependencies and packages, the ones installed with `npm install`. The `src/app` directory holds the core project files, like components, services, and other logic. The `src/assests` directory holds all of the project's images, icons, fonts, and anything that is considered an asset. The `src/environments` stores configuration files for different environments, like development or production. 

The purpose for the file `angular.json`, is to hold the configuration for Angular CLI. The `package.json` file defines the dependencies that are required for the application. `tsconfig.json` is the TypeScript configuration file that specifies the complier options for the project.


> Research Question 2 
> Inspect the page source for the default page displayed when running the test project. Explain how the resultant page was generated by Angular by providing a brief overview and purpose for each of the following files: `main.ts`, `app.component.css`, `app.component.html`, `app.component.ts`, and `app.module.ts.` 

The `main.ts` file is the entry point for the Angular application and it ensures the application runs properly in the browser. `app.component.css` defines the CSS styles specific to the `AppComponent`. `app.component.css` is the template file for `AppComponent` and defines the structure of the UI and uses Angular directives to display dynamic content. `app.component.ts` contains the logic for `AppComponent` and defines the component's properties and methods. `app.module.ts` is the root module that registers the components, services, and other dependencies.
