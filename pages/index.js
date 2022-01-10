import Head from "next/head"
import { Component } from 'react'
import { content, react as Part1Content } from '../content/part1/part1.md';

export default class Part1 extends Component {
  render() {
    let { title, attributes } = content;
    return (
      <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <article>
          <h1>{title}</h1>
          <Part1Content />
          <ul>
            {attributes.map((attribute, k) => (
              <li key={k}>
                <h2>{attribute.name}</h2>
                <p>{attribute.tooltip}</p>
              </li>
            ))}
          </ul>
        </article>
      </>
    )
  }
}