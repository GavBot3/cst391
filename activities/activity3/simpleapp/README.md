# Activity 3
## PART 1

### Executive Summary

This application is a simple app to demonstrate how to use angular. It has a simple UI with two components, info and shop. These components show how to handle page events and make different components appear on a button press. It also shows how to set properties to components and how the UI can manipulate them, such as a text input field.

### Screenshots

Initial application page
![](/activities/activity3/screenshots/Screenshot%202025-02-28%20100228.png)

Bootstrap table using dev tools to show responsiveness at a small screen.
![](/activities/activity3/screenshots/small_table.png)

Bootstrap table using dev tools to show responsiveness at a large screen.
![](/activities/activity3/screenshots/large_table.png)

Application Page of the name form before name is entered
![](/activities/activity3/screenshots/Screenshot%202025-02-28%20114419.png)

Application page after submitting the first form
![](/activities/activity3/screenshots/Screenshot%202025-02-28%20114534.png)

Screenshot of the dev tools console after clicking buy.
![](/activities/activity3/screenshots/Screenshot%202025-02-28%20115002.png)


### Research Questions

1. Describe @Input decorator used in info.component.ts

The @Input decorator in `info.component.ts` allows the component to receive data from its parent component. In the info component's case, it is used for the name property which means the parent component can pass a value to `info.component.ts`. Name is a dynamically set property from the outside component. It is done like this:

```html
<app-info [name]="'Luke Skywalker'"></app-info>
```

2. Describe [value] used in info.component.html

The `[value]` in `info.component.ts` is a binding used in Angular to set an element's value dynamically. Take this for example: `<input [value]="selectedProduct">` The value of this input field is bound to the `selectedProduct` property in the component. When `selectedProduct` changes, the input field will updated automatically. Changes by the user to the input field won't update`selectedProduct` unless another binding method like `[(ngModel)]` is used.


3. Describe [(ngModel)] also used in info.component.html

The `[(ngModel)]` in `info.component.hmtl` enables two-way data binding. This means that changes in the UI will update the component property, and vice versa. Here is an example: `<input [(ngModel)]="quantity">`. This will bind the input field to the `quantity` property within the component. When a user types in a new value the property in the component will change and when the value is updated within the code then the UI will reflect those changes.
