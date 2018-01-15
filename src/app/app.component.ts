import { Component } from "@angular/core";
import { FormGroup, FormControl, FormArray} from "@angular/forms";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent {
    title = "reactive-forms demo";

    loginForm: FormGroup = new FormGroup({
        email: new FormControl(""),
        password: new FormControl("")
    });
    
}
