'use strict';

// import { Dispatcher } from 'flux';
// export default new Dispatcher();

import {Dispatcher} from 'flux';

const instance = new Dispatcher();
export default instance;

console.log('export dispatch');
// So we can conveniently do, `import {dispatch} from './TodoDispatcher';`
export const dispatch = instance.dispatch.bind(instance);
