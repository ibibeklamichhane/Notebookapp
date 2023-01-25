import React,{useContext,useEffect} from 'react' ;
import NoteContext from '../context/notes/noteContext'

const About = () => {
  const a = useContext(NoteContext)
  useEffect(() => {
    a.update();

  },[])

  return (
    <div>
      This is About {a.state.name} and class {a.state.class}
    </div>
  )
}

export default About






//<Routes>
//  <Route path="/" element={<App />}>
//    <Route index element={<Home />} />
//    <Route path="teams" element={<Teams />}>
//      <Route path=":teamId" element={<Team />} />
//      <Route path=":teamId/edit" element={<EditTeam />} />
//      <Route path="new" element={<NewTeamForm />} />
//      <Route index element={<LeagueStandings />} />