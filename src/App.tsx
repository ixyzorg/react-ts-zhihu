import RouterView from '@/router'
import { store, persistor } from '@/store'
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux'
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <RouterView />
      </PersistGate>
    </Provider>
  )
}
export default App
