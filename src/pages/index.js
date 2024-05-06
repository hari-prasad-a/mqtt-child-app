import Head from "next/head";
import { Divider, Row, Col, Button } from 'antd';
import { useRouter } from "next/router";
import styles from "@/styles/Home.module.css";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Services</title>
        <meta name="description" content="Services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <h3>Services</h3>
          <Divider />
          <Row gutter={20}>
            <Col span={6}>
              <Button onClick={() => router.push('/')}>Back to Home page</Button>
            </Col>
          </Row>
        </div>
      </main>
    </>
  );
}
