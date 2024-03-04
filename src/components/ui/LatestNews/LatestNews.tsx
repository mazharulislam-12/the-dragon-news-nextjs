import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import topNews from "../../../assets/top-news.png"
import topNews2 from "../../../assets/top-news2.png"
import Image from "next/image";

const LatestNews = () => {
    return (
        <>
            <Box className="my-5">
                <Card>
                    <CardActionArea>
                        <CardMedia>
                            <Image src={topNews} alt="topNewsImage" width={800} />
                        </CardMedia>
                        <CardContent>
                            <p className="w-[100px] px-2 my-4 rounded  bg-red-500 text-white ">Technology</p>
                            <Typography gutterBottom variant="h5" component="div">
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


                <Grid className="my-5" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <Card>
                            <CardActionArea>
                                <CardMedia>
                                    <Image src={topNews2} alt="topNewsImage" width={800} />
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
                    </Grid>
                    <Grid item xs={6}>
                        <Card>
                            <CardActionArea>
                                <CardMedia>
                                    <Image src={topNews2} alt="topNewsImage" width={800} />
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
                    </Grid>
                    <Grid item xs={6}>
                        <Card>
                            <CardActionArea>
                                <CardMedia>
                                    <Image src={topNews2} alt="topNewsImage" width={800} />
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
                    </Grid>
                    <Grid item xs={6}>
                        <Card>
                            <CardActionArea>
                                <CardMedia>
                                    <Image src={topNews2} alt="topNewsImage" width={800} />
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
                    </Grid>

                </Grid>

            </Box>
        </>
    );
};

export default LatestNews;