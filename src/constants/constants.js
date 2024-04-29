export const MOBILE_BREAKPOINT = '(max-width: 768px)'
export const MaxCharactersModalDescription = 400

export const USER_ROLES = {
  ADMIN: 'Admin',
  RESTAURANT: 'Restaurant',
  ONG: 'Ong',
}

export const RESTAURANT_PERMISSION = 'restaurant-permission'
export const ONG_PERMISSION = 'ong-permission'

export const PERMISSIONS = {
  ADMIN: [RESTAURANT_PERMISSION, ONG_PERMISSION],
  RESTAURANT: [RESTAURANT_PERMISSION],
  ONG: [ONG_PERMISSION],
}
