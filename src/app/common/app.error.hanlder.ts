import { Observable } from 'rxjs';
import {ErrorHandler} from '@angular/core';

export class AppErrorHandler implements ErrorHandler
{
    handleError(error: any): void {
        if (error instanceof Observable)
        {
            error.subscribe(null, customeError =>
             {
                // alert(customeError);
                console.log(customeError);
            });
        }
        else
        {
            // alert(error);
            console.log(error);
        }error;

    }

}
