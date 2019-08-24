import { Component, OnInit } from '@angular/core';
import { HelloworldService } from '../helloworld/helloworld.service';
import { EventData } from "tns-core-modules/data/observable";
import { Page } from 'tns-core-modules/ui/page';
import { Label } from "tns-core-modules/ui/label";
import { TextField } from "tns-core-modules/ui/text-field";

@Component({
    selector: 'ns-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  private message: MessageModel;
  private label1: Label;
  private label2: Label;
  private name: String = "";

  constructor(private data: HelloworldService) { }

    ngOnInit() {
        this.data.getJSONResponse(this.name).subscribe(data => {this.message = data;});
    }

    public pageLoaded(args: EventData) {
        var page = <Page>args.object;
        this.label1 = <Label>page.getViewById("lbl1");
        this.label2 = <Label>page.getViewById("lbl2");
    }

    public onReturn(args: EventData) {
        let textField = <TextField>args.object;
        this.name = textField.text;
    }

  public tapAction() {
      this.data.getJSONResponse(this.name).subscribe(data => {this.message = data;})
      var id = this.message.id;
      var content = this.message.content;
      this.label1.text = "The id is " + id;
      this.label2.text = "The content is "+ content;
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