import { AuthProvider } from './Providers/authProvider'
import UserProfile from './Components/userProfile'
import './App.css'


function App() {


  return (
    <>
      <AuthProvider>
      <div>
        <h1>Sistema de Autenticacion</h1>
        <UserProfile />
      </div>
    </AuthProvider>
    </>
  )
}

export default App
