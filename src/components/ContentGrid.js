import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Box } from "@mui/material";
import ContentCard from "./ContentCard";
import "../App.css";

const ContentGrid = ({ searchQuery }) => {
  const [content, setContent] = useState([]);
  const [filteredContent, setFilteredContent] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const loadContent = async () => {
      const response = await axios.get(
        `https://test.create.diagnal.com/data/page${page}.json`
      );
      setContent((prevContent) => [
        ...prevContent,
        ...response.data.page["content-items"].content,
      ]);
    };
    loadContent();
  }, [page]);

  useEffect(() => {
    if (!searchQuery) {
      setFilteredContent(content);
    } else {
      const filtered = content.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredContent(filtered);
    }
  }, [searchQuery, content]);

  const handleScroll = (e) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <Box className="content-grid" onScroll={handleScroll}>
      <Grid container spacing={2}>
        {filteredContent.map((item, index) => (
          <Grid item xs={4} key={index}>
            <ContentCard
              title={item.name}
              imageUrl={`https://test.create.diagnal.com/images/${item["poster-image"]}`}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ContentGrid;
