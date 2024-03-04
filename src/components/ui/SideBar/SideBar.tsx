import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import Image from "next/image";
import sideBarImage from "../../../assets/side-top-news.png"
import BottomSideBar from "./BottomSideBar";

const SideBar = () => {
    return (
        <Box className="my-5">
            <Card>
                <CardActionArea>
                    <CardMedia>
                        <Image src={sideBarImage} alt="topNewsImage" width={800} />
                    </CardMedia>
                    <CardContent>
                        <p className="w-[100px] px-2 my-4 rounded  bg-red-500 text-white ">Technology</p>
                        <Typography className="text-xl">
                            Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet
                        </Typography>
                        <Typography className="my-3" >
                            By Mazharul Islam - 04-03-2024
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <BottomSideBar></BottomSideBar>

        </Box>
    );
};

export default SideBar;