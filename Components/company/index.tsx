import React from 'react'
import Heero from './sections/Heero'
import Team from './sections/Team'
import Mission from './sections/Mission'
import CardData from './sections/CardData'
import Team_Experience from './sections/Team_Experience'
import Better_together from './sections/Better_together'
import Technologies from './sections/Technologies'

export default function Company() {
  return (
    <>
      <Heero/>
      <Team_Experience/>
      <Team/>
      
      <CardData/>
      
      <Mission/>
      <Better_together/>
      <Technologies/>
    </>
  )
}
