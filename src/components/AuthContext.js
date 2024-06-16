import { createContext, useContext, useState, useEffect } from 'react'
import { getUserRole } from '../api/login/callback'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [userRole, setUserRole] = useState(null)

  useEffect(() => {
    const role = getUserRole();
    console.log('Fetched user role:', role);
    setUserRole(role || 0);
  }, [])

  return (
    <AuthContext.Provider value={{ userRole }}>{children}</AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}
