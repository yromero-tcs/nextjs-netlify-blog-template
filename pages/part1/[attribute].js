import { attributes, react as Part1Content } from '../../content/part1/part1.en.md';
import { useEffect, useState } from 'react';

const glob = require('glob');

const Part1Page = (props) => {
  const { name, displayName, tooltip, levels } = props;
  const { title } = attributes;

  return (
    <article>
      <h1>{title}</h1>
      <Part1Content />
      <h2>{displayName}</h2>
      <h3>{tooltip}</h3>
      {levels.map((level) => {
        return <Level name={name} levelName={level.level}/>
      })}
    </article>
  )
}

function Level(props) {
  const { name, levelName } = props;

  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const data = await getLevelData(name, levelName);
      setData(data);
    }

    fetchData();
  }, []);
  
  return <div key={levelName}>
    <p>{data.displayName}</p>
    <p>{data.tooltip}</p>
  </div>;
}

async function getLevelData(attributeName, levelName) {

  const content = await import(`../../content/levels/${attributeName}/${levelName}.en.md`);

  return {
    displayName: content.attributes.displayName,
    tooltip: content.attributes.tooltip,
  }
}

export async function getStaticProps({ params }) {
  const { attribute } = params;
  const content = await import(`../../content/attributes/${attribute}.en.md`);

  return {
    props: {
      name: content.attributes.name,
      displayName: content.attributes.displayName,
      tooltip: content.attributes.tooltip,
      levels: content.attributes.levels
    },
  }
}

export async function getStaticPaths() {
  const attributeFiles = glob.sync('content/attributes/**/*.en.md')

  const attributes = attributeFiles.map(file =>
    file
      .split('/')[2]
      .split('.')[0]
      .trim()
  )

  const paths = attributes.map(attributeName => `/part1/${attributeName}`)

  return {
    paths,
    fallback: false,
  }
}

export default Part1Page;