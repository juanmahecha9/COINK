import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.prod";

@Injectable({
  providedIn: "root",
})
export class CoinkService {
  private service: string = environment.service;

  constructor(private http: HttpClient) {}

  httpHeaders(): any {
    return {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache",
      Accept: "*/*",
    };
  }

  getDocumetTypes(): Observable<any> {
    return this.http
      .get<any>(this.service.concat("documentTypes?apiKey=030106"))
      .pipe((res) => res);
  }
}
