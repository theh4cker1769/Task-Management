import React from 'react'
import Slider from "react-slick";

const Signup = () => {
    // Static Images
    const logo = `${process.env.PUBLIC_URL}/assets/images/logo.png`;
    const sliderImg1 = `${process.env.PUBLIC_URL}/assets/images/slider-1.png`;
    const googleIcon = `${process.env.PUBLIC_URL}/assets/images/google-icon.png`;

    // Slider Settings
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <section className='sign-up'>
            <div className="row">
                <div className="col-sm-6 slider-sec">
                    <img src={logo} alt="Logo" className='logo' />
                    <div className="slider-container">
                        <Slider {...settings}>
                            <div className='item'>
                                <img src={sliderImg1} alt='Slider Image' />
                                <h3 className='title'>Manage your task</h3>
                                <p className='desc'>Welcome to Microbiz! Effortless task management to keep you organized and in control. Easily create, assign, and track tasks. Start managing efficiently today!</p>
                            </div>
                            <div>
                                <h3>2</h3>
                            </div>
                            <div>
                                <h3>3</h3>
                            </div>
                        </Slider>
                    </div>
                </div>
                <div className="col-sm-6 sign-login-section">
                    <div className="main-div">
                        <h1 className='title'>First, enter your email</h1>
                        <p className='desc'>We suggest using the email address <br />
                            you use at work.</p>
                        <form>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Email your email ID" />
                            </div>
                            <button type="submit" className="btn btn-primary">Continue</button>
                        </form>
                        <div class="centered-line-or">
                            <span>OR</span>
                        </div>
                        <button class="google-btn" type="button">
                            <img src={googleIcon} alt="Google sign-in"
                                width="20px" height="20px" />
                            Sign in with Google
                        </button>
                        <div className="login-section">
                            <p>Already using microbiz? <br /> <a href="/login">Sign in to an existing board</a></p>
                        </div>
                    </div>
                    <div className="links">
                        <a href="#">Privacy & Terms</a>
                        <a href="#">Contact US</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Signup