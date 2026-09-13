interface ButtonProps {
    label: string
    onClick?: () => void
}

function Button({ label, onClick }: ButtonProps) {
    return (
        <button
            onClick={onClick}
            className="bg-gray-600 px-4 py-1 font-semibold text-white transition hover:bg-gray-400"
        >
            {label}
        </button>
    )
}

export default Button