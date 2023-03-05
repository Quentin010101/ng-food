import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  private cache: { [key: string]: any } = {};

  get(key: string): any {
    return this.cache[key];
  }

  set(key: string, value: any): void {
    this.cache[key] = value;
  }

  has(key: string): boolean {
    return this.cache.hasOwnProperty(key);
  }

  clear(): void {
    this.cache = {};
  }
}
