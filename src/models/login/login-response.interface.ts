export interface LoginReponse{
  result? :{// the result is optional hence ?/
    email?:string; // ? makes the field is optional
    uid?:string;
  }

  error?:{
    code?:string;
    message?:string;
  }
}
