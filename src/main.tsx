import '@/assets/style/index.scss'
import { createRoot } from 'react-dom/client'
import App from '@/App'
import 'amfe-flexible'

/* 处理最大宽度 */
;(function () {
  const handleMaxWidth = () => {
    const rootElement = document.querySelector('#root') as HTMLElement
    rootElement.style.maxWidth = `${750}px`
    if (window.innerWidth >= 750) {
      document.documentElement.style.fontSize = '75px'
    }
  }
  handleMaxWidth()
  window.addEventListener('resize', handleMaxWidth)
})()

const root = createRoot(document.getElementById('root')!)
root.render(<App />)
