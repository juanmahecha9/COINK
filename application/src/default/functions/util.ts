import { Inject, Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class Util {
  constructor(@Inject(Router) private router: Router) {}

  goTo(url_segement: string, _queryParams: any) {
    this.router.navigate([url_segement], {
      queryParams: _queryParams,
    });
  }

  getFormChanges(control: string, formGroup: FormGroup, fn: any) {
    const observable = formGroup.get(control);
    if (observable != null) {
      observable.valueChanges.subscribe({
        next: fn,
      });
    }
  }
}
