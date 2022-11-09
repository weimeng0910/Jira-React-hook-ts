export interface ResponseError extends Error {
  status?: number;
  message: string;
}
//Request body type.
export interface RequestBody {
  id?: string,
  username: string;
  password: string;
}
//Request parameters
export interface PostRequestParams {
  name: string,
  personId: string,
}
export interface User {
  id: string,
  username: string,
  passwordHash: string,
  token?: string | ''
}
export interface Project {
  creted: number,
  id: number,
  name: string,
  organization: string,
  personId: number | string

}
export interface UserData {

  id: number | string,
  name: string,

}