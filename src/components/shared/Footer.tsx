import { Box, Button, Container, IconButton, Stack, Typography } from "@mui/material";
// icons
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Link from "next/link";

const Footer = () => {

    const navItems = [
        {
            route: "Home",
            pathname: "/"
        },
        {
            route: "Pages",
            pathname: "/pages"
        },
        {
            route: "Category",
            pathname: "/category"
        },
        {
            route: "News",
            pathname: "/news"
        },
        {
            route: "About",
            pathname: "/about"
        },
        {
            route: "Contact",
            pathname: "/contact"
        },
    ];

    return (
        <Box className="bg-black px-2 py-10">
            <Container>
                <Box className="bg-black px-2 py-10 ">
                    <Container>
                        <Box className="w-full text-center" sx={{
                            "& svg": {
                                color: "white"
                            }
                        }}>
                            <IconButton>
                                <FacebookIcon />
                            </IconButton>
                            <IconButton>
                                <XIcon />
                            </IconButton>
                            <IconButton>
                                <InstagramIcon />
                            </IconButton>
                            <IconButton>
                                <YouTubeIcon />
                            </IconButton>
                        </Box>
                    </Container>
                </Box>

                <Box className="w-full text-center">
                    {navItems.map((item) => (
                        <Link key={item} href={item.pathname}>
                            <Button className='text-white'>
                                {
                                    item.route
                                }
                            </Button>
                        </Link>
                    ))}
                </Box>

                <Typography variant="body2" color={"gray"} textAlign={"center"}>
                    &copy; 2024 The Dragon News. Design By Mazharul Islam
                </Typography>

            </Container >
        </Box >
    );
};

export default Footer;