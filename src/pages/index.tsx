import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      className={clsx(
        "hero shadow--lw",
        styles.heroBanner,
        styles.heroImage
      )}
    >
      <div className={styles.container}>
        <Heading as="h1" className="hero__title">
          Herwin
        </Heading>
        <div className={clsx("card", styles.tagline)}>
          <div className="card__body">
            {siteConfig.tagline}
          </div>
        </div>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--primary button--lg"
            to="/docs/introduction"
          >
            Get to know me 🙂
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  console.log(clsx(styles['snow'], styles['foreground']));
  return (
    <Layout
      title="Landing Page"
      description="Personal website of Herwin Ochoa"
    >
      {/* <i classNameName="fa-brands fa-github"></i> */}
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
