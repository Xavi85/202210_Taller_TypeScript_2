export class Serie {
    id: number;
    name: string;
    channel: string;
    seasons: number;
    descripcion: string;
    linkStreaming: string;
    linkImagen: string;
  
    constructor(id: number, name: string, channel: string, seasons: number, descripcion: string, linkStreaming: string, linkImagen: string) {
      this.id = id;
      this.name = name;
      this.channel = channel;
      this.seasons = seasons;
      this.descripcion = descripcion;
      this.linkStreaming = linkStreaming;
      this.linkImagen = linkImagen;
    }
  }