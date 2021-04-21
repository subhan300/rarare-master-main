import React from 'react'
import Reinvite from '../../Components/homeComp/reinvite'
import WhatWeDo from '../../Components/homeComp/whatWeDo'
import VoiceHeard from '../../Components/homeComp/voiceHeard'
import Issues from '../../Components/homeComp/issues'
import GetInspired from '../../Components/homeComp/getinspired'
import Proposal from '../../Components/homeComp/proposal'
import Community from '../../Components/homeComp/community'
import Survey from '../../Components/homeComp/survey'
import Report from '../../Components/homeComp/report'
import Partner from '../../Components/homeComp/partner'
import JoinCommunity from '../../Components/homeComp/joinCommunity'
import HelpCartoon from '../../Components/homeComp/helpCartoon'
import './home.css'

const Home = () => {
    return (
        <div>
            <HelpCartoon />
            <Reinvite />
            <WhatWeDo />
            <VoiceHeard />
            <Issues />
            <GetInspired />
            <Proposal />
            <Community />
            <Survey />
            <Report />
            <Partner />
            <JoinCommunity />
          
        </div>
    )
}

export default Home
