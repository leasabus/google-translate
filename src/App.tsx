import React, { useReducer } from 'react'
import { useStore } from './hooks/UseStore'
import { AUTO_LANGUAGE } from './types/constants';
import { FaExchangeAlt } from 'react-icons/fa'
import { LanguageSelector } from './components/LanguageSelector';



export const App = () => {
  const { fromLanguage, setFromLanguage, toLanguage, setToLanguage, interchangeLanguages } = useStore();

  return (
    <>
      <div className='flex flex-row gap-6 items-center justify-center m-auto h-[100vh]'>
        {/*5º mediante una funcion aplicamos el dispach pasandole la action y el payload */}
        <div className='flex flex-col'>
          <LanguageSelector
            type='from'
            value={fromLanguage}
            onChange={setFromLanguage} />
          {fromLanguage}
        </div>

        <div onClick={interchangeLanguages} >
          <button className='text-slate-500'><FaExchangeAlt size={18} /></button>
        </div>

        <div className='flex flex-col'>
          <LanguageSelector
            type='to'
            value={toLanguage}
            onChange={setToLanguage} />
          <span>{toLanguage}</span>
        </div>
      </div>
    </>
  )
}


export default App
