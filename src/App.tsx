import RouterView from '@/router'
import store from '@/store'
import { Provider } from 'react-redux'
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <RouterView />
    </Provider>
  )
}
export default App
