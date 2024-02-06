"use client"

import { Divider, Typography  } from "antd";
import Link from "next/link";
const { Title } = Typography;
const createLink = (value: string)=>{
  return <Link target="_blank" href={value}>{value}</Link>
}

export default function Component() {
  return (
    <main>
      <Title level={4}>Community list</Title>
      <Divider />
      Growing proven guys:
      <Divider />
      Already big guys (200.000+ SOL):
      <li>{createLink('https://margus.one/')}</li>
      <li>{createLink('https://diman.io/')}</li>
      <li>{createLink('https://www.shinobi-systems.com/')}</li>
      <li>{createLink('https://www.leapfrog.systems/')}</li>
      <li>{createLink('https://www.block-smith.com/')}</li>
    </main>
  );
}
