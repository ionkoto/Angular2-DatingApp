export class RegisterUserModel {
  constructor(
    public firstName?: string,
    public lastName?: string,
    public username?: string,
    public age?: number,
    public password?: string,
    public confirmPassword?: string
  ) {}
}
