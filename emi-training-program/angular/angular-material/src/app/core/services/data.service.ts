import { Injectable } from '@angular/core';
import { UrlLink } from '../models/url-link.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  private data: Array<UrlLink>;

  constructor() {
    this.data = [
      {
        id: 19228,
        from: '/heath_and_wellness',
        to: '/danone-group-in-heath-and-wellness/report',
        dateCreated: new Date(),
        permanentLink: true,
      },
      {
        id: 19229,
        from: '/heinekens_acquisition_of_femsa_increases',
        to: '/heinekens_acquisition_of_femsa_increases',
        dateCreated: new Date(),
        permanentLink: true,
      },
      {
        id: 19230,
        from: '/herbal_traditional_products',
        to: '/herbal_traditional_products',
        dateCreated: new Date(),
        permanentLink: true,
      },
      {
        id: 19231,
        from: '/home_care',
        to: '/amway-corp-in-home-care/report',
        dateCreated: new Date(),
        permanentLink: true,
      },
      {
        id: 19232,
        from: '/hong-kong-china',
        to: '/100-home-delivery-take-away-in-hong-kong-china',
        dateCreated: new Date(),
        permanentLink: true,
      },
      {
        id: 19233,
        from: '/hot-drinks',
        to: '/associated-british-foods-plc-in-hot-drinks/report',
        dateCreated: new Date(),
        permanentLink: true,
      },
      {
        id: 19233,
        from: '/hot-drinks',
        to: '/associated-british-foods-plc-in-hot-drinks/report',
        dateCreated: new Date(),
        permanentLink: true,
      },
      {
        id: 19233,
        from: '/hot-drinks',
        to: '/associated-british-foods-plc-in-hot-drinks/report',
        dateCreated: new Date(),
        permanentLink: true,
      },
    ];
  }

  public getData(): Array<UrlLink> {
    return this.data;
  }

}
