import * as React from 'react';
import {ErrorUtils,FormUtils,TextUtils} from './utils/popUtils'
import {AuthProvider} from './context/AuthContext'
import Home from './components/Home';
import Profile from './components/Profile';
import { Provider } from 'react-redux';
import store from './redux/store';
import HomeReducer from './components/HomeReducer';

function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <div>
          <span className="font-bold text-[12rem] text-red-900">Hekki</span>
          <TextUtils />
          <FormUtils />
          <ErrorUtils />
          <Home />
          <Profile />
          <HomeReducer />
        </div>
      </AuthProvider>
    </Provider>
  )
}

export default App
