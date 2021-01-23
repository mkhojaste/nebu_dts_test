import { Injectable, NgZone } from '@angular/core';

function _window(): any {
  // console.log(window.parent.location);
  // console.log(window.parent.parent.location);
  // console.log(window.parent.parent.parent.location);
  // console.log(window.name);
  
  if(window.parent.location !== window.parent.parent.location)
    return window.parent.parent;
  return null;
}

@Injectable()
export class WindowRefService {

  constructor(private zone:NgZone) { 
    (<any>window).ngZone = this.zone;
  }

  sayHi() {
    //debugger;
    console.log('hi');
    
  }

  get nativeWindow(): any {
    console.log(_window());
    
    if(_window() !== null)
      return _window().$("body").SocketManager(1,2,3,4,5);
    return null;      
  }
}
