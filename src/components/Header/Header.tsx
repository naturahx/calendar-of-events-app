import { FC } from "react"
import styles from './Header.module.css'

interface HeaderProps {
  value: string
}

const Header:FC<HeaderProps> = ({value}) => {
  return (
    <header className="header">
      <div className="user">{value}</div>
      <button>Out to account</button>
  </header>
  )
}

export default Header