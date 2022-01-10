import Link from 'next/link';

const Index = () => (
  <div>
    Hello World.{' '} <br/>
    <Link href="/about">
      <a>About</a>
    </Link>
    <br/>
    <Link href="/part1">
      <a>Part 1</a>
    </Link>
  </div>
);

export default Index;