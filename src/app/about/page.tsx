"use client";
// import Image from "next/image";
// import styles from "./page.module.css";
import {
  Collapse,
  CollapseProps,
  Divider,
  Dropdown,
  Space,
  Typography,
} from "antd";

const { Text, Link, Title } = Typography;

const data = {
  name: "Mukhtar",
  gender: "male",
  birth_date: "1994-06-11",
  height: "177cm",
  right_handed: true,
  birth_coords: "61.266235, 73.364072",
  languages: ["ru", "en"],
  email: "mukh.musaev@gmail.com",
  url: "https://xtropi.github.io/",
  activities: [
    "crypto economics",
    "web development",
    "gym",
    "stocks investing",
    "PC gaming",
    "futures trading",
    "existence philosophy",
  ],
  skills: {
    webDevelopment: ["React", "NextJS", "JavaScript"],
    backend: ["Node.js", "SQL (PostgreSQL)", "NoSQL (MongoDB)"],
    business: ["GitLab", "Atlassian Jira/Confluence"],
  },
};

export default function Component() {
  return (
    <main>
      <Collapse bordered={true} accordion>
        <Collapse.Panel header={<Title level={4}>Preamble</Title>} key="0">
          <Text>
            World economic system faced newborn asset class.
            <br />
            It is still underestimated how safe and transparent financials
            becomes.
            <br />
            After couple years of spectating crypto-community i conclude it
            lacks economics and value POV expertize.
            <br />
            It is not a big secret that at some point we all chasing profits.
            <br />
            But i beg you not to forget that hype is similar to rising tide and
            as one wise man said:
          </Text>
          <Text italic>
            <br />
            "A rising tide floats all boats….. only when the tide goes out do
            you discover who's been swimming naked."
          </Text>
        </Collapse.Panel>
        <Collapse.Panel header={<Title level={4}>Statement</Title>} key="1">
          <Text>
            Unity is only be possible by achieving this two goals:
            <br />
            First goal is to set up and sustain reliable, robust, low comission
            validator.
            <br />
            Second goal is to contribute to community using skills i have by
            making proposals or creating own products.
          </Text>
        </Collapse.Panel>
        <Collapse.Panel header={<Title level={4}>About</Title>} key="2">
          <Text>
            <pre style={{ fontSize: "smaller" }}>
              {JSON.stringify(data, null, 2).trim()}
            </pre>
          </Text>
        </Collapse.Panel>
      </Collapse>
    </main>
  );
}
