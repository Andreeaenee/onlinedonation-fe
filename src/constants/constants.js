export const MOBILE_BREAKPOINT = '(max-width: 768px)'
export const MaxCharactersModalDescription = 400

export const USER_ROLES = {
  GUEST: 0,
  ONG: 1,
  RESTAURANT: 2,
  ADMIN: 3,
}

export const RESTAURANT_PERMISSION = 'restaurant-permission'
export const ONG_PERMISSION = 'ong-permission'

export const PERMISSIONS = {
  ADMIN: [RESTAURANT_PERMISSION, ONG_PERMISSION],
  RESTAURANT: [RESTAURANT_PERMISSION],
  ONG: [ONG_PERMISSION],
  GUEST: [],
}
