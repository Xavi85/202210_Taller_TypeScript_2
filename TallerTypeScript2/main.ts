import { Serie } from './serie.js';

import { data } from './data.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
const avgSeasonsElm: HTMLElement = document.getElementById("avgSeason")!;

renderSeriesInTable(data);
avgSeasonsElm.innerHTML = `${getAvgSeasons(data)}`

function cargarSerie(this: HTMLElement, ev: MouseEvent) {
  var cualSerie = this.getAttribute("data-cualSerie");
  if (cualSerie == null) return;
  var cual: number = parseInt(cualSerie);
  console.log("cargando serie " + cual);

  let foto: HTMLImageElement = document.getElementById('foto')! as HTMLImageElement;
  let titulo: HTMLElement = document.getElementById('titulo')!;
  let descripcion: HTMLElement = document.getElementById('descripcion')!;
  let link: HTMLElement = document.getElementById('link')!;

  foto.src = data[cual].linkImagen;
  titulo.innerHTML = data[cual].name;
  descripcion.innerHTML = data[cual].descripcion;
  link.innerHTML = data[cual].linkStreaming;
  link.setAttribute('href', data[cual].linkStreaming);
}

function renderSeriesInTable(series: Serie[]): void {
  var index = 0;
  series.forEach((serie) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td><b>${serie.id}</b></td>
                           <td data-cualSerie="${index}"><a href="#">${serie.name}</a></td>
                           <td>${serie.channel}</td>
                           <td>${serie.seasons}</td>`;
    seriesTbody.appendChild(trElement);
    let cell : HTMLElement = trElement.cells[1];
    cell.addEventListener("click", cargarSerie);                           
    index++;
  });
}

function getAvgSeasons(series: Serie[]): number {
  let avgSeasons: number = 0;
  series.forEach((serie) => avgSeasons += serie.seasons);
  return (avgSeasons/series.length);
}