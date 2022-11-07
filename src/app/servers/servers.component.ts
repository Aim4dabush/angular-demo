import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  //property binding
  allowNewServer: boolean = false;

  //event binding
  serverCreationStatus: string = 'No server was created!';

  //event binding and passing data
  //don't forget to put 'Testserver' for 2 way binding example
  serverName: string = 'Testserver';

  //ngIf example
  serverCreated = false;

  //ngFor example
  servers = ['Testserver', 'Testserver 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  //event binding
  // onCreateServer() {
  //   this.serverCreationStatus = 'Server was created!';
  // }

  //Final databinding example
  // onCreateServer() {
  //   this.serverCreated = true;
  //   this.serverCreationStatus =
  //     'Server was created! Name is ' + this.serverName;
  // }

  //ngFor example
  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus =
      'Server was created! Name is ' + this.serverName;
  }

  //event binding and passing data
  onUpdateServerName(event: any) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
