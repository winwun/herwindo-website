import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Experience',
    Svg: require('@site/static/img/undraw_experience.svg').default,
    description: (
      <>
        I have over a decade of experience creating and architecting web applications that are used by a lot of people
      </>
    ),
  },
  {
    title: 'Passion',
    Svg: require('@site/static/img/undraw_passion.svg').default,
    description: (
      <>
        I am problem solver who loves to drill down and solve software problems and share to my peers
      </>
    ),
  },
  {
    title: 'Enjoy',
    Svg: require('@site/static/img/undraw_enjoy.svg').default,
    description: (
      <>
        I enjoy playing games, watching youtube and spending time with my family ❤️
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
