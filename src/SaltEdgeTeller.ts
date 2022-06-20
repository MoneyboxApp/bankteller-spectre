export default class {
  private secret: string;
  private appId: string;

  constructor(appId: string, secret: string) {
    this.appId = appId;
    this.secret = secret
  }
}