import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnChanges {
  @Input("items") items: MenuItem[] | undefined;
  @Output() gener: EventEmitter<MenuItem> = new EventEmitter();
  ngOnInit() {}
   
  clickUser(element:MenuItem){
    this.gener.emit(element);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['items']) {
      this.items = this.items?.map((element)=>{
        return {...element, command: () => this.clickUser(element)}
      });
    }
  }

}
