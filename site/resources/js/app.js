require('./bootstrap');

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

// const Swal = require('sweetalert2')
// import Swal from "sweetalert2/dist/sweetalert2.js";
import Swal from 'sweetalert2'

window.Swal = Swal;

console.log(window.Swal);
