function inyeccion_error(){
    Swal.fire({
        title: "Error de carga",
        text: "Pagina en mantenimiento, intente mas tarde",
        icon: "warning",
        theme: 'dark'
    });
}

function ubicacion_error(){
    Swal.fire({
        title: "Error 404",
        text: "Ubicacion no encontrada, en caso de seguir fallando debera ser reportado bajo el codigo E-217",
        icon: "error",
        theme: 'dark'
    });
}