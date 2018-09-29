import {ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'mac-navigation-item',
  templateUrl: './navigation-item.component.html',
  styleUrls: ['./navigation-item.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationItemComponent implements OnInit {

  @Input() title: string;
  @Input() navId: any;
  @Output() outActivateNavigationItem = new EventEmitter<any>();

  @HostListener('click')
  activateNavigationItem() {
    this.outActivateNavigationItem.emit(this.navId);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
