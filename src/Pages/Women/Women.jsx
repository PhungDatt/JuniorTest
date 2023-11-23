import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { CardActionArea } from '@mui/material';
import { IconButton, Badge } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import DetailWomen from './Detail/Detail';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { useState, useEffect } from 'react';


// Show dialog
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// Women Component
const Women = () => {
  const [count, setCount] = useState(0);

      const handleClick = () => {
        setCount(count + 1);
      };

      // modal
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
                  const response = await fetch('https://raw.githubusercontent.com/PhungDatt/ItsDataJson/main/Women.json');
                  const result = await response.json();
        
                  // Assuming the response structure is like the provided JSON
                  if (result.Women && result.Women.length > 0) {
                    setData(result.Women[0]);
                  }
                } catch (error) {
                  console.error('Error fetching data:', error);
                }
              };
              fetchData();
          }, []);

  return (
      <>
      <Card className="Man_Card" >
              <CardActionArea>
                  <CardMedia 
                  component="img"
                  height="280"
                  onClick={handleClickOpen}
                  image={data?.image1}
                  alt="green iguana"
                  />
                  <CardContent>         
                  <Stack direction="row" spacing={3}  >
                  <Avatar                   
                  alt=""
                   src="https://legiit-service.s3.amazonaws.com/70bb64635e0feef7a6505ccd1013a1cd/5c434882ae25ac3d89bf5359c41a09a7.jpg"/>
                  <h4>Lill A</h4>
                  
                      <IconButton className="card-bar" onClick={handleClick}>
                      <Badge badgeContent={count}  >
                      <FavoriteIcon />     
                      </Badge>
                      <a>{data?.Like}</a>
                      </IconButton>
                      
                      <IconButton className="card-bar" onClick={handleClick}>
                      <Badge badgeContent={count}  >
                      <CommentIcon />
                      <a>{data?.Content}</a>
                      </Badge>
                      </IconButton>
                  </Stack>
                  </CardContent>
              </CardActionArea>
        </Card>
            
      <React.Fragment>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
      < DetailWomen/>
      </Dialog>
    </React.Fragment>              
  </>     
  );
  }
  
  export default Women;