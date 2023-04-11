import { useReducer } from 'react'
import { ActionTypes, FromLanguage, InitialStateTypes, Language } from '../types/types'
import { AUTO_LANGUAGE } from '../types/constants'

//1º definimos el initial state del reducer
const initialState: InitialStateTypes = {
    fromLanguage: 'auto',
    toLanguage: 'es',
    fromText: '',
    result: '',
    loading: false
}

//2ºdefinimos el reducer
function reducer(state: InitialStateTypes, action: ActionTypes) {
    //el payload es la informacion que vamos a asignar
    const { type } = action
    //3º
    //vamos a devolver un estado nuevo que switchee el lenguaje de origen con el lenguaje
    //a convertir para realizar la accion de intercambiar lenguajes
    if (type === 'INTERCHANGE_LANGUAGES') {
        //si el lenguaje de origen es auto, no podemos cambiarlo al lenguaje de traductor
        if (state.fromLanguage === AUTO_LANGUAGE) return state
        return {
            ...state,
            fromLanguage: state.toLanguage,
            toLanguage: state.fromLanguage
        }
    }
    //cambia el idioma de origen
    if (type === 'SET_FROM_LANGUAGE') {
        return {
            ...state,
            fromLanguage: action.payload
        }
    }
    //cambia el idioma de destino
    if (type === 'SET_TO_LANGUAGE') {
        return {
            ...state,
            toLanguage: action.payload
        }
    }
    //cambia el texto del input
    //cada vez que este estado cambia el loading del resultado se cambia a true
    if (type === 'SET_FROM_TEXT') {
        return {
            ...state,
            loading: true,
            //cada vez q escribe el usuario queremos que se borre el resultado
            result: '',
            fromText: action.payload
        }
    }
    //cuando se hace display del resultado, el loading se setea a false para mostrar los
    //resultados
    if (type === 'RESULT') {
        return {
            ...state,
            loading: false,
            result: action.payload
        }
    }
    return state
}

export function useStore() {
    //recuperamos todos los initialStates
    const [{
        fromLanguage,
        toLanguage,
        fromText,
        result,
        loading
    }, dispatch] = useReducer(reducer, initialState)

    //haciendo los dispatch aca nos ahorramos de tener dispatch en cada componente,
    //lo cual es buena practica por si cambiamos los reducers el dia de mañana
    const interchangeLanguages = () => {
        dispatch({ type: 'INTERCHANGE_LANGUAGES' })
    }

    const setFromLanguage = (payload: FromLanguage) => {
        dispatch({ type: 'SET_FROM_LANGUAGE', payload })
    }

    const setToLanguage = (payload: Language) => {
        dispatch({ type: 'SET_TO_LANGUAGE', payload })
    }

    const setFromText = (payload: string) => {
        dispatch({ type: 'SET_FROM_TEXT', payload })
    }

    const setResult = (payload: string) => {
        dispatch({ type: 'RESULT', payload })
    }

    //devolvemos los initialStates y su respectiva funcion
    return {
        fromLanguage, setFromLanguage,
        toLanguage, setToLanguage,
        fromText, setFromText,
        result, setResult,
        loading,
        dispatch,
        interchangeLanguages, //no tiene dispatch
    }
}

