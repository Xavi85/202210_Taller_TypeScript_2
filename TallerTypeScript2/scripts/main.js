import { data } from './data.js';
var seriesTbody = document.getElementById('series');
var avgSeasonsElm = document.getElementById("avgSeason");
renderSeriesInTable(data);
avgSeasonsElm.innerHTML = "".concat(getAvgSeasons(data));
function cargarSerie(ev) {
    var cualSerie = this.getAttribute("data-cualSerie");
    if (cualSerie == null)
        return;
    var cual = parseInt(cualSerie);
    console.log("cargando serie " + cual);
    var foto = document.getElementById('foto');
    var titulo = document.getElementById('titulo');
    var descripcion = document.getElementById('descripcion');
    var link = document.getElementById('link');
    foto.src = data[cual].linkImagen;
    titulo.innerHTML = data[cual].name;
    descripcion.innerHTML = data[cual].descripcion;
    link.innerHTML = data[cual].linkStreaming;
    link.setAttribute('href', data[cual].linkStreaming);
}
function renderSeriesInTable(series) {
    var index = 0;
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td><b>".concat(serie.id, "</b></td>\n                           <td data-cualSerie=\"").concat(index, "\"><a href=\"#\">").concat(serie.name, "</a></td>\n                           <td>").concat(serie.channel, "</td>\n                           <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
        var cell = trElement.cells[1];
        cell.addEventListener("click", cargarSerie);
        index++;
    });
}
function getAvgSeasons(series) {
    var avgSeasons = 0;
    series.forEach(function (serie) { return avgSeasons += serie.seasons; });
    return (avgSeasons / series.length);
}
