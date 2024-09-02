import {
  DashboardIcon,
  DonationPostIcon,
  ProfileIcon,
  UsersIcon,
} from '../../assets/icons'

export const SidebarButtons = (t) => [
  {
    name: t('dashboardPage'),
    icon: <DashboardIcon width={'25px'} height={'25px'} />,
    path: '/dashboard',
    role: [1, 2, 3],
  },
  {
    name: t('donations'),
    icon: <DonationPostIcon width={'25px'} height={'25px'} />,
    path: '/dashboard/donations',
    role: [1, 2, 3],
  },
  {
    name: t('users'),
    icon: <UsersIcon width={'25px'} height={'25px'} />,
    path: '/dashboard/users',
    role: [3],
  },
  {
    name: t('userProfile'),
    icon: <ProfileIcon width={'25px'} height={'25px'} />,
    path: '/dashboard/user-profile',
    role: [1, 2, 3],
  },
]

export const UsersHeaders = ['Id', 'Name', 'Email', 'Phone', 'Type']

export const calculateTotalDonations = (donations) => {
  let total = 0
  donations.forEach((donation) => {
    total += donation.value
  })
  return total
}
