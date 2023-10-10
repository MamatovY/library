const Loader = ({ className }) => {

    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className + ' mx-auto'} viewBox="0 0 64 64">
            <circle cx="32" cy="32" r="25" fill="none" stroke="#fff" strokeWidth="4">
                <animate attributeName="stroke-dashoffset" dur="2s" repeatCount="indefinite" from="0" to="502" />
                <animate attributeName="stroke-dasharray" dur="2s" repeatCount="indefinite" values="150.6 100.4; 1 250; 150.6 100.4" />
            </circle>
        </svg>
    )


}

export default Loader