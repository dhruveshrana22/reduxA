/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/es/integration/react';
import App from './App';


// const ReduxApp = () => {
//     <Provider store={store}>
//         <PersistGate loading={null} persistor={persistor}>
//             <App />
//         </PersistGate>
//     </Provider>

// }

AppRegistry.registerComponent(appName, () => App);
