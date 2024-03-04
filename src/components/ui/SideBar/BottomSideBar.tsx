import { Grid } from "@mui/material";
import bottomImage from "../../../assets/side-bottom-img.png"
import Image from "next/image";

const BottomSideBar = () => {
    return (
        <div>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid className="flex items-center gap-6 my-5 mt-8 shadow-md p-4 rounded-md" item xs={12}>
                    <div>
                        <Image width={200} src={bottomImage} alt="bottom" />
                    </div>
                    <div>
                        <h2>Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet</h2>
                        <p>04-03-2024</p>
                    </div>
                </Grid>
               
                <Grid className="flex items-center gap-6 my-5 mt-8 shadow-md p-4 rounded-md" item xs={12}>
                    <div>
                        <Image width={200} src={bottomImage} alt="bottom" />
                    </div>
                    <div>
                        <h2>Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet</h2>
                        <p>04-03-2024</p>
                    </div>
                </Grid>
               
                <Grid className="flex items-center gap-6 my-5 mt-8 shadow-md p-4 rounded-md" item xs={12}>
                    <div>
                        <Image width={200} src={bottomImage} alt="bottom" />
                    </div>
                    <div>
                        <h2>Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet</h2>
                        <p>04-03-2024</p>
                    </div>
                </Grid>
               
                <Grid className="flex items-center gap-6 my-5 mt-8 shadow-md p-4 rounded-md" item xs={12}>
                    <div>
                        <Image width={200} src={bottomImage} alt="bottom" />
                    </div>
                    <div>
                        <h2>Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet</h2>
                        <p>04-03-2024</p>
                    </div>
                </Grid>
               
                <Grid className="flex items-center gap-6 my-5 mt-8 shadow-md p-4 rounded-md" item xs={12}>
                    <div>
                        <Image width={200} src={bottomImage} alt="bottom" />
                    </div>
                    <div>
                        <h2>Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet</h2>
                        <p>04-03-2024</p>
                    </div>
                </Grid>
               
                <Image className=" mx-auto" width={300} src={bottomImage} alt="bottom" />
               
               
            </Grid>
        </div>
    );
};

export default BottomSideBar;