import { Box, Paper, Typography } from '@mui/material'

const App = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#3f51b5',
          p: 2,
          height: '80px',
        }}
      >
        <Typography variant='h4' sx={{ color: '#e8eaf6' }}>
          Open Home Bills
        </Typography>
        <Paper />
      </Box>
    </>
  )
}

export default App
