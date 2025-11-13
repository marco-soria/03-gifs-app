import { Component, inject, signal } from '@angular/core';
import { GifService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gif.interface';
import { GifListComponent } from '../../components/gif-list/gif-list';

@Component({
  selector: 'app-search',
  imports: [GifListComponent],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class SearchComponent {
  gifService = inject(GifService);
  gifs = signal<Gif[]>([]);

  onSearch(query: string) {
    this.gifService.searchGifs(query).subscribe((resp) => {
      this.gifs.set(resp);
    });
  }
}
