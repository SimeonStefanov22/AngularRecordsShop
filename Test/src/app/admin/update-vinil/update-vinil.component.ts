import {Component, OnInit, ViewChild} from '@angular/core';
import {UpdateVinilService} from "../../services/update-vinil.service";
import {NgForm} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-update-vinil',
  templateUrl: './update-vinil.component.html',
  styleUrls: ['./update-vinil.component.css']
})
export class UpdateVinilComponent implements OnInit {
  vinilData: any;
  id: string;
  constructor(
    private updateVinilService: UpdateVinilService,
    private router: Router,
    private httpClient: HttpClient,
    private route: ActivatedRoute) { }


  @ViewChild('updateVinilForm')
  htmlForm: NgForm;
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params.id
      console.log(this.id);
    })
  }

  updateVinil(value){
    //console.log(this.htmlForm.value);
    //this.htmlForm.reset();
    //console.log(value);

    this.updateVinilService.postData(value, this.id)
      .subscribe( data => {
        console.log(data);
        this.vinilData = data;
        console.log(this.id);


        this.router.navigateByUrl('/home')

      })
  }

}
