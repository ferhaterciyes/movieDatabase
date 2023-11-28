import { BrowserRouter, Routes ,Route} from "react-router-dom"
import MainPage from "./pages/MainPage"
import DetailPage from "./pages/DetailPage"
import Header from "./components/Header"
import ResultsPage from "./pages/ResultsPage"
import SearchForm from "./components/SearchForm"


export default function App() {



  return (
<div className=" w-screen  h-screen">
<BrowserRouter>
<SearchForm />
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