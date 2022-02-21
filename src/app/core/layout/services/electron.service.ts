import { Injectable } from '@angular/core';
// import { IpcRenderer, ipcRenderer, webFrame, remote, childProcess, fs} from "electron";
import { IpcRenderer, ipcRenderer } from "electron";

@Injectable({
  providedIn: 'root'
})
export class ElectronService {
  // private ipc!: IpcRenderer;

  ipcRenderer!: typeof ipcRenderer;
  // webFrame!: typeof webFrame;
  // remote!: typeof remote;
  // childProcess!: typeof childProcess;
  // fs!: typeof fs;
  constructor() {
    // console.log("ElectronService", this.isElectron());
    // if (window.require) {
    //   try {
    //     this.ipc = window.require("electron").ipcRenderer;
    //     console.log("finded ipcRenderer");

    //   } catch (e) {
    //     throw e;
    //   }
    // } else {
    //   console.warn("Electron IPC was not loaded");
    // }

  }

  // private isElectron(): boolean {
  //   return !!((window) && (window).process && (window).process.type);
  // }

  // public on(channel: string, listener: any): void {
  //   if (!this.ipc) {
  //     return;
  //   }
  //   this.ipc.on(channel, listener);
  // }

  // public once(channel: string, listener: any): void {
  //   if (!this.ipc) {
  //     return;
  //   }
  //   this.ipc.once(channel, listener);
  // }

  // public send(channel: string, ...args: any[]): void {
  //   if (!this.ipc) {
  //     return;
  //   }
  //   this.ipc.send(channel, ...args);
  // }

  // public removeAllListeners(channel: string): void {
  //   if (!this.ipc) {
  //     return;
  //   }
  //   this.ipc.removeAllListeners(channel);
  // }



}
