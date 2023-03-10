import './bootstrap';

// Import custom scss file
import '~resources/scss/app.scss';

//import bootstrap js scripts
import * as bootstrap from 'bootstrap';

// for vite and blade to use correctly assets   
import.meta.glob([
    '../img/**'
]);