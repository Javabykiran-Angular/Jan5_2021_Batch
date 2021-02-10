import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"],
})
export class PostComponent implements OnInit {
  post:any[]=[];

  id:string='';
  title:string='';
  body:string='';
  ishidden:boolean=true;

  constructor(private service: HttpService) {}

  ngOnInit() {
    this.service.getpost()
    .subscribe((response) => {
      console.log(response);
      this.post=(<any>response);
    });
  }

  onSubmit(mytitle,mybody){
    let obj={
      title:mytitle,
      body:mybody
    }
    this.service.SendData(obj)
    .subscribe((response)=>{
      console.log(response);
    })
  }

  onUpdate(item){
    console.log(item);
    this.id=item.id;
    this.title=item.title;
    this.body=item.body;
    this.ishidden=false;
  }

  onFinalUpdate(){
    let obj={
      id:this.id,
      title:this.title,
      body:this.body
    }

    this.service.Updatedata(obj)
    .subscribe((response)=>{
      console.log(response);
    })

  }

}
