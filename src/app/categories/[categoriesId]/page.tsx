import React from 'react';
import { getCategoryNews } from '../../../utils/getCategoryNews';
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import Image from 'next/image';


const DynamicNewsPage = async ({ params, searchParams }) => {
    try {
        // Fetch data using getCategoryNews
        const { data } = await getCategoryNews(searchParams.category);
        

        return (
            <div className='my-5'>
                <h1>Total <span className='font-bold'>{searchParams.category.toUpperCase()}</span> News: {data.length} </h1>

                <Box>
                <Grid className="my-5" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                 {
                    data.map(news =>(
                        <Grid key={news.id} item xs={6}>
                        <Card>
                            <CardActionArea>
                                <CardMedia>
                                    <Image src={news.thumbnail_url} alt="topNewsImage" width={800} height={500} />
                                </CardMedia>
                                <CardContent>
                                    <p className="w-[100px] px-2 my-4 rounded  bg-red-500 text-white ">{news.category}</p>
                                    <Typography className="text-xl">
                                        {news.title}
                                    </Typography>
                                    <Typography className="my-3" >
                                        {news.author.name} - {news.author.published_date} 
                                        
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {news.details.slice(0,300)}...
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    ))
                 }
                   

                </Grid>

                </Box>
               
            </div>
        );
    } catch (error) {
        
        console.error('Error fetching data:', error);
        return (
            <div>
                <h1>Error Loading News</h1>
                {/* You can add more error handling UI here */}
            </div>
        );
    }
};

export default DynamicNewsPage;
