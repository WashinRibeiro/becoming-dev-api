import './App.css';
import { Header } from './components/Header'
import { CardInfo } from './components/CardInfo'

export const App = () => {

  return (
    <div>
      <Header />
      <main>
        <CardInfo />
        <CardInfo />
        <CardInfo />
        <CardInfo />
        <CardInfo />
        <CardInfo />
      </main>
    </div>
  )
}