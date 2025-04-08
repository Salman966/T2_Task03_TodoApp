import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'https://dummyjson.com/auth/login';
  private usersKey = 'localUsers';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const localUsers = this.getLocalUsers();
    const localUser = localUsers.find(u => u.username === username && u.password === password);
    
    if (localUser) {
      return of({
        token: 'local-token-' + Date.now(),
        username: localUser.username,
        firstName: localUser.username,
        id: localUser.id
      });
    }
    
    return this.http.post(this.apiUrl, {
      username,
      password,
      expiresInMins: 30
    });
  }

  register(user: {username: string, password: string, email: string}): Observable<any> {
    const users = this.getLocalUsers();
    users.push({
      ...user,
      id: Date.now()
    });
    localStorage.setItem(this.usersKey, JSON.stringify(users));
    return of({ success: true });
  }

  private getLocalUsers(): any[] {
    const users = localStorage.getItem(this.usersKey);
    return users ? JSON.parse(users) : [];
  }
}