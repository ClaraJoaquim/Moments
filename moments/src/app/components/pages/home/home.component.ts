import { Component, OnInit, } from '@angular/core';
import { MomentService } from '../../../services/moment.service';
import { Moment } from '../../../Moments';
import { faSearch, faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  allMoments: Moment[] = [];
  moments: Moment[] = [];
  baseApiUrl = "http://localhost:3333/";

  faSearch = faSearch;
  faTimes = faTimes;
  faEdit = faEdit;

  constructor(
    private momentService: MomentService) {}

  ngOnInit(): void {
    this.momentService.getMoments().subscribe((items) => {

      let data = items.data

      data = data.map((item) => {
        console.log(item.created_at); // Verifique o que está sendo passado
        if (item.created_at && !isNaN(new Date(item.created_at).getTime())) {
          item.created_at = new Date(item.created_at).toLocaleDateString('pt-BR');
        }
        return item;
      });

      this.allMoments = data;
      this.moments = data;

    }) 
  }

  search(e: Event): void {
    const target = e.target as HTMLInputElement
    const value = target.value.toLowerCase()

    this.moments = this.allMoments.filter((moment) => {
      return moment.title?.toLowerCase().includes(value)
    });
  }

}
