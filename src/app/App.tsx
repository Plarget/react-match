import {withProviders} from "./providers";
import MainPage from "@/pages/MainPage";
import './styles'

const App = () => {
  return (
    <main className="main">
      <MainPage/>
    </main>
  )
}

export default withProviders(App)
