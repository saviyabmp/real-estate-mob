import { Component } from "@angular/core";

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html"
})
export class AppComponent {
    constructor() {
        console.log("Hello World 1");
        console.log(JSON.stringify({
            type: 'LOG_TO_CONSOLE',
            payload: 'Hello World 2'
        }));

    }
 }
