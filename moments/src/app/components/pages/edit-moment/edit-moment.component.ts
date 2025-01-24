import { Component } from '@angular/core';
import { Moment } from '../../../Moments';
import { MomentService } from '../../../services/moment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessagesService } from '../../../services/messages.service';

@Component({
  selector: 'app-edit-moment',
  templateUrl: './edit-moment.component.html',
  styleUrl: './edit-moment.component.css',
})
export class EditMomentComponent {

  moment!:Moment;
  btnText: string = 'Editar';

  constructor(
    private MomentService: MomentService,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessagesService,
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.MomentService.getItemMoment(id).subscribe((item) => {
      this.moment = item.data;
    })
  }

  async editMoments (momentData: Moment) {
    const id = this.moment.id;

    const formData = new FormData();

    formData.append('title', momentData.title);
    formData.append('description', momentData.description);
    formData.append('date', momentData.date);

    if(momentData.image) {
      formData.append('image', momentData.image);
    }

    await this.MomentService.editMoment(this.moment.id!, formData).subscribe();

    this.messageService.add(`Moment ${momentData.title} foi atualizado com sucesso!`);

    setTimeout(() => {
      this.router.navigate([`/moments/${id}`]).then(() => {
        window.location.reload();
      })
    }, 2000);

  }

}
