import React from 'react'
import Header from 'components/layout/header'
import Footer from 'components/layout/footer'

export default () => {
  return (
    <div className="flex flex-col max-h-screen w-full">
      <Header>header</Header>
      <div>content</div>
      <Footer>footer</Footer>
    </div>
  )
}
