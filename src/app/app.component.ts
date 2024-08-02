import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/service/auth.service';
import { NgxPermissionsService, NgxPermissionsStore } from 'ngx-permissions';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  permission: string[] = []
  constructor(
    private authService: AuthService,
    private ngxService: NgxPermissionsService,
  ) { }
  ngOnInit() {
    if (!localStorage.getItem('permission')) {
      this.authService.getPermission().subscribe((response) => {
        if (response.status) {
          const [data] = response.data
          if (response.data[0].read) {
            this.permission.push(`${data.roleName}_read`)
          }
          if (response.data[0].write) {
            this.permission.push(`${data.roleName}_write`)
          }
        }
      }
        , (error) => {
          console.log(error)
        },
        () => {
          this.ngxService.loadPermissions(this.permission)
          localStorage.setItem('permission', JSON.stringify(this.permission))
          this.ngxService.permissions$.subscribe(x => console.log(x))
        }
      )
    } else {

      this.ngxService.loadPermissions(JSON.parse(localStorage.getItem('permission') ?? ""))
    }
  }

  ngOnDestroy() {
  }

  // user!: SocialUser;
  // // loggedIn: boolean;

  // constructor(private authService: SocialAuthService) { }

  // ngOnInit() {
  //   this.authService.authState.subscribe((user) => {
  //     this.user = user;
  //     console.log(user);
      
  //     // this.loggedIn = (user != null);
  //   });
  // }
}
