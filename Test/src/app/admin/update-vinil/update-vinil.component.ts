import {Component, OnInit, ViewChild} from '@angular/core';
import {UpdateVinilService} from "../../services/update-vinil.service";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-update-vinil',
  templateUrl: './update-vinil.component.html',
  styleUrls: ['./update-vinil.component.css']
})
export class UpdateVinilComponent implements OnInit {

  constructor(private updateVinilService: UpdateVinilService, private router: Router,private httpClient: HttpClient) { }
  vinilData: any;

  @ViewChild('createVinilForm')
  htmlForm: NgForm;
  ngOnInit() {
  }

  updateVinil(value){
    console.log(this.htmlForm);
    this.htmlForm.reset();

    this.updateVinilService.postData(value)
      .subscribe( data => {
        console.log(data);
        this.vinilData = data;



        this.router.navigateByUrl('/home')

      })
  }

}
