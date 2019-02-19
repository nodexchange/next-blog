/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'

import App from '../pages/index.js'
import MockData from './mocks/data.mock'

describe('Pages/index.js', () => {
  it('Title prop should match the render', () => {
    const wrap = mount(<App title="Hello Next.js" shows={[]} />)
    expect(wrap.find('#main').text()).toBe('Hello Next.js')
  })
  // it('App shows "Hello world!"', () => {
  //   // console.log(MockData);
  //   const app = shallow(<App shows={MockData} />)
  //   // console.log(app.find('a').text());
  //   // console.log;
  //     // app.contains('a').to.be(true)
  //   expect(app.find('Link')).toEqual(2);
  //   // expect(app.find('p').text()).toEqual('Hello World!')
  //   // expect(2).toBe(2);
  // })
  it('<Li> should match the shows data', () => {
    // const component = renderer.create(<App />)
    // const tree = component.toJSON()
    const wrap = mount(<App title="Hello Next.js" shows={[]} />)
    // console.log(tree);
    // expect(wrap.find('#main').text()).toBe('Hello Next.js')
    // console.log(wrap.debug());
    expect(wrap.find('Link')).toHaveLength(3);
  
  });
})

describe('With Snapshot Testing', () => {
  it('App shows "Hello world!"', () => {
    const component = renderer.create(<App title="Hello Next.js" shows={[]} />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})


