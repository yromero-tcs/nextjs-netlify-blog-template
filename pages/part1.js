import Head from "next/head"
import { Component } from 'react'
import { attributes, react as Part1Content } from '../content/part1/part1.md';

export default class Part1 extends Component {
  render() {
    let { title, attrs } = attributes;
    return (
      <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <article>
          <h1>{title}</h1>
          <Part1Content />
          <ul>
            {attrs.map((attr, k) => (
              <li key={k}>
                <h2>{attr.name}</h2>
                <p>{attr.tooltip}</p>
              </li>
            ))}
          </ul>
        </article>
      </>
    )
  }
}