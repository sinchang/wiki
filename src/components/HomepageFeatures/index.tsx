import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

type FeatureItem = {
  title: string
  Svg: React.ComponentType<React.ComponentProps<'svg'>>
  description: JSX.Element
}

const FeatureList: FeatureItem[] = [
  {
    title: 'Frontend Developer',
    Svg: require('@site/static/img/undraw_programming_re_kg9v.svg').default,
    description: (
      <>
        Have been a frontend developer since 2016, now focusing on React
        community.
      </>
    ),
  },
  {
    title: 'Life',
    Svg: require('@site/static/img/undraw_walk_in_the_city_re_039v.svg')
      .default,
    description: <>Living in Shanghai, born and raised in Cangnan, Zhejiang.</>,
  },
  {
    title: 'Hobby',
    Svg: require('@site/static/img/undraw_basketball_re_fsbx.svg').default,
    description: <>Like to play basketball.</>,
  },
]

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className='text--center'>
        <Svg className={styles.featureSvg} role='img' />
      </div>
      <div className='text--center padding-horiz--md'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
