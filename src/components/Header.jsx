import { Link } from "react-router-dom"
const Header = () => {
  return (
    <header>
      <Link to={"/"}>
        <img 
        className="p-4 max-w-[150px]"
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" />
      </Link>
    </header>
  )
}

export default Header