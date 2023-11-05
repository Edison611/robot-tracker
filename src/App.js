import {Route, Routes} from 'react-router-dom'
import "./App.css"
import Tracker from './pages/postrack/tracker.js'
import PathRecord from './pages/postrack/pathRecord'
import Home from './pages/home'
import Scouting from './pages/scouting'
import Vexvia from './pages/vexvia'
import EventHome from './pages/vexvia/eventHome'
import Matches from './pages/vexvia/matches'
import Skills from './pages/vexvia/skills'
import CodeGenerator from './pages/postrack/codeGenerator'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tracker" element={<Tracker />} />
        <Route path="/path-record" element={<PathRecord />} />
        <Route path="/code-generator" element={<CodeGenerator />} />
        <Route path="/scouting" element={<Scouting />} />
        <Route path="/vexvia" element={<Vexvia />} />
        <Route path="/vexvia/:event_id" element={<EventHome />} />
        <Route path="/vexvia/:event_id/skills" element={<Skills />} />
        <Route path="/vexvia/:event_id/division/:division_id/matches" element={<Matches />} />
      </Routes>
    </div>
  )
 
}
export default App;
