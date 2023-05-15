import { observer } from 'mobx-react-lite'
import { Login } from './pages/Login'
import { MainPage } from './pages/Main'
import { store } from './store'

export const App = observer(() =>
  store.logged_in === false ?
    <Login /> : <MainPage />
)