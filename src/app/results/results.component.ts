import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  apiData: any[] = []; // Données reçues de l'API
  filteredData: any[] = []; // Données filtrées par sentiment et nom de chaîne
  uniqueChannels: string[] = []; // Chaînes uniques pour le menu déroulant
  currentPage: number = 1;
  itemsPerPage: number = 20;
  totalPages: number = 0;
  pages: number[] = [];
  selectedSentiment: string = ""; // Sentiment sélectionné pour le filtrage
  selectedChannel: string = ""; // Nom de chaîne sélectionné pour le filtrage

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getApiData().subscribe(
      (data) => {
        this.apiData = data;
        this.uniqueChannels = [...new Set(this.apiData.map(item => item.Data[0]?.VarCharValue))].filter(Boolean);
        this.filterResults();
      },
      (error) => {
        console.error('Erreur lors de la récupération des données', error);
      }
    );
  }

  // Fonction pour appliquer les filtres de sentiment et de chaîne
  filterResults(): void {
    this.filteredData = this.apiData.filter(item => {
      const matchesSentiment = this.selectedSentiment ? item.Data[6]?.VarCharValue === this.selectedSentiment : true;
      const matchesChannel = this.selectedChannel ? item.Data[0]?.VarCharValue === this.selectedChannel : true;
      return matchesSentiment && matchesChannel;
    });
    this.calculatePagination();
  }

  // Fonction pour gérer la pagination
  calculatePagination(): void {
    this.totalPages = Math.ceil(this.filteredData.length / this.itemsPerPage);
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  // Récupération des éléments de la page actuelle
  paginatedData(): any[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.filteredData.slice(start, end);
  }

  // Navigation de page
  goToPage(page: number): void {
    if (page > 0 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
}
