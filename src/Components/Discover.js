import React, { Component } from 'react';
import ModalThanks from './ModalThanks';


class Discover extends Component {
    constructor(props) {
        super(props);
        this.state = {
            thankYou: 'd-none'
        }
        this.thankYouModal = this.thankYouModal.bind(this)
    }
    thankYouModal() {
        this.setState({
            thankYou: 'd-block'
        })
    }
    render() {
        return (
            <div className='d-flex flex-column align-items-center justify-content-center'>
                <ModalThanks display={this.state.thankYou} />
                <div className="cardify box-shadow-two col-11 col-lg-6 card mr-auto ml-auto text-center pb-5 pl-5 pr-5">
                    <div className="d-flex flex-column flex-lg-row card-inner">

                        <div className="card-body card-border">
                            <h4 className="card-title font-weight-bolder">$89,914</h4>
                            <h6 className="text-muted card-subtitle mb-2">of $100,000 backed</h6>
                            <hr />
                        </div>
                        <div className="card-body card-border">
                            <h4 className="card-title font-weight-bolder">5,007</h4>
                            <h6 className="text-muted card-subtitle mb-2">total backers</h6>
                            <hr />
                        </div>
                        <div className="card-body">
                            <h4 className="card-title font-weight-bolder">56 </h4>
                            <h6 className="text-muted card-subtitle"> days left</h6>
                        </div>
                    </div>
                    <div className="progress border rounded-pill" style={{ marginTop: '26px' }}>
                        <div className="progress-bar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: '80%', backgroundColor: 'hsl(176, 72%, 28%)' }}></div>
                    </div>
                </div>
                <div className="box-shadow-two card mr-auto ml-auto text-left cardify col-11 col-lg-6">
                    <div className="card-body">
                        <h4 className="card-title font-weight-bolder pb-3">About this project</h4>
                        <p className="text-muted card-subtitle mb-2 pb-3" style={{ lineHeight: '1.6rem' }}>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen
                            to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve
                            your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
                            <br /> <br />
                            Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer
                            to allow notepads, pens, and USB sticks to be stored under the stand.

                        </p>
                        <div className="card mb-4">
                            <div className="card-body">
                                <h5 className="card-title font-weight-bolder">Bamboo Stand</h5>
                                <h6 className="text-muted card-subtitle-two font-weight-bolder mb-3">Pledge $25 or more</h6>
                                <p className="text-muted mb-2 pb-3" style={{ lineHeight: '1.6rem' }}>You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
                                    you’ll be added to a special Backer member list.</p>
                                <h4 className="card-title font-weight-bolder">101<span className='font-weight-lighter'>left</span></h4>
                                <button className="cardify-two btn text-white pl-4 pr-4 pt-2 pb-2 btn-continue" onClick={this.thankYouModal} >Select Reward</button>
                            </div>
                        </div>

                        <div className="card mb-4">
                            <div className="card-body">
                                <h5 className="card-title font-weight-bolder">Black Edition Stand</h5>
                                <h6 className="text-muted card-subtitle-two font-weight-bolder mb-3">Pledge $75 or more</h6>
                                <p className="text-muted mb-2 pb-3" style={{ lineHeight: '1.6rem' }}>You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
                                    member list. Shipping is included.</p>
                                <h4 className="card-title font-weight-bolder">64<span className='font-weight-lighter'>left</span></h4>
                                <button className="cardify-two btn text-white pl-4 pr-4 pt-2 pb-2 btn-continue" onClick={this.thankYouModal} >Select Reward</button>
                            </div>
                        </div>

                        <div className="card mb-4">
                            <div className="card-body">
                                <h5 className="card-title font-weight-bolder">Mahogany Special Edition</h5>
                                <h6 className="text-muted card-subtitle-two font-weight-bolder mb-3">Pledge $200 or more</h6>
                                <p className="text-muted mb-2 pb-3" style={{ lineHeight: '1.6rem' }}>You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
                                    to our Backer member list. Shipping is included.</p>
                                <h4 className="card-title font-weight-bolder">0<span className='font-weight-lighter'>left</span></h4>
                                <button disabled className="cardify-two last btn btn-primary pl-4 pr-4 pt-2 pb-2">Out of stock</button>
                            </div>
                        </div>

                    </div>
                </div >
            </div>
        );
    }
}

export default Discover;