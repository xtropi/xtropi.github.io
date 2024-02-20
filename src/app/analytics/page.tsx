"use client";
import { Divider, List, Skeleton, Typography } from "antd";
import { useCallback } from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";
const { Title } = Typography;
export default function Component() {
  const renderSkelLists = useCallback((n: number) => {
    if (n < 0) return;
    const resultArr = [];
    for (let i = 0; i <= n; i++) {
      resultArr.push(
        <List.Item.Meta key={"skel" + i} avatar title description />
      );
    }
    return resultArr;
  }, []);

  const TwitterSkeleton = (
    <Skeleton loading active avatar>
      {renderSkelLists(5)}
    </Skeleton>
  );

  return (
    <main>
      <Title level={4}>
        Personal-blog styled analitycs for stakers *Under development*
      </Title>
      <Divider />

      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="mukh___tar"
        tweetLimit={2}
        placeholder={TwitterSkeleton}
        theme="dark"
        // autoHeight
        options={{ height: 800, width: 800 }}
      />
    </main>
  );
}
