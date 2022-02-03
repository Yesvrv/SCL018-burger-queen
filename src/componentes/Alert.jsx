import { ContextProducts } from "../App";
import { useContext } from "react";
import Swal from 'sweetalert2'

const Alert = () => {
    const globalContext = useContext(ContextProducts);
    const changeStatus = globalContext.changeStatus;

    Swal.fire({
        text: '¿Seguro de enviar a cocina?',
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonText: 'Sí',
        cancelButtonText: 'No',
        confirmButtonColor: '#03989E',
        cancelButtonColor: '#AD4848',
        allowOutsideClick: false,
    }).then((result) => {

        if (result.isConfirmed) {
            changeStatus();
            Swal.fire(
                'Se ha enviado a cocina'
            )
        }
        else if (result.dismiss) {
            Swal.fire(
                'Cancelled',
                'Cancelado'
            )
        }
    })

}


export default Alert;