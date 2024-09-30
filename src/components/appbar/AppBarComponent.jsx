import { Box, Paper, Typography } from '@mui/material'
import PropTypes from 'prop-types'

const AppBarComponent = ({ title }) => {
  return (
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
        {title}
      </Typography>
      <Paper />
    </Box>
  )
}

AppBarComponent.propTypes = {
  title: PropTypes.string,
}

export default AppBarComponent
