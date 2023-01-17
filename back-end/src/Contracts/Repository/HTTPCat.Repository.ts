export interface HTTPCatRepository {
  getHTTPCat(statusCode: string): Promise<string>;
}