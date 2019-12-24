
import React              from 'react'                         ;
import * as serviceWorker from './serviceWorker'               ;
import store              from './components/redux/redux-store';
import ReactDOM           from 'react-dom'                     ;
import                         './index.css'                   ;
import App                from './App'                         ;
import  { Provider }      from 'react-redux'                   ;



// let rerenderEntireTree = (state) => {
ReactDOM.render(
<Provider store={store}>
 <App/>
</Provider>,
document.getElementById('root'));
// }


// // rerenderEntireTree(store.getState());
// rerenderEntireTree();

// store.subscribe( () => {
//     let state = store.getState();
//     rerenderEntireTree(state)
// });

serviceWorker.unregister();
