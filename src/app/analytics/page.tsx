"use client"
import { Divider, Space, Typography } from 'antd';
import React from 'react';
const { Title } = Typography;
export default function Component() {
  
  React.useEffect(() => {
    const s = document.createElement("script");
    s.setAttribute("src", "https://platform.twitter.com/widgets.js");
    s.setAttribute("async", "true");
    document.head.appendChild(s);
  }, []);

  return (
    <main>
      <Title level={4}>Personal-blog styled analitycs for stakers *Under development*</Title>
      <Divider />

      <a className="twitter-timeline" data-theme="dark" href="https://twitter.com/mukh___tar?ref_src=twsrc%5Etfw">Tweets by mukh___tar</a>
    </main>
  );
}
