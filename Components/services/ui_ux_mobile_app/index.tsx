import React from 'react'
import HomeWebFlow from './home/HomeWebFlow'
import Bespoke from './bespokeSolution/Bespoke'
import WebFlow from './certified_expert/WebFlow'
import TopNotchDesign from './notch/TopNotchDesign'
import BlogContent from './blog/BlogContent'
import WebflowFooter from './footer/WebflowFooter'

export default function UiUx() {
  return (
    <>
      <HomeWebFlow/>
      <Bespoke/>
      <WebFlow/>
      <TopNotchDesign/>
      <BlogContent/>
      <WebflowFooter/>
    </>
  )
}
