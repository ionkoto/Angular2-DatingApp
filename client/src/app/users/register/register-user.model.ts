export class RegisterUserModel {
  constructor(
    public firstName?: string,
    public lastName?: string,
    public username?: string,
    public age?: number,
    public description?: string,
    public gender?: string,
    public password?: string,
    public confirmPassword?: string
  ) {}
}
