"use client"
// import Image from "next/image";
// import styles from "./page.module.css";
import { Divider, Space, Typography } from 'antd';

const { Text, Link, Title } = Typography;

const data = {
  "name": "Mukhtar",
  "gender": "male",
  "birth_date": "1994-06-11",
  "height": "177cm",
  "right_handed": true,
  "birth_coords": "61.266235, 73.364072",
  "languages": ["ru", "en"],
  "email": "mukh.musaev@gmail.com",
  "url": "https://xtropi.github.io/",
  "activities": [
    "crypto economics",
    "web development",
    "gym",
    "stocks investing",
    "PC gaming",
    "futures trading",
    "existence philosophy",
  ],
  "skills": {
    "webDevelopment": [
      "React",
      "NextJS",
      "JavaScript"
    ],
    "backend": [
      "Node.js",
      "SQL (PostgreSQL)",
      "NoSQL (MongoDB)",
    ],
    "business": [
      "GitLab",
      "Atlassian Jira/Confluence"
    ]
  }
}

export default function Component() {
  return (
    <main>
      <Title level={4}>About</Title>
      <Divider />
      <Text>
        <pre style={{ fontSize: 'smaller' }}>
          {JSON.stringify(data, null, 2).trim()}
        </pre>
      </Text>
    </main>
  );
}
