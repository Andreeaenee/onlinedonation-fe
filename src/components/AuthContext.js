import { createContext, useContext, useState, useEffect } from 'react'
import { getUserRole } from '../api/login/utils'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [userRole, setUserRole] = useState(null)

  useEffect(() => {
    const role = getUserRole();
    setUserRole(role || 0);
  }, [])

  return (
    <AuthContext.Provider value={{ userRole }}>{children}</AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}
