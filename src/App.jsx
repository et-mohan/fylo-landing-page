import Header from "./components/Header"
import MainPage from "./components/Mainpage"
import Details from "./components/Details"
import Testmonial from "./components/Testimonial"
import Footer from "./components/footer"
export default function App(){
  return(<>
      <div class="bg-gray-800 ">
      <Header/>
      <MainPage/>
      <Details/>
      <Testmonial/>
      <Footer/>
      </div>
  </>)
}