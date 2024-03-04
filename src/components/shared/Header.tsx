import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import headingLogo from '../../assets/The Dragon News.png'

const getCurrentDate = () => {
    // Create a new Date object
    var currentDate = new Date();
  
    // Get day, month, date, and year
    var day = currentDate.toLocaleString('en-US', { weekday: 'long' });
    var month = currentDate.toLocaleString('en-US', { month: 'long' });
    var date = currentDate.getDate();
    var year = currentDate.getFullYear();
  
    // Return the formatted date string
    return `${day}, ${month} ${date}, ${year}`;
  };

const Header = () => {

    const currentDate = getCurrentDate();

    return (
        <Box className="w-full my-3" >
            <Container>
                <Image src={headingLogo} width={500} height={500} alt="header" className="mx-auto" />
                <Typography  textAlign={"center"}>
                    Journalism Without Fear or Favour
                </Typography>
                <Typography  textAlign={"center"}>
                    {currentDate}
                </Typography>

            </Container>
        </Box>
    );
};

export default Header;