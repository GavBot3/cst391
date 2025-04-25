import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/users.model';
import { Estate } from '../models/estates.model';

@Injectable({ providedIn: 'root' })
export class EstateService {
  private host = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  // ================================
  // Users CRUD Operations
  // ================================

  public getUsers(callback: (users: User[]) => void): void {
    this.http.get<User[]>(`${this.host}/users`).subscribe(users => {
      callback(users);
    });
  }

  public getUserByEmail(email: string, callback: (user: User) => void): void {
    this.http.get<User>(`${this.host}/users/${encodeURIComponent(email)}`)
      .subscribe(user => {
        callback(user);
      });
  }

  public getUserById(userId: number, callback: (user: User) => void): void {
    this.http.get<User>(`${this.host}/users/${userId}`).subscribe(user => {
      callback(user);
    });
  }

  public createUser(user: User, callback: () => void): void {
    this.http.post<User>(`${this.host}/users`, user).subscribe(() => {
      callback();
    });
  }

  public updateUser(user: User, callback: () => void): void {
    this.http.put<User>(`${this.host}/users`, user).subscribe(() => {
      callback();
    });
  }

  public deleteUser(userId: number, callback: () => void): void {
    this.http.delete(`${this.host}/users/${userId}`).subscribe(() => {
      callback();
    });
  }

  // ================================
  // Estates CRUD Operations
  // ================================

  public getEstates(callback: (estates: Estate[]) => void): void {
    this.http.get<Estate[]>(`${this.host}/estates`).subscribe(estates => {
      callback(estates);
    });
  }

  public getEstateById(id: number, callback: (estate: Estate) => void): void {
    this.http.get<Estate>(`${this.host}/estates?estateId=${id}`).subscribe(estate => {
      callback(estate);
    });
  }

  public getEstatesByOwner(ownerId: number, callback: (estates: Estate[]) => void): void {
    this.http.get<Estate[]>(`${this.host}/estates/owner/${ownerId}`).subscribe(estates => {
      callback(estates);
    });
  }

  public createEstate(estate: Estate, callback: () => void): void {
    this.http.post<Estate>(`${this.host}/estates`, estate).subscribe(() => {
      callback();
    });
  }

  public updateEstate(estate: Estate, callback: () => void): void {
    this.http.put<Estate>(`${this.host}/estates`, estate).subscribe(() => {
      callback();
    });
  }

  public deleteEstate(id: number, callback: () => void): void {
    this.http.delete(`${this.host}/estates/${id}`).subscribe(() => {
      callback();
    });
  }
}
