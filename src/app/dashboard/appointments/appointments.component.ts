import { Component, OnInit } from '@angular/core';
import { AppointmentService } from './core/appointment.service';

declare var UIkit: any;

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

  loading = false;
  constructor(private appointments: AppointmentService) { }

  ngOnInit(): void {
    this.appointments.fetchAppointments().subscribe((resp:any) => {
      console.log(resp)
    })
  }

  createAppointment(){
    UIkit.modal('#create-appointment').show();
  }

  respondToAppointment(){
    UIkit.modal('#respond-appointment').show();
  }
}
