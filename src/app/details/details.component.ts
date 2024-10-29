import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  channelName: string = '';
  videoId: string = '';
  title: string = '';
  videoLink: string = '';
  transcription: string = '';
  sentiment: string = '';
  sentimentScore: number = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Récupérer les paramètres de la route (s'il y a un ID vidéo par exemple)
    this.route.params.subscribe(params => {
      this.videoId = params['id']; // Supposons que l'ID de la vidéo est passé en paramètre
      this.fetchVideoDetails(this.videoId); // Appeler une méthode pour récupérer les détails
    });
  }

  fetchVideoDetails(id: string) {
    // Simuler une récupération de données - remplacer par une requête réelle
    this.channelName = 'ExampleChannel1';
    this.title = 'Vidéo A';
    this.videoLink = 'https://www.youtube.com/watch?v=' + id;
    this.transcription = 'Longue transcription...';
    this.sentiment = 'Positif';
    this.sentimentScore = 85;
  }
}
