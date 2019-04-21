import { Component, OnInit } from '@angular/core';

import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {DeleteVinylService} from "../../services/delete-vinyl.service";

@Component({
  selector: 'app-delete-vinil',
  templateUrl: './delete-vinil.component.html',
  styleUrls: ['./delete-vinil.component.css']
})
export class DeleteVinilComponent implements OnInit {
  response: any;
  vinilData;
  id: string;
  constructor(
    private deleteVinilService: DeleteVinylService,
    private router: Router,
    private httpClient: HttpClient,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {


    this.route.params.subscribe((params) => {
      this.id = params.id

    })


    this.deleteVinilService.getVinil(this.id)
      .subscribe((data) =>{
        this.response = data;
        this.vinilData = this.response.record;
      })

  }


  deleteVinil(){
    console.log("Test");
    console.log(this.id);
    this.deleteVinilService.delete(this.id)
      .subscribe((data) => {
        console.log(data);
      })
    this.router.navigateByUrl("/home");

  }
}
