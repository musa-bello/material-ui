import React from 'react'
import {style, miniCard, alignText,bottomButtons, transformText} from './CustomStyles'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import DescriptionIcon from '@material-ui/icons/Description';
import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import TelegramIcon from '@material-ui/icons/Telegram';

function CardComponent() {
    return (
        <div>
            <Card style={style}>
            <CardContent style={miniCard}>
              <div style={{background:"pink"}}>
              <DescriptionIcon  />
              </div>
              <Typography variant="h6" gutterBottom style={alignText}>12300</Typography>
            </CardContent>
          </Card>

          <Card style={{textAlign:"left"}}>
            <CardContent style={{padding:"20px"}}>
              <Typography>Compose message</Typography>
              <div>
                <Typography variant="caption"><strong>Sender ID</strong></Typography>
                <TextField
                  id="outlined-password-input"
                  placeholder="Enter Sender ID"
                  fullWidth
                  type="text"
                  variant="outlined"
                />
              </div>

              <div>
                <Typography variant="caption"><strong>Recipients</strong></Typography>
                <TextField
                  id="outlined-multiline-static"
                  fullWidth
                  multiline
                  rows={4}
                  placeholder="Enter phone number separated by commas"
                  variant="outlined"
                />
                <Typography variant="caption">Number of recipients:<strong>20</strong></Typography>
              </div>

              <div>
                <Typography variant="caption"><strong>Your message</strong></Typography>
                <TextField
                  id="outlined-multiline-static"
                  fullWidth
                  multiline
                  rows={4}
                  placeholder="Enter your message"
                  variant="outlined"
                />
                <Typography variant="caption">Characters left:<strong>0/260</strong></Typography>
              </div>

              <div style={bottomButtons}>
                <div style={{paddingRight:"1rem"}}>
                <Fab variant="contained" style={transformText}>Cancel</Fab>
                </div>
                
                <Fab variant="contained" color="primary" style={transformText}>
                  Send SMS
                  <TelegramIcon />
                </Fab>
              </div>

            </CardContent>
          </Card>
        </div>
    )
}

export default CardComponent
