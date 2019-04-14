import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { Router } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";


@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  constructor(
  	public authService: AuthService,
    public router: Router,
    public ngZone: NgZone
  ) { }
  
   /*########### Template Driven Form ###########*/
  templateForm(value: any) {
    alert(JSON.stringify(value));
  }
  
  /* submitForm(form: NgForm) {
    this.isSubmitted = true;
    if(!form.valid) {
      return false;
    } else {
    alert(JSON.stringify(form.value))
    }
  } */

  ngOnInit() {
  }

}
