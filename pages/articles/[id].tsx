import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";
import { getArticle } from "../../components/data";
import React from "react";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";

const Article: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const article = getArticle(id as string);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App - Article</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Nav />
        {article && <h1 className={styles.title}>{article.name}</h1>}
      </main>

      <Footer />
    </div>
  );
};

export default Article;