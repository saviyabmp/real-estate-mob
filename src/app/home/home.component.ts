import { Component, OnInit } from '@angular/core';
import { HelloworldService } from '../helloworld/helloworld.service';
import { EventData, Page } from 'tns-core-modules/ui/page/page';
import { Label } from "tns-core-modules/ui/label";

@Component({
  selector: 'ns-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  private message: MessageModel;
  private label1: Label;
  private label2: Label;

  constructor(private data: HelloworldService) { }

  ngOnInit() {
    this.data.getJSONResponse().subscribe(data => {
      this.message = data;
    })
  }

  public pageLoaded(args: EventData) {
      var page = <Page>args.object;
      this.label1 = <Label>page.getViewById("lbl1");
      this.label2 = <Label>page.getViewById("lbl2");
  }

  public tapAction() {
      //this.label1.text = "id is ${this.message.id} and "
      this.label1.text = "id is ...... "
      //this.label2.text = "content is ${this.message.content}"
      this.label2.text = "content is ......"
  }

}



export class MessageModel {
    id: number;
    content: string;
    constructor(private _id: number, public message: string) {
        this.id = _id;
        this.content = message;
    }
}