import {
  Box,
  Typography,
  Stack,
  Select,
  Button,
  TextField,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import Navbar from "../../component/navbar/Navbar";
import SideBar from "../../component/sideBar/SideBar";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const Stns = () => {
  const rows = [
    {
      idNo: "1258458",
      nameWithIn: "P S Vitharana",
      HomeStation: "GLE",
      mobileNo: "0754668478",
      status: "Pending",
      userImg:
        "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80",
    },
    {
      idNo: "1258458",
      nameWithIn: "P S Vitharana",
      HomeStation: "GLE",
      mobileNo: "0754668478",
      status: "Pending",
      userImg:
        "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80",
    },
    {
      idNo: "1258458",
      nameWithIn: "P S Vitharana",
      HomeStation: "GLE",
      mobileNo: "0754668478",
      userImg:
        "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80",
    },
    {
      idNo: "1258458",
      nameWithIn: "P S Vitharana",
      HomeStation: "GLE",
      mobileNo: "0754668478",
      status: "Pending",
      userImg:
        "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80",
    },
    {
      idNo: "1258458",
      nameWithIn: "P S Vitharana",
      HomeStation: "GLE",
      mobileNo: "0754668478",
      status: "Pending",
      userImg:
        "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80",
    },
    {
      idNo: "1258458",
      nameWithIn: "P S Vitharana",
      HomeStation: "GLE",
      mobileNo: "0754668478",
      status: "Pending",
      userImg:
        "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80",
    },
    {
      idNo: "1258458",
      nameWithIn: "P S Vitharana",
      HomeStation: "GLE",
      mobileNo: "0754668478",
      status: "Pending",
      userImg:
        "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80",
    },
    {
      idNo: "1258458",
      nameWithIn: "P S Vitharana",
      HomeStation: "GLE",
      mobileNo: "0754668478",
      status: "Pending",
      userImg:
        "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80",
    },
    {
      idNo: "1258458",
      nameWithIn: "P S Vitharana",
      HomeStation: "GLE",
      mobileNo: "0754668478",
      status: "Pending",
      userImg:
        "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80",
    },
    {
      idNo: "1258458",
      nameWithIn: "P S Vitharana",
      HomeStation: "GLE",
      mobileNo: "0754668478",
      userImg:
        "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80",
    },
    {
      idNo: "1258458",
      nameWithIn: "P S Vitharana",
      HomeStation: "GLE",
      mobileNo: "0754668478",
      status: "Pending",
      userImg:
        "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80",
    },
    {
      idNo: "1258458",
      nameWithIn: "P S Vitharana",
      HomeStation: "GLE",
      mobileNo: "0754668478",
      status: "Pending",
      userImg:
        "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80",
    },
    {
      idNo: "1258458",
      nameWithIn: "P S Vitharana",
      HomeStation: "GLE",
      mobileNo: "0754668478",
      status: "Pending",
      userImg:
        "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80",
    },
    {
      idNo: "1258458",
      nameWithIn: "P S Vitharana",
      HomeStation: "GLE",
      mobileNo: "0754668478",
      status: "Pending",
      userImg:
        "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80",
    },
  ];

  return (
    <Box>
      <Navbar />
      <Box sx={style.container}>
        <Box sx={style.sideBar}>
          <SideBar />
        </Box>
        <Box sx={style.feeds}>
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 2,
            }}
          >
            <Box sx={style.title}>
              <Typography varient="h7" color="gray">
                Manage STNs
              </Typography>
            </Box>
          </Stack>
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 2,
            }}
          >
            <Box sx={style.filterContainer}>
              <Box
                sx={{
                  display: "flex",
                  flex: 5,
                  marginRight: 2,
                  paddingLeft: 5,
                  paddingTop: 2,
                  paddingBottom: 2,
                  gap: 1,
                  alignItems: "center",
                }}
              >
                <TextField
                  size="small"
                  placeholder="Search Here"
                  //  onChange={handleSearchChange}
                />
                {/*   Pending
                <Select
                  size="small"
                  value={pending}
                  onChange={handleChangePending}
                >
                  <MenuItem value="">Select Status</MenuItem>

                  <MenuItem value={true}>Yes</MenuItem>
                  <MenuItem value={false}>No</MenuItem>
                </Select>
                Home Station
                <Select
                  size="small"
                  value={homeStation}
                  onChange={handleChangeHomeStation}
                >
                  <MenuItem value="">Select Home Station</MenuItem>

                  <MenuItem value="GLE">GLE</MenuItem>
                  <MenuItem value="MTR">MTR</MenuItem>
                </Select>
                User Role
                <Select size="small" value={role} onChange={handleChangeRole}>
                  <MenuItem value="">Select Role</MenuItem>

                  <MenuItem value="admin">Admin</MenuItem>
                  <MenuItem value="user">User</MenuItem>
                </Select> */}
              </Box>
              <Box sx={{ flex: 1 }}>
                <Button variant="contained" endIcon={<AddCircleIcon />}>
                  Add Stn
                </Button>
              </Box>
            </Box>
          </Stack>
          <Stack
            sx={{
              justifyContent: "center",
              marginBottom: 2,
              alignItems: "center",
            }}
          >
            <Box sx={style.dataTable}>
              <Box sx={{ width: "100%" }}>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell align="center">Train No</TableCell>
                        <TableCell sx={{ width: "100px" }} align="center">
                          STN No
                        </TableCell>
                        <TableCell align="center">Line</TableCell>
                        <TableCell align="center">Start At</TableCell>
                        <TableCell align="center">Destination</TableCell>
                        <TableCell align="center">Date Of Updated</TableCell>

                        <TableCell align="center">Operations</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow key={row.idNo}>
                          <TableCell align="center">{row.idNo}</TableCell>
                          <TableCell>
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                width: "150px",
                              }}
                            >
                              <img
                                src={row.userImg}
                                alt="userImage"
                                className="UserImage"
                              />{" "}
                              {row.nameWithIn}
                            </Box>
                          </TableCell>

                          <TableCell align="center">
                            {row.HomeStation}
                          </TableCell>
                          <TableCell align="center">{row.mobileNo}</TableCell>
                          <TableCell align="center">
                            <Typography variant="body2" sx={style.pending}>
                              {" "}
                              {row?.status}
                            </Typography>
                          </TableCell>
                          <TableCell align="center">
                            <Box>
                              <Button variant="contained" color="success">
                                {" "}
                                View
                              </Button>
                            </Box>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

/** @type {import("@mui/material").SxProps}*/
const style = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    flex: 1,
  },
  sideBar: {
    flex: 1,
    height: 500,
  },
  feeds: {
    flex: 4,
    height: 500,
    paddingTop: 10,
  },

  title: {
    width: "95%",
    display: "flex",
    backgroundColor: "#fff",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0px 23px 17px -14px rgba(0, 0, 0, 0.1)",
  },
  dataTable: {
    width: "95%",
    display: "flex",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0px 23px 17px -14px rgba(0, 0, 0, 0.1)",
  },
  filterContainer: {
    width: "95%",
    display: "flex",
    backgroundColor: "#fff",
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0px 23px 17px -14px rgba(0, 0, 0, 0.1)",
    borderRadius: 1,
  },
};
export default Stns;
