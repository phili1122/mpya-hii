import React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

/**
 * A modern, Steam-like card component for a game.
 */
export const GameCard: React.FC = () => {
  return (
    <Card 
      // Tailwind classes for width, hover effect, and shadow
      className="max-w-xs transition-transform duration-300 hover:scale-[1.02] shadow-2xl"
      sx={{ 
        bgcolor: 'background.paper', 
        color: 'text.primary', 
        // Custom shadow for a more 'lit-up' look typical of game cards
        boxShadow: 
          '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1), 0 0 40px rgba(233, 82, 128, 0.15)',
      }}
    >
      <CardMedia
        component="img"
        height="180"
        image="https://picsum.photos/id/40/320/180" // High-res placeholder
        alt="Cyberpunk 2077 Night City"
      />
      <CardContent sx={{ pb: 1.5 }}>
        <Typography 
          gutterBottom 
          variant="h5" 
          component="div" 
          className="text-xl font-bold"
        >
          Project Cyber-Rift
        </Typography>
        <Typography 
          variant="body2" 
          sx={{ color: 'text.secondary' }}
          className="text-sm"
        >
          An immersive, open-world sci-fi RPG set in a dystopian future where technology and crime intertwine.
        </Typography>
      </CardContent>
      <CardActions className="flex p-4 pt-0">
        <Button 
          variant="contained" 
          size="large"
          color="primary"
          // Removed margin right and kept flexGrow: 1 to ensure full width
          sx={{ flexGrow: 1, py: 1.5, fontWeight: 'bold' }} 
          className="hover:opacity-90"
        >
          Play Now
        </Button>
      </CardActions>
    </Card>
  )
}