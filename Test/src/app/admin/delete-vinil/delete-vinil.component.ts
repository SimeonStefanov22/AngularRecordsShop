import { Component, OnInit } from '@angular/core';
import {UpdateVinilService} from "../../services/update-vinil.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {DeleteVinylService} from "../../services/delete-vinyl.service";

@Component({
  selector: 'app-delete-vinil',
  templateUrl: './delete-vinil.component.html',
  styleUrls: ['./delete-vinil.component.css']
})
export class DeleteVinilComponent implements OnInit {
  vinilData: any;
  id: string;
  constructor(
    private deleteVinilService: DeleteVinylService,
    private router: Router,
    private httpClient: HttpClient,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params.id
      console.log(this.id);
    })
    this.deleteVinil()
  }

  deleteVinil(){
    this.deleteVinilService.getVinil(this.id)
      .subscribe((data) =>{
        console.log(data);
      })
  }
}
