import { ValidationErrors } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
export class ChangePasswordValidator {
    static ShouldBeSame(control: AbstractControl) : ValidationErrors | null
    {
        if((control.get('password').value as string) !== (control.get('confirm_password').value as string) )
        {
            return {ShouldBeSame: true};
        }
        return null;
    }
}