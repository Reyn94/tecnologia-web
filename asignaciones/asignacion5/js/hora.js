function mostrarhora()
{
    momentoactual = new Date();
    hora = momentoactual.getHours();
    minuto = momentoactual.getMinutes();
    segundo = momentoactual.getSeconds();

    horaimprimible = hora + ":" + minuto + ":" + segundo;

    document.getElementById('hora').innerHTML = horaimprimible;
}