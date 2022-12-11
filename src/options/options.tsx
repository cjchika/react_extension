import React, {useEffect} from 'react'
import {createRoot} from 'react-dom/client'
import 'fontsource-roboto'
import './options.css'
import { Card, CardContent, Typography, Grid, TextField, Box } from '@material-ui/core'

const App: React.FC = () => {

    return (
      <Box mx="10%" my="2%">
        <Card>
          <CardContent>
            <Grid container direction='column'>
              <Grid item>
                <Typography variant='h5'>Weather Extension Options</Typography>
              </Grid>
              <Grid item>
                <Typography variant='body1'>Home City Name</Typography>
                <TextField fullWidth placeholder='Enter a home city'/>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        </Box>
    )
  }

const container = document.createElement('div')
document.body.appendChild(container)

const root = createRoot(container)
root.render(<App />)