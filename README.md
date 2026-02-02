# Memes Pro - Gaming Platform

A comprehensive React-based gaming platform with admin dashboard, real-time analytics, and integrated game support.

## Features

✨ **Core Features**
- 🎮 Multiple integrated games (Temple Run 2, BitLife, Zima Taa Tulale)
- 📊 Real-time analytics dashboard with player statistics
- 👥 Player management system
- 🏆 Match tracking and scoring
- 🎨 Dark/Light theme switching
- 🔐 Admin authentication system (username: `admin`, password: `1234`)

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **UI Framework**: Material-UI v5
- **Build Tool**: Vite
- **Database**: Turso (LibSQL)
- **Routing**: React Router v7
- **Styling**: Emotion + MUI System

## Project Structure

```
app/
├── components/          # Reusable React components
├── pages/              # Page components
│   ├── HomePage.tsx
│   ├── AdminPage.tsx
│   ├── AdminLogin.tsx
│   └── sections/       # Page sections
├── public/             # Static assets
│   ├── addition/       # Meme editor resources
│   └── webyagames/     # Local games (Zima Taa Tulale)
├── database.ts         # Database service layer
├── theme.tsx           # MUI theme configuration
└── index.tsx           # Entry point
```

## Installation

### Prerequisites
- Node.js 18+
- npm or yarn

### Setup

1. **Install dependencies**
```bash
cd app
npm install
```

2. **Configure environment variables**
Create or update `.env` file with:
```
VITE_TURSO_CONNECTION_URL=libsql://your-database-url
VITE_TURSO_AUTH_TOKEN=your-auth-token
```

3. **Start development server**
```bash
npm run dev
```

4. **Build for production**
```bash
npm run build
```

5. **Preview production build**
```bash
npm run preview
```

## Database Setup

The project uses Turso (LibSQL) for data persistence. Tables are auto-created on first run:

- **players**: Player profiles with game count and points
- **matches**: Individual match records per player

### Database Functions
- `getAllPlayers()` - Fetch all players
- `addPlayer(player)` - Create new player
- `updatePlayer(id, player)` - Update player info
- `deletePlayer(id)` - Delete player record
- `getPlayerMatches(playerId)` - Get matches for specific player
- `addMatch(match)` - Record new match
- `deleteMatch(matchId)` - Remove match record

## Pages

### Home Page (`/`)
- Game showcase with play buttons
- Founders profiles with image zoom
- Social media links
- Sponsors section
- Analytics dashboard with player statistics

### Games Section (`/games`)
- Playable games in fullscreen iframe
- Integrated games:
  - Temple Run 2 (iframe)
  - BitLife (iframe)
  - Zima Taa Tulale (local HTML)

### Admin Dashboard (`/admin`)
- **Authentication**: Login required (admin/1234)
- **Players Tab**: 
  - View all players
  - Add/Edit/Delete player records
  - Real-time updates
- **Matches Tab**:
  - Select player and view their matches
  - Add match records
  - Track game performance

### Analytics Page (`/analytics`)
- Player performance table
- Expandable match history per player
- Real-time data from database

## Games Integration

### Local Game (Zima Taa Tulale)
Located at: `app/public/webyagames/`
- Lights Out puzzle game
- Loaded via iframe in fullscreen modal
- All resources use absolute paths for proper loading

### External Games
- Temple Run 2: iframed from external CDN
- BitLife: iframed from external source

## Authentication

Admin access requires login:
- **Credentials**: username `admin`, password `1234`
- **Storage**: Session stored in localStorage as `adminAuth`
- **Route Protection**: Redirect to login if not authenticated

## Theme System

- **Dark Mode**: Full dark theme support
- **Light Mode**: Default light theme
- **Toggle**: Available in drawer settings menu
- **Persistence**: Theme preference saved in localStorage

## API Routes

All game data is served statically:
- `/webyagames/` - Local games
- `/addition/` - Meme editor resources
- `/` - Main application

## Deployment

### Build Output
Production build outputs to `dist/` directory with optimized assets.

### Environment Variables for Production
Set the following in your deployment environment:
- `VITE_TURSO_CONNECTION_URL`
- `VITE_TURSO_AUTH_TOKEN`

### Recommended Deployment Platforms
- Vercel
- Netlify  
- AWS Amplify
- Railway
- Fly.io

## Known Issues & Notes

1. **Relative Paths**: All game resources use absolute paths (`/webyagames/`) for proper iframe loading
2. **CORS**: External games may have CORS restrictions on some browsers
3. **Database**: Turso connection requires valid URL and auth token

## Development Guidelines

### Adding New Games

1. Create game folder in `public/`
2. Add game HTML/assets
3. Update `GamesData.ts` with game info:
```typescript
export const gamesData: Game[] = [
  {
    id: 4,
    name: "New Game",
    image: "image-url",
    gameUrl: "/game-folder/index.html"
  }
]
```

### Adding New Players

Use Admin Dashboard or database functions:
```typescript
const newPlayer = await addPlayer({
  name: "Player Name",
  games: 0,
  points: 0,
  statusTrend: "up"
})
```

## Testing

```bash
npm run dev    # Start dev server with hot reload
npm run build  # Create production build
npm run preview # Preview production build locally
```

## Future Enhancements

- [ ] User authentication system
- [ ] Leaderboards
- [ ] Tournament management
- [ ] Game achievements/badges
- [ ] Real-time multiplayer support
- [ ] Social features (friends, chat)
- [ ] Mobile app version

## Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Support

For issues or questions, please open an issue in the GitHub repository.

---

**Last Updated**: February 2, 2026
