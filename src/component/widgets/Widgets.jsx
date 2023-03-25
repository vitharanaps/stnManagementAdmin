import { Box, Typography } from "@mui/material";
import React from "react";
import Person4Icon from "@mui/icons-material/Person4";

const Widgets = () => {
  return (
    <Box sx={style.widget}>
      <Box sx={{ padding:1 }}>
        <Typography  sx={{ fontSize:18, color:"gray",}}>USERS</Typography>
      </Box>
      <Box sx={{display:"flex",justifyContent:"center", alignItems:"center" }}>
        <Typography sx={{ fontSize:30 }} >120</Typography>
      </Box>
      <Box  sx={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
        <Typography sx={{ fontSize:13, borderBottom:"1px solid black", width:"max-content", color:"gray" }}>View All Users</Typography>
        <Person4Icon  sx={{ padding:"5px", backgroundColor:"#79E44E", borderRadius:1, color:"green" }} />
      </Box>
    </Box>
  );
};

/** @type {import("@mui/material").SxProps}*/
const style = {
  widget: {
    display: "flex",
    flexDirection:"column",
    flex: 1,
    margin: "10px",
    padding: "10px",
    boxShadow: "0px 23px 17px -14px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
    height: 120,
    borderRadius: 2,
  },
};

export default Widgets;
