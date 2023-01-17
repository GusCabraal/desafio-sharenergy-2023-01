export interface HTTPCatService {
  getHTTPCat(statusCode:string): Promise<string>;
}