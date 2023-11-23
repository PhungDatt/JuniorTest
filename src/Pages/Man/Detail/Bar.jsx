import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import CommentIcon from '@mui/icons-material/Comment';
import IosShareIcon from '@mui/icons-material/IosShare';
import InfoIcon from '@mui/icons-material/Info';
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { useState, useEffect } from 'react';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const Bar = () =>{

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  //fetch api 
  const [data, setData] = useState(null); // Thêm state để lưu dữ liệu từ API


    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://raw.githubusercontent.com/PhungDatt/ItsDataJson/main/Man.json');
            const result = await response.json();
  
            // Assuming the response structure is like the provided JSON
            if (result.Man && result.Man.length > 0) {
              setData(result.Man[0]);
            }
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchData();
    }, []);

  
  const buttons = [
    <Button key="one">
          <Avatar 
            src={data?.User_Image}>                          
            </Avatar>
            <ButtonGroup
              orientation="vertical"
              aria-label="vertical outlined button group"
            ></ButtonGroup>
</Button>,
    <Button key="one" onClick={handleClickOpen}>
        <CommentIcon/>  
        <a>{data?.Content}</a>
    </Button>,
    <Button key="two">
        <IosShareIcon/>

    </Button>,
    <Button key="three">
        <InfoIcon/>
    </Button>,
  ];
    return(
        <>
        <div className="Detail-bar">
            <Box
            
            sx={{
              display: 'flex',
              '& > *': {
                m: 3,
              },
            }}
          >
          
            <ButtonGroup
              orientation="vertical"
              aria-label="vertical outlined button group"
              variant="text"
            >
              {buttons}
            </ButtonGroup>
            
          </Box>
        </div>        
      <React.Fragment>
  
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
     <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <IconButton>
              <CommentIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Comment
            </Typography>
          </Toolbar>
     </AppBar>
        <List>
          <ListItem button>
            <ListItemText 
            primary="Jack - jack@gmail.com" 
            secondary="😆 muhaha !" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText
              primary="Lill a - Lilla@gmail.com"
              secondary=" 🤣 Call to me ?"
            />
          </ListItem>
        </List>
      </Dialog>
    </React.Fragment>
        </>
    )
}
export default Bar;
