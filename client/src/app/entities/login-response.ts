import {Personal} from './personal.entitie';

export class LoginResponse {
  constructor(
    public currentUser?: Personal,
    public accessToken?: string,
    public tokenType?: string,
  ) {}
}
