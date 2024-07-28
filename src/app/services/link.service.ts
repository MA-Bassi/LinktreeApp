import {Injectable, signal} from '@angular/core';
import {DASH_LINKS, DashLink} from "../constants/links.constant";

@Injectable({
  providedIn: 'root'
})
export class LinkService {
  private links = signal(DASH_LINKS);

  constructor() { }

  getLinks() {
    return this.links;
  }

  addLink(link: DashLink) {
    this.links.update(values => [...values, link]);
  }

  removeLink(idx: number) {
    this.links.update(values => values.filter((item, index) => index !== idx));
  }

  editLink(link: DashLink, index: number) {
    this.links.update(values => {
      let result = values;
      result[index] = link;
      return result;
    })
  }
}
