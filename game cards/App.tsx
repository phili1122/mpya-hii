import React from 'react'
import Box from '@mui/material/Box'
import { GameCard } from './components/game-card'

export default function App() {
  return (
    // Tailwind classes for setting up the full-screen dark background and centering the content
    <Box className="min-h-screen flex items-center justify-center p-4 bg-gray-950">
      <GameCard />
    </Box>
  )
}