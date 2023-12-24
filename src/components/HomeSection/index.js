import React from 'react'
import { HomeContainer, HomeBg, HomeLeftContainer, Img, HomeRightContainer, HomeInnerContainer, TextLoop, Title, Span, SubTitle,SocialMediaIcons,SocialMediaIcon, ResumeButton } from './HomeStyle'
import HomeImg from '../../images/mephoto.png'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';

const HomeSection = () => {
    return (
        <div id="about">
            <HomeContainer>
                <HomeBg>
                </HomeBg>
                <HomeInnerContainer >
                    <HomeLeftContainer id="Left">
                        <Title>Hi, I am <br /> {Bio.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <ResumeButton href={Bio.resume} target='display'>Download CV</ResumeButton>
                    </HomeLeftContainer>

                    <HomeRightContainer id="Right">

                        <Img src={HomeImg} alt="home-image" />
                    </HomeRightContainer>
                </HomeInnerContainer>

            </HomeContainer>
        </div>
    )
}

export default HomeSection