import { Component } from '@angular/core';
import { Moment } from '../../../Moments';
import { MomentService } from '../../../services/moment.service';
import { MessagesService } from '../../../services/messages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrl: './new-moment.component.css',
  providers: [MomentService],
})
export class NewMomentComponent {
  
  btnText = "Compartilhar";

  constructor(private momentService: MomentService, 
    private messagesService: MessagesService,
    private router: Router,
  ){}

  async createHandler(moment: Moment) {
    const formData = new FormData();

    formData.append('title', moment.title);
    formData.append('description', moment.description);

    if(moment.image){
      formData.append('image', moment.image);
    }

    await this.momentService.createMoment(formData).subscribe();

    this.messagesService.add("Momento Adicionado com Sucesso!");

    setTimeout(() => {
      this.router.navigate(['/']).then(() => {
        window.location.reload();
      })
    }, 1500);
  }

}
