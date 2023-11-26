import { BrowserRouter, Routes ,Route} from "react-router-dom"
import MainPage from "./pages/MainPage"
import DetailPage from "./pages/DetailPage"
import Header from "./components/Header"
import ResultsPage from "./pages/ResultsPage"


export default function App() {



  return (
<div className=" w-screen  h-screen">
<BrowserRouter>
<Header />
<Routes>
  <Route path="/" element={<MainPage />}/>
  <Route path="/detail/:id" element={<DetailPage />}/>
  <Route path="/results" element={<ResultsPage />}/>
</Routes>
</BrowserRouter>
</div>
  )
}