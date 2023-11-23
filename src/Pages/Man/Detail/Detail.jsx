import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import Bar from './Bar';
import { useState, useEffect } from 'react';



const Detail = () => {
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

    return(
        <>
        <div className="Detail-Form">
            <div className="Detail-Form-Content">
            <Card >
            <CardHeader
             avatar={
            <Avatar 
            sx={{ bgcolor: red[500] }}
            aria-label="recipe" 
            src={data?.User_Image} >                          
            </Avatar>
            }          
            action={                      
            <IconButton aria-label="settings">               
            <BookmarkBorderIcon />
            <FavoriteIcon />
            <b>Like</b>  
            <MoreVertIcon  />
            </IconButton>
             }
            title={data?.User_Name}
            subheader="T11, 2023"
            />
            <CardMedia
            component="img"
            height="AUTO"
            image={data?.image1}
            alt="Paella dish"
            />
           </Card>
            </div>
            <Bar/>
        </div>          

        </>
    )
}
export default Detail;