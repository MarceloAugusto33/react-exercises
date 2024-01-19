import './Button.css'

export function Button({ title, style, ...rest }) {
    return (
        <>
            <button {...rest} className={style ? 'verde' : 'vermelho'} >
                {title}
            </button>
        </>

    )
}