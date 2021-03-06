/*
 * Angularjs forcefully adds a window.angular object (as of 1.6.x)
 * so the expose-loader doesn't really matter.
 * However, in the future it may not - it may only 'export' the angular object
 * expose-loader?angular will take the exported object and put it as 'angular' in the global namespace
 * import ng will mean it's also a local variable 'ng'
 */
import ng from 'expose-loader?angular!angular';

import './styles/reset.css';
import './styles/app.css';

import ngapp from './ngapp/ngappmodule.js';
import {delayCompileDirective}  from './ngapp/ngroute-definitions.js';
