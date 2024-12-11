import { Injectable } from '@angular/core';

function getDocument(): Document {
  return document;
}

@Injectable({
  providedIn: 'root'
})
export class DocumentRefService {
  get nativeDocument(): Document {
    return getDocument();
  }
}
