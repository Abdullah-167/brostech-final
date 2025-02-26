import React from 'react'
import HomeSection from './sections/HomeSection'
import Counting from './sections/Counting'
import AwardWinning from './sections/Award_warning'
import Solving from './sections/Solving'
import LifeCycle from './sections/LifeCycle'

import ContentCard from './sections/ContentCard'
import Technologies from './sections/Technologies'
import ContactForm from './sections/ContactForm'
import HomwFooter from './sections/HomwFooter'
import VerticalScrollSlider from './sections/VerticalScrollSlider'

export default function MainHome() {
  return (
    <>
      <HomeSection/>
      <Counting/>
      <AwardWinning/>
      <Solving/>
     
      <LifeCycle/>
      {/* <VerticalScrollSlider/> */}
     <ContentCard/>
     <Technologies/>
     {/* <HomwFooter/> */}
    </>
  )
}
