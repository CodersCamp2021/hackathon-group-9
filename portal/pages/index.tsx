import * as React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const data = [
 {
    id: "1234",
    createdAt: "12:23",
    url: "test.com",
    upvotes: "21",
    downvotes: "32"
  },

  {
    id: "1233424",
    createdAt: "13:23",
    url: "test12.com",
    upvotes: "221",
    downvotes: "321"
  },
  {
    id: "1243234",
    createdAt: "13:23",
    url: "test123.com",
    upvotes: "24",
    downvotes: "72"
  }
]

const Home = () => {
  return (
    <div className={styles.container}>
    <Box
    sx={{
      width: 500,
      maxWidth: '100%',
    }}
  >
    <TextField fullWidth label="Search" id="fullWidth" />
  </Box>
  </div>
  );
};

export default Home;
