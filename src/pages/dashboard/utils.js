import {
  DashboardIcon,
  DonationPostIcon,
  ProfileIcon,
} from '../../assets/icons'

export const SidebarButtons = [
  {
    name: 'Dashboard',
    icon: <DashboardIcon width={'25px'} height={'25px'} />,
    path: '/dashboard',
  },
  {
    name: 'Donations',
    icon: <DonationPostIcon width={'25px'} height={'25px'} />,
    path: '/dashboard/donations',
  },
  {
    name: 'User Profile',
    icon: <ProfileIcon width={'25px'} height={'25px'} />,
    path: '/dashboard/user-profile',
  },
]
