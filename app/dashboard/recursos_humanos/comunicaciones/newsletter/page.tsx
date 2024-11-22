import React from "react";
import Zone1Wrapper from "@/components/blog/Zone1Wrapper";
import Zone2Wrapper from "@/components/blog/Zone2Wrapper";
import Zone3Wrapper from "@/components/blog/Zone3Wrapper";

const BlogPage = () => {
  return (
    <section id="blog">
      <Zone1Wrapper />
      <Zone2Wrapper />
      <Zone3Wrapper month="Octubre" />
      <Zone3Wrapper month="Septiembre" />
    </section>
  );
};

export default BlogPage;
