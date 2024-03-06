import { Box, Container, Grid } from "@mui/material";
import getSingleNews from "../../../utils/getSingleNews";
import Image from "next/image";

const NewsDetailsPage = async ({ params }) => {
    try {
        const { data:news } = await getSingleNews(params.newsId);
       
        return (
            <div> {/* Wrap the entire content in a valid JSX container */}
                <Box>
                    <Container>
                        <Grid container spacing={2}>
                            <Grid item lg={6}>
                                <h1>Image</h1>
                                <Image src={thumbnail_url} width={500} height={400} alt="news" />
                            </Grid>
                            <Grid item lg={6}>
                                <h1>Details</h1>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </div>
        );
    } catch (error) {
        console.error("Error fetching single news:", error);
        // Handle the error appropriately (e.g., show an error message to the user)
        return null;
    }
};

export default NewsDetailsPage;
