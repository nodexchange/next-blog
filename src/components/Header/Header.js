import React from 'react'
import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const headerStyle = {
  textAlign: 'center'
}

const Header = () => (
  <div style={headerStyle}>
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
    <Link href="/static/robots.txt">
      <a style={linkStyle}>robots.txt</a>
    </Link>
    <Link href="/graphql">
      <a style={linkStyle}>Graphql - simulator</a>
    </Link>
    <Link href="/static/sitemap.xml">
      <a style={linkStyle}>sitemap</a>
    </Link>
    <Link href="/static/favicon.ico">
      <a style={linkStyle}>favicon</a>
    </Link>
    <Link href="/graphql">
      <a style={linkStyle}>Graphql - simulator</a>
    </Link>
    <Link href="/apidemo">
      <a style={linkStyle}>apidemo</a>
    </Link>
  </div>
)

export default Header