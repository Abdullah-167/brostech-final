import React from 'react'
import HomeWebFlow from './word_press_home/HomeWebFlow'
import Bespoke from './bespokeSolution/Bespoke'
import WebFlow from './certified_expert/WebFlow'
import TopNotchDesign from './notch/TopNotchDesign'
import BlogContent from './blog/BlogContent'
import WebflowFooter from './footer/WebflowFooter'


export default function Wordpress() {
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
