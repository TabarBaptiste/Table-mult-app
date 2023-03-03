import { Component } from '@angular/core';
import { IpService } from '../../service/ip.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private ipService:IpService){}

  // Initialisation des variables
  title = 'Table de multiplication';
  ipAddress: string | null = null;
  currentTime: string | null = null;

  // Au chargement de la page, récupérer l'adresse IP et régler l'heure courante
  ngOnInit() {
    this.getIP();
    this.setCurrentTime();
  }

  // Récupérer l'adresse IP de l'utilisateur
  getIP() {
    this.ipService.getIPAddress().subscribe((res:any)=>{
      this.ipAddress=res.ip;
    });
  }

  // Régler l'heure courante en temps réel
  setCurrentTime() {
    setInterval(() => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      const formattedTime = `${hours}:${minutes}:${seconds}`;
      this.currentTime = formattedTime;
    }, 1000);
  }
}
