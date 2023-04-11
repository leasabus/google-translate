import { SUPPORTED_LANGUAGES } from "../types/constants"
import { FromLanguage, Language } from "../types/types"

type Props =
    | { type: 'from', value: FromLanguage, onChange: (language: FromLanguage) => void }
    | { type: 'to', value: Language, onChange: (language: Language) => void }


export const LanguageSelector: React.FC<Props> = ({ onChange, value, type }) => {

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(event.target.value as Language)
        //forzamos a que el evento sea tratado como un string dentro de los lenguajes
    }

    return (
        <form>
            <select aria-label="Selecciona el idioma" onChange={handleChange} value={value}>
                {/* Como no es un array, no podemos hacer el map directo, tenemos
                q acceder a las propiedades del objeto */}
                {
                    Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
                        <option key={key} value={key}>{literal}</option>
                    ))
                }
            </select>

        </form>
    )
}