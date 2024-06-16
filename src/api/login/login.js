export function loginWithGoogle() {
  const RESPONSE_TYPE = 'code'
  const SCOPE = 'email profile openid'

  const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${encodeURIComponent(
    process.env.REACT_APP_GOOGLE_CLIENT_ID
  )}&redirect_uri=${encodeURIComponent(
    process.env.REACT_APP_REDIRECT_URI
  )}&response_type=${RESPONSE_TYPE}&scope=${encodeURIComponent(SCOPE)}`
  window.location.href = authUrl
}
