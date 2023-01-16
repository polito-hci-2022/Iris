import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from "react";
import { Routes, Route, Outlet, Link, useNavigate } from "react-router-dom";
import Home from './pages/Menu/Home'
import PlayMenu from "./pages/Menu/PlayMenu";
import StudyMenu from "./pages/Menu/StudyMenu";
import Translate from "./pages/Translate/Translate";
import ResultTranslate from "./pages/Translate/ResultTranslate"
import CastleStory1 from "./pages/CastleStory/CastleStory1";
import CastleStory2 from "./pages/CastleStory/CastleStory2";
import CastleStory3 from "./pages/CastleStory/CastleStory3";
import CastleStory4 from "./pages/CastleStory/CastleStory4";
import CastleStory5 from "./pages/CastleStory/CastleStory5";
import CastleHelp1 from "./pages/CastleStory/CastleHelp1";
import CastleHelp2 from "./pages/CastleStory/CastleHelp2";
import CastleHelp3 from "./pages/CastleStory/CastleHelp3";
import CastleHelp4 from "./pages/CastleStory/CastleHelp4";
import CastleHelp5 from "./pages/CastleStory/CastleHelp5";
import TestDisclaimer from "./pages/Test/TestDisclaimer";
import CastleTest from "./pages/Test/CastleTest";
import TestReview from "./pages/Test/TestReview";
import Memory from "./pages/Memory/Memory";
import TutorialMemory from "./pages/Memory/TutorialMemory";
import TutorialMemoryChoice from "./pages/Memory/TutorialMemoryChoice";
import Exercise from "./pages/Exercise/Exercise"
import API from './API'
 

export default function App() {
  const navigate = useNavigate();
  
  const [memory, setMemory] = React.useState(0);
  const [test, setTest] = React.useState();
  const [page, setPage] = React.useState();

  React.useEffect(() => {
    const checkMemory = async () => {
      let row = await API.getMemory();
      setMemory(row[0].memory)
      console.log(row);
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
          <Route path="/play" element={<PlayMenu navigation={navigate} />} />
          <Route path="/studytime" element={<StudyMenu />} />
          <Route path="/translate" element={<Translate />} />
          <Route path="/resultTranslate" element={<ResultTranslate />} />
          <Route path="/CastleStory1" element={<CastleStory1 />} />
          <Route path="/CastleStory2" element={<CastleStory2 />} />
          <Route path="/CastleStory3" element={<CastleStory3 />} />
          <Route path="/CastleStory4" element={<CastleStory4 />} />
          <Route path="/CastleStory5" element={<CastleStory5 />} />
          <Route path="/CastleHelp1" element={<CastleHelp1 />}/>
          <Route path="/CastleHelp2" element={<CastleHelp2 />}/>
          <Route path="/CastleHelp3" element={<CastleHelp3 />}/>
          <Route path="/CastleHelp4" element={<CastleHelp4 />}/>
          <Route path="/CastleHelp5" element={<CastleHelp5 />}/>
          <Route path="/testDisclaimer" element={<TestDisclaimer />}/>
          <Route path="/castleTest" element={<CastleTest />}/>
          <Route path="/testReview" element={<TestReview />}/>
          <Route path="/memory" element={<Memory setMemory={setMemory} memory={memory}/>} />
          <Route path="/tutorialMemory" element={<TutorialMemory setMemory={setMemory} memory={memory}/>} />
          <Route path="/tutorialMemoryChoice" element={<TutorialMemoryChoice memory={memory} />} />
          <Route path="/backpack" element={<Exercise />}/>
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
