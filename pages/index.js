import Link from 'next/link';

const glob = require('glob');

const Index = (props) => {
  const { paths, names } = props;
  
  return ( 
    <div>
      Hello World.{' '} <br/>
      <Link href="/about">
        <a>About</a>
      </Link>
      <br/>
      {paths.map((path, index) => {
        return <div key={index}>
        <Link href={path}>
          <a>{names[index]}</a>
        </Link>
        <br/>
        </div>
      })}
    </div>
  )
}

export async function getStaticProps() {
  const attributeFiles = glob.sync('content/attributes/**/*.en.md');

  const attributes = attributeFiles.map(file =>
    file
      .split('/')[2]
      .split('.')[0]
      .trim()
  )

  return {
    props: {
      paths: attributes.map(attributeName => `/part1/${attributeName}`),
      names: attributes
    }
  }
}

export default Index;