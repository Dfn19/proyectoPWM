import { Injectable } from '@angular/core';
import {ContactForm} from '../components/modelos/contactForm';
import { Observable ,  of } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';



@Injectable({
  providedIn: 'root'
})
export class SendEmailService {
  type:any;
  constructor( private http: HttpClient) { }
  getResponseEmail(_body: ContactForm): Observable <any>{
    return this.http.post('/send.php',_body);
  }

}
