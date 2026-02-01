import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import newsPaper from "../Photo/newspaper.png" 
import { maxHeight } from '@mui/system'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  maxHeight: 700,
  objectFit: 'contain',
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
  position: 'relative',
  container: {
    width: "150px",
    cursor: "pointer",
    position: "relative",
    margin: "2rem auto",
  },// Needed for absolute positioning of the close button
}

const News_Modal = () => {
const [open, setOpen] = React.useState(null)
  // State for radio selection: 'yes', 'no', or null
  const [selection, setSelection] = React.useState(null) 

  const handleOpen = () => setOpen(true)
  
  const handleClose = () => {
    setOpen(false)
    // Reset selection state when closing the modal for a clean start
    setSelection(null)
  }

  const handleRadioChange = (event) => {
    setSelection(event.target.value)
  }

  const handleConfirm = () => {
    // In a real app, this is where you'd execute the action
    console.log('Action confirmed with selection:', selection)
    handleClose()
  }

  return (
    <div style={style.container}>
      <Button variant="contained" onClick={handleOpen} sx={{ backgroundColor: '#ff06daff', color: 'white'}}>
        News Update!
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="confirmation-modal-title"
        aria-describedby="confirmation-modal-description"
      >
        <Box sx={style}>
          
          {/* Close Button (X) - positioned absolutely */}
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>

          <Typography id="confirmation-modal-title" variant="h5" component="h2" gutterBottom>
            Confirm Your Choice
          </Typography>
          
          {/* Image */}
          <Box
            component="img"
            src={newsPaper}
            alt="People collaborating at a modern desk"
            sx={{
              width: '100%',
              maxHeight: 450, 
              objectFit: 'contain',
              borderRadius: 1,
              mb: 3,
            }}
          />
          
          <center>
            <Typography fontSize={20} id="confirmation-modal-description" sx={{ mt: 1, mb: 2, color: "black"}}>
             What do you say?
            </Typography>
       
            {/* Radio Buttons for Yes/No */}
            <FormControl component="fieldset">
              <RadioGroup
                row // Display radio buttons side-by-side
                aria-label="choice"
                name="choice-radio-buttons-group"
                value={selection}
                onChange={handleRadioChange}
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" sx={{color: "black", }}/>
                <FormControlLabel value="no" control={<Radio />} label="No" sx={{color: "black"}}/>
              </RadioGroup>
            </FormControl>
         
          {/* Action Buttons */}
          <Box sx={{mt: 1, gap: 1 }}>
            <Button 
              onClick={handleConfirm} 
              variant="contained" 
              sx={{backgroundColor: "pink"}}
              // Confirm button is only enabled when 'yes' is selected
              disabled={selection !== 'yes'}
            >
              Confirm
            </Button>
            
          </Box>
        </center>
        </Box>
      </Modal>
    </div>
  )
}

export default News_Modal