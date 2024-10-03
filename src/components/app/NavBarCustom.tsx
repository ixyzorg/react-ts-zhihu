import { NavBar } from 'antd-mobile'
const NavBarCustom: React.FC<any> = (props) => {
  const back = () => {}
  return <NavBar onBack={back}>{props.children}</NavBar>
}
export default NavBarCustom
