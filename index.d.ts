import { Got } from 'got';
import { CookieJar } from 'tough-cookie';

declare class Browser {
  static create(): Promise<Browser>;
  init(): Promise<void>;
  close(): Promise<void>;
  waitUntil(eventName: string, timeout: number): Promise<void>;
  getPageHtml(): Promise<string>;
  getUserAgent(): Promise<string>;
  navigate(url: string): Promise<void>;
  getCookies(): Promise<Array<{
    name: string;
    value: string;
    domain: string;
    path: string;
    expires?: number;
    size?: number;
    httpOnly?: boolean;
    secure?: boolean;
    session?: boolean;
    sameSite?: 'Strict' | 'Lax' | 'None';
  }>>;
  takeScreenshot(filepath: string): Promise<void>;
  readonly cdp: any;
}

interface CloudflareScraper extends Got {
  defaults: Got;
  cookieJar: CookieJar;
}

declare const cloudflareScraper: CloudflareScraper;

export default cloudflareScraper;
export = cloudflareScraper;
