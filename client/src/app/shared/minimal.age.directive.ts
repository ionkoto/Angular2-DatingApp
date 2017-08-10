import {AbstractControl, NG_VALIDATORS, Validator} from "@angular/forms";
import {Directive, Input} from "@angular/core";

@Directive({
  selector: '[minAge]',
  providers: [{provide: NG_VALIDATORS, useExisting: MinimalAgeDirective, multi: true}]
})
export class MinimalAgeDirective implements Validator {
  @Input() age: number;

  validate(control: AbstractControl): { [key: string]: any } {
    control
      .valueChanges
      .subscribe((value) => {
        if(value < 18)
          control.setErrors({minAge: 18});
      });

    return null;
  }
}
