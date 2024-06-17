const parse = (value) => {
  try {
    return JSON.parse(value)
  } catch (_err) {
    return null
  }
}

export const getItem = (key) => {
  const data = localStorage.getItem(key)
  if (data) {
    return parse(data)
  }
  return null
}

export const setItem = (key, value) => {
  return localStorage.setItem(key, JSON.stringify(value))
}

export const removeItem = (key) => {
  return localStorage.removeItem(key)
}

export const initLocalStorage = () => {
  if (!getItem('sidebar-expanded')) {
    setItem('sidebar-expanded', true)
  }
  if (!getItem('loggedIn')) {
    setItem('loggedIn', false)
  }
}

