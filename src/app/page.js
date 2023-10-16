import Header from './componente/header/header'
import Banner from './componente/start-banner/start-banner'
import ProfileContainer from './componente/profile_container/profile_container'
import DesignLines from './componente/design_lines/design_lines'

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <DesignLines />
      <ProfileContainer/>
    </>
  )
}
