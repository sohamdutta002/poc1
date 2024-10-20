import * as React from 'react';
import {ErrorUtils,FormUtils,TextUtils} from './utils/popUtils'


function App() {
  return (
    <>
      <div>
        <span className="font-bold text-[12rem] text-red-900">Hekki</span>
        <TextUtils />
        <FormUtils />
        <ErrorUtils />
      </div>
    </>
  )
}

export default App
