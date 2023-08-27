import React from 'react'
import './Features.scss'
import TV from '../../Images/tv.png'
import video from '../../Images/TV-Video.m4v'
import feature2 from '../../Images/feature-2.jpg'
import boxshot from '../../Images/boxshot.png'
import TV2 from '../../Images/device-pile-in.png'
import video2 from '../../Images/TV-Video2.m4v'
import feature4 from '../../Images/feature-4.png'

const Features = () => {
    return (
        <section className='features'>
            <div className="row">
                <div className="text-col">
                    <h2>Enjoy on your TV</h2>
                    <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                </div>
                <div className="img-col">
                    <img src={TV} alt="TV" />
                    <div className="animation1">
                        <video autoPlay muted preload='auto' loop style={{ pointerEvents: "none" }}>
                            <source src={video} type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="img-col">
                    <img src={feature2} alt="Stranger Things" />
                    <div className="card">
                        <div className="img">
                            <img src={boxshot} alt="Stranger Things" />
                        </div>
                        <div className="text">
                            <div className="row1">Stranger Things</div>
                            <div className="row2">Downloading...</div>
                        </div>
                        <div className="download"></div>
                    </div>
                    {/* <div className="animation1">
                        <video autoPlay muted preload='auto' loop style={{ pointerEvents: "none" }}>
                            <source src={video} type="video/mp4" />
                        </video>
                    </div> */}
                </div>
                <div className="text-col">
                    <h2>Download your shows to watch offline</h2>
                    <p>Save your favourites easily and always have something to watch.</p>
                </div>
            </div>
            <div className="row">
                <div className="text-col">
                    <h2>Watch everywhere</h2>
                    <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                </div>
                <div className="img-col">
                    <img src={TV2} alt="TV" style={{ overflowClipMargin: "content-box", overflow: "clip" }} />
                    <div className="animation2">
                        <video autoPlay muted preload='auto' loop style={{ pointerEvents: "none" }}>
                            <source src={video2} type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="img-col">
                    <img src={feature4} alt="feature4" />
                </div>
                <div className="text-col">
                    <h2>Create profiles for kids</h2>
                    <p>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
                </div>
            </div>
        </section>
    )
}

export default Features