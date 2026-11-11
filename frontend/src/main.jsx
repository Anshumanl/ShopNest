
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { AuthProvider } from './Context/AuthContext.jsx';
import './Styles/Global.css';
import { Provider } from 'react-redux';
import store from './Redux/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <AuthProvider>
            <App />
        </AuthProvider>
    </Provider>
);
