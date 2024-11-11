import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import BlogsPortalListings from "../../components/Blogs & Landing Page/BlogsPortalListings";

const BlogsScreen = () => {
  return (
    <Fragment>
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <BlogsPortalListings />
    </Fragment>
  );
};

export default BlogsScreen;
