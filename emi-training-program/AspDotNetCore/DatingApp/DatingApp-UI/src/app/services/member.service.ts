import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMember } from '../models/imember';
import { environment } from '../../environments/environment';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  public members: IMember[] = [];

  baseUrl = environment.apiUrl;
    constructor(private httpClient: HttpClient) {
  }
  public getMembers(): any {
    if (this.members.length > 0) {
      return of(this.members);
    }

    return this.httpClient.get<IMember[]>(this.baseUrl + 'user').pipe(map((members) => {
      this.members = members;
      return members;
    }));
  }

  public getMemberById(id: number): any {
    const member = this.members.find(x => x.id === id);
    if (member !== undefined) {
      return of(member);
    }
    return this.httpClient.get<IMember>(this.baseUrl + 'user/' + id);
  }

  public updateUser(member: IMember): any {
    return this.httpClient.put(this.baseUrl + 'user/edit', member).pipe(map(() => {
      const index = this.members.indexOf(member);
      this.members[index] = member;
    }));
  }

  public setMainPhoto(id: number): any {
    return this.httpClient.put(this.baseUrl + 'user/set-main-photo/' + id, {});
  }

  public deletePhoto(photoId: number): any {
    return this.httpClient.delete(this.baseUrl + 'user/delete-photos/' + photoId);
  }
}
