import { Component, OnInit, } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { JokeServicesService } from 'src/app/Services/joke-services.service';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})
export class JokesComponent implements OnInit {
  joke: any = [];




  constructor(private fb:FormBuilder,private api:JokeServicesService){

  }

  requestStatusForm:FormGroup;
  ngOnInit(): void {
    this.requestStatusForm = this.fb.group(
      {
        count:['']
      }
    )
  }

  submit()
  {
    let count = this.requestStatusForm.get('count')?.value;
    if(count == null)
    {
      count = 1
    }
    this.api.getJokeByCount(count).subscribe((res) =>{
      console.log(res);

      this.joke = res['body'];

    })
  }

}
