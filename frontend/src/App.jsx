// import HelloWorld from './HelloWorld'
import Main from './components/Main'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import MainHome from './components/MainHome'
import Category from './components/pages/Category'
import Action from './components/pages/genres/Action'
import Adventure from './components/pages/genres/Adventure'
import Childrens from './components/pages/genres/Childrens'
import Comedy from './components/pages/genres/Comedy'
import Drama from './components/pages/genres/Drama'
import Fantasy from './components/pages/genres/Fantasy'
import Fairy from './components/pages/genres/Fairy'
import Historical from './components/pages/genres/Historical'
import Horror from './components/pages/genres/Horror'
import Life from './components/pages/genres/Life'
import Magical from './components/pages/genres/Magical'
import Mystery from './components/pages/genres/Mystery'
import Mythology from './components/pages/genres/Mythology'
import Novel from './components/pages/genres/Novel'
import Romance from './components/pages/genres/Romance'
import Sciencefiction from './components/pages/genres/Sciencefiction'
import Shortstory from './components/pages/genres/Shortstory'
import Supernatural from './components/pages/genres/Supernatural'
import Thriller from './components/pages/genres/Thriller'
import Timetravel from './components/pages/genres/Timetravel'
import Maincontact from './components/pages/Maincontact'
import Write from './components/pages/Write'


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/Home' element={<MainHome />} />
          <Route path='/Category' element={<Category />} />
          <Route path='/Genres/Action' element={<Action />} />
          <Route path='/Genres/Adventure' element={<Adventure />} />
          <Route path='/Genres/Childrens' element={<Childrens />} />
          <Route path='/Genres/Comedy' element={<Comedy />} />
          <Route path='/Genres/Drama' element={<Drama />} />
          <Route path='/Genres/Fantasy' element={<Fantasy />} />
          <Route path='/Genres/Fairy' element={<Fairy />} />
          <Route path='/Genres/Historical' element={<Historical />} />
          <Route path='/Genres/Horror' element={<Horror />} />
          <Route path='/Genres/Life' element={<Life />} />
          <Route path='/Genres/Magical' element={<Magical />} />
          <Route path='/Genres/Mystery' element={<Mystery />} />
          <Route path='/Genres/Mythology' element={<Mythology />} />
          <Route path='/Genres/Novel' element={<Novel />} />
          <Route path='/Genres/Romance' element={<Romance />} />
          <Route path='/Genres/Sciencefiction' element={<Sciencefiction />} />
          <Route path='/Genres/Shortstory' element={<Shortstory />} />
          <Route path='/Genres/Supernatural' element={<Supernatural />} />
          <Route path='/Genres/Thriller' element={<Thriller />} />
          <Route path='/Genres/Timetravel' element={<Timetravel />} />
          <Route path='/Contact' element={<Maincontact />} />
          <Route path='/Write' element={<Write />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
