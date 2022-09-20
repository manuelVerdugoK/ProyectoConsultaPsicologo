const fecha = new Date();
const mes = fecha.getMonth()+1;

if(mes<10){
    const hoy = fecha.getFullYear()+"-"+0+mes+"-"+fecha.getDate();
    fechaCalendario(hoy);
}else{
    fechaCalendario(hoy);
}

function fechaCalendario(fecha){
    var dateControl_fecha = document.querySelector('input[type="date"]');
    dateControl_fecha.value = fecha; 
    dateControl_fecha.min = fecha;

    var dateControl_hora = document.querySelector('input[type="time"]');
    dateControl_hora.min="10:00";
    dateControl_hora.max="18:00";
    dateControl_hora.value="12:00";
}