import {Link} from 'react-router-dom'

function Navbar(){

    const navbarStyle = ["bg-teal-600", "text-left",
    "text-3xl", "p-4", "text-white", "font-extrabold"
    ]

    return(
        <header className={navbarStyle.join(" ")}>
            <Link to="/" >To-Dooo</Link>
        </header>
    )

}

export default Navbar