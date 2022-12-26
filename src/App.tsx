import "./App.css"
import { Header } from "./components/Header"
import { ItemCard } from "./components/ItemCard.tsx"
import { mockItemCards } from "./components/ItemCard.tsx/mockItemCards"
import { Sidebar } from "./components/Sidebar"
import { MobileDropList } from "./components/Sidebar/MobileDropList"
import { useBreakpoints } from "./hooks/useWindowSize"
import RefreshIcon from "./assets/icon_refresh.png"

function App() {
  const sm = useBreakpoints("sm")

  return (
    <div className="root-container">
      <Header />
      <div
        className={
          sm
            ? "main-content-container-mobile"
            : "main-content-container-desktop"
        }
      >
        <Sidebar />

        <div className="container-root">
          {sm && <MobileDropList />}
          <div className="container">
            {mockItemCards.map((item) => {
              return <ItemCard item={item} />
            })}
          </div>
        </div>
      </div>
      <div className="more-programmes-wrapper">
        <div className="more-programmes">MORE PROGRAMMES</div>
        <img src={RefreshIcon} alt="refresh-icon" />
      </div>
    </div>
  )
}

export default App
