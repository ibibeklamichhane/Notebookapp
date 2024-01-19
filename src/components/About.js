import React,{useContext,useEffect} from 'react' ;
import NoteContext from '../context/notes/noteContext'

const About = () => {


  return (
    <div className="container">
    <div className="row">
    <div className="col-lg-8 offset-lg-2">
      <h2 className="text-center mb-4">Welcome to our Notebook App!</h2>
      <p className="text-center">The Notebook App is a powerful and user-friendly note-keeping application that helps you stay organized and efficient. With our app, you can conveniently manage all your important information and thoughts in one place.</p>
      <h4 className="mt-5">Key Features:</h4>
      <ul>
        <li>Signup and Login: Create an account and securely log in to access your personalized notebook.</li>
        <li>Note Management: Easily create, update, and delete notes according to your needs.</li>
        <li>Data Privacy: Each user has exclusive access to their own notes, ensuring utmost privacy and confidentiality.</li>
      </ul>
      <h4 className="mt-5">How to Get Started:</h4>
      <ol>
        <li>Sign Up: Visit our website and create a new account by providing your details.</li>
        <li>Login: Once registered, log in using your credentials to access your personal notebook.</li>
        <li>Create Notes: Start adding notes to your notebook, organizing them by categories or tags for easy retrieval.</li>
        <li>Update or Delete Notes: Edit or remove your notes as required, keeping your information up to date.</li>
      </ol>
      <p className="text-center mt-4">Get started today and experience the convenience and productivity of our Notebook App!</p>
    </div>
  </div>
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