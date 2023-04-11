import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from "./constants"
//Le decimos que queremos acceder al tipo supported lengauges recuperando las keys
export type Language = keyof typeof SUPPORTED_LANGUAGES;
export type AutoLanguage = typeof AUTO_LANGUAGE;

//Como en el translate podemos elegir idioma o que lo detecte automaticamente hacemos un
//or para detectar ambas situaciones del usuario
export type FromLanguage = Language | AutoLanguage;

export interface InitialStateTypes {
    fromLanguage: FromLanguage
    toLanguage: Language
    fromText: string
    result: string
    loading: boolean
}
//Como tipar las actions
export type ActionTypes =
    | { type: 'INTERCHANGE_LANGUAGES' }
    | { type: 'SET_FROM_LANGUAGE', payload: FromLanguage }
    | { type: 'SET_TO_LANGUAGE', payload: Language }
    | { type: 'SET_FROM_TEXT', payload: string }
    | { type: 'RESULT', payload: string }
