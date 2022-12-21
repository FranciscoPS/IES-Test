import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AlertsService {
  constructor() {}

  successNotification(text: string): void {
    Swal.fire({
      icon: 'success',
      title: 'Good Job!',
      text: text,
    });
  }

  errorNotification(text: string): void {
    Swal.fire({
      icon: 'error',
      title: 'Oops',
      text: text,
    });
  }
}
