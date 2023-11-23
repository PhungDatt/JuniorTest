import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Outlet, Link } from "react-router-dom";
import SplitButton from '../../Component/Sort/Sort';
const Layout = () => {
  return (
    <>
    <div className="Layout-bar">

    <div className="Sort">  
    < SplitButton/>
    </div>

    <div className='Category'>
    <ButtonGroup aria-label="outlined primary button group">
    <Button component={Link} to="/Home"  variant="contained">ALL</Button>
    <Button component={Link} to="/Man">Man</Button>
    <Button component={Link} to="/Women">Women</Button>
    <Button component={Link} to="/Children">Children</Button>
    </ButtonGroup>
    </div>
    </div>
    <Outlet />
     </>

  )
};

export default Layout;
