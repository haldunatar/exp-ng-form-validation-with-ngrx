import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form = new FormGroup(
    {
      myTextField: new FormControl('', [Validators.required]),
      myOtherTextField: new FormControl('', [
        Validators.required,
        Validators.maxLength(3)
      ])
    },
    { updateOn: 'submit' }
  );
}
