import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MomentService } from '../../../services/moment.service';
import { Moment } from '../../../Moments';
import { faTimes, faEdit, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { MessagesService } from '../../../services/messages.service';
import { Comment } from '../../../Comments';
import { CommentService } from '../../../services/comment.service';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-individual-page',
  templateUrl: './individual-page.component.html',
  styleUrl: './individual-page.component.css'
})
export class IndividualPageComponent implements OnInit {
  @Input() btnText!: string;
  @Input() commentData: Comment | null = null;


  faTimes = faTimes;
  faEdit = faEdit;
  faArrowLeft = faArrowLeft;

  ApiUrl = "http://localhost:3333/";
  moment?: Moment;
  commentForm!: FormGroup;
  isModalOpen = false;

  constructor(
    private momentsService: MomentService, 
    private route: ActivatedRoute,
    private messageService: MessagesService,
    private router: Router,
    private commentService: CommentService,
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.momentsService
      .getItemMoment(id)
      .subscribe((item) => this.moment = item.data);

    this.commentForm = new FormGroup({
      text: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
    });
  }

  get text() {
    return this.commentForm.get('text')!;
  }

  get username() {
    return this.commentForm.get('username')!;
  }

  async removeMoments(id: number) {
    await this.momentsService.remove(id).subscribe();
    this.messageService.add("Momento excluído com sucesso!");

    setTimeout(() => {
      this.router.navigate(['/']).then(() => {
        window.location.reload();
      });
    }, 2000);
  }
  

  async onSubmit(formDirective: FormGroupDirective) {

    if(this.commentForm.invalid) {
      return
    }

    const data: Comment = this.commentForm.value;

    data.momentId = Number(this.moment!.id);

    await this.commentService
  .createComment(data)
  .subscribe((comment) => {
    // Converte o id para número, caso necessário
    const newComment = { 
      ...comment.data, 
      id: Number(comment.data.id) 
    };
    this.moment!.comments!.push(newComment);
  });


    this.messageService.add("Comentário Adicionado!")

    //Reseta o FORM
    this.commentForm.reset();

    formDirective.resetForm();

    // window.location.reload();
  }

  async removeComments(momentId: number, commentId: number) {
    await this.commentService.remove(momentId, commentId).subscribe(() => {
      // Atualize a lista de comentários na interface após a exclusão
      this.moment!.comments = this.moment!.comments!.filter((comment) => comment.id !== commentId);
      this.messageService.add('Comentário excluído com sucesso!');
    });
  }
  
  
  


  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
  

}
