import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  AfterContentInit,
  SimpleChanges,
  AfterContentChecked,
  OnDestroy,
  ContentChild,
  ElementRef,
} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    OnDestroy
{
  @Input("srvElement") element: { type: string; name: string; content: string };
  @Input() name: string;
  @ContentChild("contentParagraph") paragraph: ElementRef;

  constructor() {
    console.log("constructor called");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanged called");
    console.log(changes);
  }

  ngOnInit() {
    console.log("ngOnInit called");
    console.log(
      "Text content of paragraph: " + this.paragraph.nativeElement.textContent
    );
  }

  ngDoCheck(): void {
    console.log("ngDoCheckCalled");
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit called");
    console.log(
      "Text content of paragraph: " + this.paragraph.nativeElement.textContent
    );
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked called");
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy called");
  }
}
