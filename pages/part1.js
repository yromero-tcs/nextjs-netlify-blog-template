import Head from "next/head"
import { Component } from 'react'
import { attributes, react as Part1Content } from '../content/part1/part1.en.md';

export default class Part1 extends Component {
  render() {
    let { title } = attributes;
    return (
      <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <article>
          <h1>{title}</h1>
          <Part1Content />
        </article>
      </>
    )
  }
}