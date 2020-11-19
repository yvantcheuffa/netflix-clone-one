import React, {useContext, useEffect, useState} from "react";
import {FirebaseContext} from "../context/firebase";
import {Card, Header, Loading, Player} from '../components';
import * as ROUTES from '../constants/routes';
import {FooterContainer} from './footer';
import Fuse from "fuse.js";

export default function BrowseContainer({slides}) {
    const {firebase} = useContext(FirebaseContext);
    const user = firebase.auth().currentUser || {};
    const [profile, setProfile] = useState({});
    const [category, setCategory] = useState('series');
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [slideRows, setSlideRows] = useState([]);
    const [tempSlideRows, setTempSlideRows] = useState([]);


    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1500)
    }, [profile.displayName])

    useEffect(() => {
        setSlideRows(slides[category]);
    }, [category, slides]);

    useEffect(() => {


        const options = {
            shouldSort: true,
            includeMatches: true,
            threshold: 0.1,
            location: 0,
            distance: 100,
            maxPatternLength: 32,
            minMatchCharLength: 1,
            keys: [
                "data.title"
            ]
        };

        const fuse = new Fuse(
            slideRows,
            options
        );

        const results = fuse.search(searchTerm).map(resultItem => {
            console.log(resultItem)
            return resultItem.item;
        });
        if (searchTerm) {
            if (results.length > 0) {
                setTempSlideRows(results);
            } else {
                setTempSlideRows([]);
            }
        } else {
            setSlideRows(slides[category])
        }
    }, [searchTerm])

    return (
        <>
            {
                loading ?
                    <Loading/> : <Loading.ReleaseBody/>
            }
            <Header src='/images/misc/joker1.jpg' background={true} dontShowOnSmallViewPort>
                <Header.Frame>
                    <Header.Group>
                        <Header.Logo src='/images/logo/logo.svg' to={ROUTES.HOME} alt='Netflix'/>
                        <Header.TextLink active={category === 'series'}
                                         onClick={() => setCategory('series')}>Series</Header.TextLink>
                        <Header.TextLink active={category === 'films'}
                                         onClick={() => setCategory('films')}>Films</Header.TextLink>
                    </Header.Group>
                    <Header.Group>
                        <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
                        <Header.Profile>
                            <Header.Picture src={user.photoURL}/>
                            <Header.DropDown>
                                <Header.Group>
                                    <Header.Picture src={user.photoURL} to={ROUTES.HOME} alt='Netflix'/>
                                    <Header.TextLink>{user.displayName}</Header.TextLink>
                                </Header.Group>
                                <Header.Group>
                                    <Header.TextLink onClick={() => firebase.auth().signOut()}>Sign
                                        Out</Header.TextLink>
                                </Header.Group>
                            </Header.DropDown>
                        </Header.Profile>
                    </Header.Group>
                </Header.Frame>
                <Header.Feature>
                    <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
                    <Header.Text>
                        Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the street
                        of Gotham city.
                        Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he
                        projects in a futile attempt
                        to feel like he's part of the world around him.
                    </Header.Text>
                    <Header.PlayButton>
                        Play
                    </Header.PlayButton>
                </Header.Feature>
            </Header>
            <Card.Group>
                {
                    searchTerm ?
                        (slideRows.length <= 0 ? <h1 style={{
                                color: "white",
                                textAlign: "center",
                                fontWeight: "500",
                                padding: "100px 20px"
                            }}>Sorry, we could not find movies or series matching your query.</h1>
                            :
                            tempSlideRows.map(slideItem => (
                                slideItem.data.length > 0 && (
                                    <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
                                        <Card.Title>{slideItem.title}</Card.Title>
                                        <Card.Entities>
                                            {
                                                slideItem.data.map(item => (
                                                    <Card.Item key={item.docId} item={item}>
                                                        <Card.Image
                                                            src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}/>
                                                        <Card.Meta>
                                                            <Card.SubTitle>
                                                                {item.title}
                                                            </Card.SubTitle>
                                                            <Card.Text>
                                                                {item.description}
                                                            </Card.Text>
                                                        </Card.Meta>
                                                    </Card.Item>
                                                ))
                                            }
                                        </Card.Entities>
                                        <Card.Feature category={category}>
                                            <Player>
                                                <Player.Button/>
                                                <Player.Video src='/videos/bunny.mp4'/>
                                            </Player>
                                        </Card.Feature>
                                    </Card>
                                )
                            ))) : (
                            slideRows?.map(slideItem => (
                                slideItem.data.length > 0 && (
                                    <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
                                        <Card.Title>{slideItem.title}</Card.Title>
                                        <Card.Entities>
                                            {
                                                slideItem.data.map(item => (
                                                    <Card.Item key={item.docId} item={item}>
                                                        <Card.Image
                                                            src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}/>
                                                        <Card.Meta>
                                                            <Card.SubTitle>
                                                                {item.title}
                                                            </Card.SubTitle>
                                                            <Card.Text>
                                                                {item.description}
                                                            </Card.Text>
                                                        </Card.Meta>
                                                    </Card.Item>
                                                ))
                                            }
                                        </Card.Entities>
                                        <Card.Feature category={category}>
                                            <Player>
                                                <Player.Button/>
                                                <Player.Video src='/videos/bunny.mp4'/>
                                            </Player>
                                        </Card.Feature>
                                    </Card>
                                )
                            ))
                        )
                }
            </Card.Group>
            <FooterContainer/>
        </>
    );

}