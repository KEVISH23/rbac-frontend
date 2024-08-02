import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public apiUrl="http://localhost:3000/auth/getPermissions"
  constructor(
    private http:HttpClient
  ) { }

  getPermission():Observable<any>{
    return this.http.get(this.apiUrl,{
      headers:{
        'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjllNGYxMWVkMWM2ZGE3NTFiYmU2MDYiLCJyb2xlSWQiOiI2NjllMzVhZWRmODIyOGUzMjFmN2VkZGEiLCJpYXQiOjE3MjE4ODkyMjl9.-l3C6zG6obZ-XoSsmVEHBrn3NL8hPD8LqfQihpTQcgw',
        module:'user'
      }   
    })
  }
}


//user token

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjllNGYxMWVkMWM2ZGE3NTFiYmU2MDYiLCJyb2xlSWQiOiI2NjllMzVhZWRmODIyOGUzMjFmN2VkZGEiLCJpYXQiOjE3MjE4ODkyMjl9.-l3C6zG6obZ-XoSsmVEHBrn3NL8hPD8LqfQihpTQcgw


//admin token

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjlmMzVjZWQ0MjgxNjA4ZjNmNDc5YmQiLCJyb2xlSWQiOiI2NjllMjQ0M2I4NTI2YzRiNDU5ZDhiN2MiLCJpYXQiOjE3MjI2MDA3MjB9.V_YXuVHTnE8_-b1BGKaegbpt4InDPXGczSB4WIPdWGY