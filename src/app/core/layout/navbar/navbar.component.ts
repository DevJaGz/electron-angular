import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { ElectronService } from '../services/electron.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {
  pong: boolean = false;
  constructor(
    private _electronService: ElectronService
  ) { }

  ngOnInit(): void {
    // this._electronService.send('ping', "ping")
    // this._electronService.on("pong", (event: any, arg: string) => {
    //   this.pong = arg === "pong";
    //   alert('arrived!')
    //   // this.cdRef.detectChanges();
    // });
  }

}
