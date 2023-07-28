import React, { useEffect, useState } from 'react';
import { GridContainer } from '../../styles/GridContainer.style';
import { HeaderContainer } from './style';

function Component() {
    let [audioId, setAudioId] = useState(0);

    useEffect(() => {
        if (audioId === 0) return;

        document.querySelectorAll('audio').forEach(e => e.pause());

        let audio = new Audio(`/audio/meow${audioId}.mp3`);
        audio.play();

        if (audioId >= 4) setAudioId(0);
    }, [audioId]);

    return (
        <>
            <span id="top"></span>
            <HeaderContainer>
                <GridContainer>
                    <h2><a href="#top" onClick={() => setAudioId(audioId + 1)}>Meow</a></h2>
                    <ul>
                        <li><a href="#experience">Experiência</a></li>
                        <li ><a href="#education">Formação</a></li>
                        <li><a href="#contact">Contato</a></li>
                    </ul>
                </GridContainer>
            </HeaderContainer>
        </>
    );
}

export default Component;