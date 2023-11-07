import { Hamb, Span } from './Elements'

const MenuIcon = ({ menuOpen, setMenuOpen }) => {
  return (
    <Hamb onClick={() => setMenuOpen(!menuOpen)}>
        <Span isOpen={menuOpen} />
        <Span isOpen={menuOpen} />
        <Span isOpen={menuOpen} />
    </Hamb>
  )
}

export default MenuIcon