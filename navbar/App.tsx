import * as React from 'react'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import HomeIcon from '@mui/icons-material/Home'
import BarChartIcon from '@mui/icons-material/BarChart'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'
import HandshakeIcon from '@mui/icons-material/Handshake'
import PeopleIcon from '@mui/icons-material/People'


export default function IconOnlyBottomNavigation() {
  const [value, setValue] = React.useState('home')

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <BottomNavigation
      sx={{ width: 500 }}
      value={value}
      onChange={handleChange}
      showLabels={false} // This hides all labels, resulting in icon-only navigation
    >
      <BottomNavigationAction
        label="Home"
        value="home"
        icon={<HomeIcon />}
      />
      <BottomNavigationAction
        label="Statistics"
        value="stats"
        icon={<BarChartIcon />}
      />
      <BottomNavigationAction
        label="Games"
        value="games"
        icon={<SportsEsportsIcon />}
      />
      <BottomNavigationAction
        label="Sponsor"
        value="sponser"
        icon={<HandshakeIcon />}
      />
      <BottomNavigationAction 
        label="Social Media" 
        value="social-media" 
        icon={<PeopleIcon />} 
      />
    </BottomNavigation>
  )
}