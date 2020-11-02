import {Component, DoCheck, OnInit} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const API_KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIzMGRiMWYyMC03YTM0LTAxMzctMzMxZi0wNjM0Njk3NDYyYTIiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTYxNTQ4ODI5LCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6Imp1c3RpbndpbG1ldC1oIn0.4jFqOcIuOKxFWC9G_OmwY9SNNlLimJV2gUuyR4XCid4';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit, DoCheck {
  player: string;
  myInfo: Player;
  pubgInfo: Player;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // const headersJsonPlaceHolder = new HttpHeaders({
    //   'Content-Type': 'application/json',
    // Authorization: `Bearer ${API_KEY}`
    // });
    // this.http.get('api/users', { headers: headersJsonPlaceHolder }).subscribe(peoples => (this.myInfo = peoples));
  }

  ngDoCheck(): void {
    console.log(this.pubgInfo);
  }

  submit(player: any): void {
    console.log(player.player);

    const headersPubg = new HttpHeaders({
      Accept: 'application/vnd.api+json',
      Authorization: `Bearer ${API_KEY}`
    });

    this.http
      .get(`pubg/steam/players?filter[playerNames]=${player.player}`, { headers: headersPubg })
      .subscribe((peoples: any) => (this.pubgInfo = peoples.data[0]));
  }

}

class Player {
  type: string;
  id: string;
  attributes: Attributes;
  relationships: RelationShips;
}


class Attributes {
  name: string;
  stats: boolean;
  titleId: string;
  shardId: string;
  patchVersion: string;
}

class RelationShips {
  matches: Array<string>;
}
