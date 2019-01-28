import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class OrgService {

  constructor(private router: Router, private http: HttpClient) {

  }

  getOrganizationToEdit(params: any) {
    console.log(JSON.stringify(params));
    // tslint:disable-next-line:max-line-length
    return this.http.get('http://wegaaccount.com/B2BBackend/http/invoke/service/organizationBean/getOrganizationToEdit/JSON?params=' +
      JSON.stringify(params));

  }
  myFunc() {
    console.log('ok');
    this.router.navigate(['../organisation/2099/15']);
  }
  getOrganisation(organisationForm,organisation) {

    const org = organisation.organizationToEdit;
    console.log(org.name)
    organisationForm.value.business_name = org.name;


  }
}
