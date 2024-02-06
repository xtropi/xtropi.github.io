"use client"

import { Divider, Space, Typography } from "antd";
import Link from "next/link";
const { Text, Link: UiLink, Title } = Typography;
export default function Component() {
  return (
    <main>
      <Title level={4}>
        Solana validator information such as location, hardware, software, total stake, APY
      </Title>
      <Divider />
      <Text>
        CPU: AMD EPYC 32 Core 3.2 GHz<br />
        Memory: 512 GB<br />
        Location: London, England<br />
        Operating System: Ubuntu 20.x<br />
      </Text>
      <Divider />
      <Space direction="vertical">
        <Link target="_blank" href={'https://solana.org/sfdp-validators/EbTx1su8tBFdt8fhYaKYEDyrU5iVQp3DQfPHpsaRv8qu'}>TDS22</Link>
        <Link target="_blank" href={'https://metrics.stakeconomy.com/d/f2b2HcaGz/solana-community-validator-dashboard?orgId=1&refresh=1m&var-pubkey=G5Q3EBSkTg4xw72nJr5aoYP8zRdAFZaKGEozpFZtFRu7&var-server=Mukh.tar&var-inter=1m&var-netif=eth0&var-version=&from=now-7d&to=now'}>Grafana Dashboard</Link>
      </Space>
    </main>
  );
}
