import React from 'react'
import HomeWebFlow from './webflow/HomeWebFlow'
import Bespoke from './bespokeSolution/Bespoke'
import WebFlow from './certified_expert/WebFlow'
import TopNotchDesign from './notch/TopNotchDesign'
import BlogContent from './blog/BlogContent'
import WebflowFooter from './footer/WebflowFooter'

export default function Webflow() {
  return (
    <>
      <HomeWebFlow/>
      <Bespoke/>
      <WebFlow/>
      <TopNotchDesign/>
      <WebflowFooter/>
    </>
  )
}
