const Button = ({title, addStyle, onClick, isDisabled}) => {
    return(
        <button disabled={isDisabled} onClick={onClick} className={`${addStyle} bg-zinc-500 text-white rounded-full hover:bg-gray-900 hover:ease-in-out transition duration-200 disabled:bg-zinc-300`}>{title}</button>
    )
}
export default Button