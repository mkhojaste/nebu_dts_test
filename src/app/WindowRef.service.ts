import { Injectable } from '@angular/core';

function _window(): any {
  return window.parent.parent;
}

@Injectable()
export class WindowRefService {

  constructor() { }
  get nativeWindow(): any {
    return _window()["$"]("body").SocketManager(1,2,3,4,5);
  }
}
