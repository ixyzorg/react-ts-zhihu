import { NavBar } from 'antd-mobile'
const NavBarCustom: React.FC = (props: any) => {
  const back = () => {}
  return <NavBar onBack={back}>{props.children}</NavBar>
}
export default NavBarCustom
