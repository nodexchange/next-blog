import React from 'react'
import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
    <Link href="/next">
      <a style={linkStyle}>Next</a>
    </Link>
    <Link href="/graphqldemo">
      <a style={linkStyle}>Graphql</a>
    </Link>
    <li>
      <a href='/static/robots.txt'>/robots.txt</a>
    </li>
    <li>
      <a href='/static/sitemap.xml'>/sitemap.xml</a>
    </li>
    <li>
      <a href='/static/favicon.ico'>/favicon.ico</a>
    </li>
    <li>
      <a href='/apidemo'>/apidemo</a>
    </li>
  </div>
)

export default Header