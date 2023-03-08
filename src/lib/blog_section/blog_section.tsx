import { Box, SimpleGrid } from "@mantine/core";
import { useEffect, useState } from "react";
import { getBlogs } from "./blog.controller";
import Heading from "../Heading/heading";
import { BlogProps } from "./blog.types";
import BlogCard from "./blog_card";

export default function BlogSection() {
  const [blogs, setBlogs] = useState(() => []);

  useEffect(() => {

    getBlogs().then((data) => {
    console.log(data[0].coverImage);
      
      setBlogs(data);
    });
  }, []);

  return (
    <>
      <Box mt={"2.5%"}>
        <Heading>Blogs</Heading>
        <SimpleGrid
          cols={4}
          spacing="xl"
          mt={50}
          mx={"2.5%"}
          breakpoints={[{ maxWidth: "md", cols: 1 }]}
        >
          {blogs.map((data: BlogProps, index) => {
            return <BlogCard key={index} data={data} />;
          })}
        </SimpleGrid>
      </Box>
    </>
  );
}