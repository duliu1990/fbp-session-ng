import { Injectable, Optional } from '@angular/core';
import { FbpSessionConfig } from './fbp-session.config';

@Injectable({
  providedIn: 'root'
})
export class FbpSessionService {

  timeout: number = 60 * 15; //The default session timeout is 15 minutes

  constructor(@Optional() config: FbpSessionConfig) {
    if (config) {

      if (config.timeout)
        this.timeout = config.timeout;

      
    }
  }




}
