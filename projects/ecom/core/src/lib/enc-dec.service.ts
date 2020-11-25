import { utf8Encode } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { AES, enc } from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncDecService {

  constructor() { }
// tslint:disable : typedef
  encrypt(value: string, key: string): string {
    return AES.encrypt(value, key).toString();
  }

  decrypt(value: string, key: string): string {
    const bytes = AES.decrypt(value, key);
    return bytes.toString(enc.Utf8);
  }
}
