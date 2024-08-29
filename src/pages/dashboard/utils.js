import {
  DashboardIcon,
  DonationPostIcon,
  ProfileIcon,
  UsersIcon,
} from '../../assets/icons'

export const SidebarButtons = [
  {
    name: 'Dashboard',
    icon: <DashboardIcon width={'25px'} height={'25px'} />,
    path: '/dashboard',
    role: [1, 2, 3],
  },
  {
    name: 'Donations',
    icon: <DonationPostIcon width={'25px'} height={'25px'} />,
    path: '/dashboard/donations',
    role: [1, 2, 3],
  },
  {
    name: 'Users',
    icon: <UsersIcon width={'25px'} height={'25px'} />,
    path: '/dashboard/users',
    role: [3],
  },
  {
    name: 'User Profile',
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
