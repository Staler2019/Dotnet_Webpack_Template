const globalAny: any = global;

import '@popperjs/core';
import jQuery from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

globalAny.$ = globalAny.jQuery = jQuery;

globalAny.bootstrap = require('bootstrap');

// Custom CSS imports
import '../scss/site.scss';
