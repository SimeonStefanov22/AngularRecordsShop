import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {CreateVinilService} from "../create-vinil.service";

@Component({
  selector: 'app-create-vinil',
  templateUrl: './create-vinil.component.html',
  styleUrls: ['./create-vinil.component.css']
})
export class CreateVinilComponent implements OnInit {
  vinilData: any;

  @ViewChild('createVinilForm')
  htmlForm: NgForm;

  constructor(private createVinilService: CreateVinilService,private httpClient: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  createVinil(value){
    console.log(this.htmlForm);
    this.htmlForm.reset();

    this.createVinilService.postData(value)
      .subscribe( data => {
        console.log(data);
        this.vinilData = data;



        this.router.navigateByUrl('/home')

      })
  }

}
