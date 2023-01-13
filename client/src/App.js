import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from './pages/Menu/Home'
import PlayMenu from "./pages/Menu/PlayMenu";
import StudyMenu from "./pages/Menu/StudyMenu";
import Translate from "./pages/Translate/Translate";
import ResultTranslate from "./pages/Translate/ResultTranslate"
import Memory from "./pages/Memory/Memory";
import TutorialMemoryChoice from "./pages/Memory/TutorialMemoryChoice";
import 'bootstrap/dist/css/bootstrap.min.css';

import API from './API'

export default function App() {

  const [memory, setMemory] = React.useState();
  const [test, setTest] = React.useState();
  const [page, setPage] = React.useState();

  React.useEffect(() => {
    const checkMemory = async () => {
      let row = await API.getMemory();
      setMemory(row[0].memory)
    }
    checkMemory()
  })

  
  React.useEffect(() => {
    const checkPage = async () => {
      let row = await API.getPageCastleStory();
      setPage(row[0].pageCastleStory)
    }
    checkPage()
  })

  
  React.useEffect(() => {
    const checkTest = async () => {
      let row = await API.getTest();
      setTest(row[0].test)
    }
    checkTest()
  })


  return (
    <div>
      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path="/" >
          <Route index element={<Home />} />
          <Route path="/play" element={<PlayMenu />} />
          <Route path="/studytime" element={<StudyMenu />} />
          <Route path="/translate" element={<Translate />} />
          <Route path="/resultTranslate" element={<ResultTranslate />} />
          <Route path="/memory" element={<Memory />} />
          
          <Route path="/tutorialMemoryChoice" element={<TutorialMemoryChoice memory={memory}/>} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}



function About() {
  return (
    <div>
      <h2>About</h2>

    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>

    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}