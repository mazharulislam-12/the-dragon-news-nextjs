import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import topNews from "../../../assets/top-news.png"
import topNews2 from "../../../assets/top-news2.png"
import Image from "next/image";
import { getAllNews } from "../../../utils/getAllNews";

const LatestNews = async () => {
    const { data } = await getAllNews()
    // console.log(data);
    return (
        <>
            <Box className="my-5">
                <Card>
                    <CardActionArea>
                        <CardMedia>
                            <Image src={data[0].thumbnail_url} alt="topNewsImage" width={800} height={500} />
                        </CardMedia>
                        <CardContent>
                            <p className="w-[100px] px-2 my-4 rounded  bg-red-500 text-white ">{data[0].category}</p>
                            <Typography gutterBottom variant="h5" component="div">
                                {data[0].title}
                            </Typography>
                            <Typography className="my-3" >
                                By- {data[0].author.name} - {data[0].author.published_date}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {data[0].details.slice(1, 300)}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>


                <Grid className="my-5" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {
                        data.slice(0, 4).map((news) => (
                            <Grid key={news.id} item xs={6}>
                                <Card>
                                    <CardActionArea>
                                        <CardMedia sx={{
                                            "& img": {
                                                width: "100%", // Corrected typo: "weight" to "width"
                                                height: 250, // Removed "px" from height value
                                            },
                                        }} >
                                            <Image src={news.thumbnail_url} alt="topNewsImage" width={800} height={500} />
                                        </CardMedia>
                                        <CardContent>
                                            <p className="w-[100px] px-2 my-4 rounded  bg-red-500 text-white ">{news.category}</p>
                                            <Typography className="text-xl">
                                                {news.title}
                                            </Typography>
                                            <Typography className="my-3" >
                                                By  {news.author.name} - {news.author.published_date}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        ))
                    }

                </Grid>

            </Box>
        </>
    );
};

export default LatestNews;