import React, {useState, useContext, createContext} from 'react';
import ReactDOM from 'react-dom';
import {
    Container,
    Inner,
    Overlay,
    Button,
    Close,
} from './styles/Player';

export const PlayerContext = createContext(null);

export default function Player({ children, ...restProps }) {
    const [showPlayer, setShowPlayer] = useState(false);

    return (
        <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
            <Container {...restProps}>
                {children}
            </Container>
        </PlayerContext.Provider>
    );
}

Player.Video = function PlayerVideo({ src, ...restProps }) {
    const {showPlayer, setShowPlayer} = useContext(PlayerContext);

    return showPlayer ? (
        ReactDOM.createPortal(
            <Overlay onClick={() => setShowPlayer(false)}>
                <Inner>
                    <video controls id='netflix-clone-player'>
                        <source src={src} type='video/mp4' />
                    </video>
                    <Close />
                </Inner>
            </Overlay>,
            document.body
        )
    ) : null;
}

Player.Button = function PlayerButton({ children, ...restProps }) {
    const {setShowPlayer} = useContext(PlayerContext);

    return (
        <Button onClick={() => setShowPlayer(showPlayer => !showPlayer)} {...restProps}>
            Play
        </Button>
    );
}