import './App.css'
import './components/scss/content.scss'
import {Header} from "./components/Header.tsx";
import {FullScreen, FullScreenHandle, useFullScreenHandle} from "react-full-screen";
import {useState} from "react";
import {MainContent} from "./components/MainContent.tsx";

export function App() {
    const handle: FullScreenHandle = useFullScreenHandle()
    const [full, setFull] = useState<boolean>(false)
    return (
    <>
      <FullScreen
          handle={handle}
          onChange={setFull}
      >
          <div className={"container"}>
              <Header/>
              <MainContent/>
          </div>
      </FullScreen>
    </>
  )
}