export class ProfileModel {
  constructor(public userProfilePicture: string = '',
              public userFirstName: string = '',
              public userLastName: string = '',
              public userGender: string = '',
              public userUsername: string = '',
              public userAge: string = '',
              public profilePicFile?: boolean) {
  }
}
