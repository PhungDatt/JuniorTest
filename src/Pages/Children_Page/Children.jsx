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
import DetailChildren from './Detail/Detail';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { useState, useEffect } from 'react';



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const Children = () => {
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
                const response = await fetch('https://raw.githubusercontent.com/PhungDatt/ItsDataJson/main/Children.json');
                const result = await response.json();

                // Assuming the response structure is like the provided JSON
                if (result.Children && result.Children.length > 0) {
                  setData(result.Children[0]);
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
                   src={data?.User_Image}/>
                  <h4>{data?.User_Name}</h4>
                  
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
        < DetailChildren />
        </Dialog>
       </React.Fragment>      
  </>    
  );
  }
  
  export default Children;