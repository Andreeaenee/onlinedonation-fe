import { Box } from "@mui/material";
import NgoCard from "./NgoCard";

const ngoslist = [
    {
      title: "ONG1",
      description: "description1",
    },
    {
      title: "ONG2",
      description: "description2",
    },
    {
      title: "ONG3",
      description: "description3",
    },
    {
      title: "ONG4",
      description: "description4",
    },
    {
      title: "ONG5",
      description: "description5",
    },
    {
      title: "ONG6",
      description: "description6",
    },
    {
      title: "ONG7",
      description: "description7",
    },
    {
      title: "ONG8",
      description: "description8",
    },
    {
      title: "ONG9",
      description: "description9",
    },
    {
      title: "ONG10",
      description: "description10",
    },
  ];
  
const NgoList = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        flexWrap: "wrap",
      }}
    >
      {ngoslist.map((ngo, index) => (
        <NgoCard id={index} title={ngo.title} description={ngo.description} />
      ))}
    </Box>
  );
};

export default NgoList;
