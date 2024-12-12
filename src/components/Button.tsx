interface ButtonProps {
    onClick: () => void
    text: string
}

const Button = ({onClick, text}: ButtonProps) => {
    return (
        <button onClick={onClick} className='bg-blue-500 w-max text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all'>{text}</button>
    )
}

export default Button;