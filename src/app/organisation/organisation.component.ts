import { Component, OnInit } from '@angular/core';
import { OrgService } from '../org.service';
import { Router, RouterStateSnapshot, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-organisation',
  templateUrl: './organisation.component.html',
  styleUrls: ['./organisation.component.css']
})
export class OrganisationComponent implements OnInit {
  organisationForm: FormGroup;
  data;
  params;
  constructor(private orgService: OrgService, private router: ActivatedRoute) {
    this.organisationForm = new FormGroup({
      name: new FormControl(''),

    });
    this.router.queryParams.subscribe(params => {
      console.log(params);
      this.params = JSON.parse(params.params);
      console.log(JSON.parse(params.params));

    });


  }

  getOrganisation(form, data) {

  }
  ngOnInit() {
    this.orgService.getOrganizationToEdit(JSON.parse(this.params)).subscribe((data: any) => {
      this.organisationForm.controls['name'].setValue(data.organizationToEdit.name)

    }
    );
  }
}
