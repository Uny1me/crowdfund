import React, { Component } from 'react';
import closeModal from './icon-close-modal.svg'

class ModalBack extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 'd-none',
            displayOne: 'd-none',
            displayDiv: "d-none sub-div align-items-md-center align-items-lg-center flex-column flex-md-row flex-lg-row justify-content-between pr-lg-1 pl-md-3 pl-2",
            displayDivOne: "d-none sub-div align-items-md-center align-items-lg-center flex-column flex-md-row flex-lg-row justify-content-between pr-lg-1 pl-md-3 pl-2",
        }
        this.handleCheck = this.handleCheck.bind(this)
    }

    handleCheck() {
        // Getting Radio input
        let main = document.getElementsByName('radio-one')

        // Looping to check what radio input is used
        for (let i = 0; i < main.length; i++) {


            if (main[i].checked) {
                let subInput = main[i].parentElement.parentNode.parentElement.getElementsByClassName('user-input');

                if (main[i].value === 'reward') {
                    console.log(subInput)
                    this.setState({
                        display: 'd-none',
                        displayDiv: 'd-none',
                        displayOne: 'd-block',
                        displayDivOne: 'd-flex sub-div align-items-md-center align-items-lg-center flex-column flex-md-row flex-lg-row justify-content-between pr-lg-1 pl-md-3 pl-2'
                    })
                }
                else if (main[i].value === 'stand') {
                    this.setState({
                        displayOne: 'd-none',
                        displayDivOne: "d-none sub-div align-items-md-center align-items-lg-center flex-column flex-md-row flex-lg-row justify-content-between pr-lg-1 pl-md-3 pl-2",
                        display: 'd-block',
                        displayDiv: 'd-flex sub-div align-items-md-center align-items-lg-center flex-column flex-md-row flex-lg-row justify-content-between pr-lg-1 pl-md-3 pl-2'
                    })
                }

            }
        }

    }


    render() {
        return (
            <div>
                <div className={this.props.mod} style={{ position: 'absolute', zIndex: '99', transform: 'translate(-50%, 0%)' }}>

                    <div className="card col-11 col-sm-9 col-md-7 col-lg-6 mr-auto ml-auto" id='mainDiv'>
                        <div className="card-body pt-4 pb-5">
                            <form>
                                <h5 className="d-flex align-items-center card-title justify-content-between font-weight-bolder">Back this project
                                    <button className="btn" type="button" style={{ background: 'transparent', border: 'none' }}>
                                        <img src={closeModal} alt='close' onClick={this.props.closemod} />
                                    </button>
                                </h5>

                                <h6 className="text-muted card-subtitle pt-2 pb-4" style={{ fontSize: '16px' }}>
                                    Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?
                                    <br />
                                </h6>

                                <div className="card" style={{ borderRadius: '10px' }}>
                                    <div className="card-body">
                                        <div className="d-flex justify-content-start align-items-center">
                                            <input type="radio" value='reward' onClick={this.handleCheck} name='radio-one' style={{ width: '20px', height: '22px' }} />
                                            <h6 style={{ marginTop: '6px', paddingLeft: '16px', fontWeight: 'bold' }}>Pledge with no reward</h6>
                                        </div>
                                        <h6 className="text-muted font-weight-light pb-4 pt-3" style={{ lineHeight: '1.5rem', width: '100%' }}>
                                            Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.
                                            <br />
                                        </h6>
                                        <p style={{ fontSize: '20px' }}>
                                            <b>101</b>
                                            <span className='ml-2 dark-gray' style={{ fontSize: '14px' }}>left</span>
                                        </p>
                                    </div>
                                    <hr className={this.state.displayOne} style={{ height: '1px', background: 'hsl(0, 0%, 78%)', width: '100%' }} />
                                    <div className={this.state.displayDivOne}>
                                        <h6 className="text-center dark-gray">Enter your pledge</h6>
                                        <div className="d-flex align-items-center justify-content-md-end justify-content-center" style={{ padding: '21px' }}>

                                            <div className="col-xs-3 col-sm-5 col-lg-5 col-md-5 d-flex align-items-center">
                                                <label className="sr-only">Plede</label>
                                                <div className="input-group mb-2 pr-1 pl-1" style={{ borderRadius: '20px', border: '1px solid #E9ECEF' }}>
                                                    <div className="input-group-prepend">
                                                        <div className="input-group-text font-weight-bolder" style={{ border: 'none', background: 'none' }}>$</div>
                                                    </div>
                                                    <input type="number" style={{ borderRadius: '20px', border: 'none' }} className="user-input form-control w-25" id="pledgeWithNoReward" />
                                                </div>
                                            </div>
                                            <button className="btn btn-continue text-white" onClick={this.props.reCallback} type="button" style={{ borderRadius: '20px', border: 'none', fontWeight: 'bold', fontSize: '12px', paddingTop: '10px', paddingBottom: '10px', paddingRight: '16px', paddingLeft: '16px', background: 'hsl(176, 50%, 47%)' }}>Continue </button>
                                        </div>
                                    </div>
                                </div>


                                <div className="card mt-4" style={{ borderRadius: '10px' }}>
                                    <div className="card-body">
                                        <div className="d-flex justify-content-start align-items-center">
                                            <input type="radio" onChange={this.handleCheck} name='radio-one' id='radioTwo' value='stand' style={{ width: '25px', height: '40px' }} />
                                            <div>
                                                <h6 style={{ marginTop: '6px', paddingLeft: '16px', fontWeight: 'bold' }}>Bamboo Stand Pledge<br /></h6>
                                                <h6 className='pl-3 font-weight-bolder mod-cyan'>Pledge $75 or more</h6>
                                            </div>
                                        </div>
                                        <h6 className="text-muted font-weight-light pb-4 pt-3" style={{ lineHeight: '1.5rem', width: '100%' }}>
                                            You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
                                            you’ll be added to a special Backer member list.
                                            <br />
                                        </h6>
                                        <p style={{ fontSize: '20px' }}>
                                            <b>64</b>
                                            <span className='ml-2 dark-gray' style={{ fontSize: '14px' }}>left</span>
                                        </p>
                                    </div>
                                    <hr className={this.state.display} style={{ height: '1px', background: 'hsl(0, 0%, 78%)', width: '100%' }} />
                                    <div className={this.state.displayDiv}>
                                        <h6 className="text-center dark-gray">Enter your pledge</h6>
                                        <div className="d-flex align-items-center justify-content-md-end justify-content-center" style={{ padding: '21px' }}>

                                            <div className="col-xs-3 col-sm-5 col-lg-5 col-md-5 d-flex align-items-center">
                                                <label className="sr-only">Plede</label>
                                                <div className="input-group mb-2 pr-1 pl-1" style={{ borderRadius: '20px', border: '1px solid #E9ECEF' }}>
                                                    <div className="input-group-prepend">
                                                        <div className="input-group-text font-weight-bolder" style={{ border: 'none', background: 'none' }}>$</div>
                                                    </div>
                                                    <input type="number" style={{ borderRadius: '20px', border: 'none' }} className="user-input form-control w-25" id="pledgeWithNoReward" />
                                                </div>
                                            </div>
                                            <button className="btn btn-continue text-white" onClick={this.props.reCallback} type="button" style={{ borderRadius: '20px', border: 'none', fontWeight: 'bold', fontSize: '12px', paddingTop: '10px', paddingBottom: '10px', paddingRight: '16px', paddingLeft: '16px', background: 'hsl(176, 50%, 47%)' }}>Continue </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card" style={{ marginTop: '16px', filter: 'opacity(.6)' }}>
                                    <div className="card-body">
                                        <div className="d-flex justify-content-start align-items-center"><input type="radio" disabled style={{ width: '25px', height: '40px' }} />
                                            <div>
                                                <h6 style={{ marginTop: '6px', paddingLeft: '16px', fontWeight: 'bold' }}>Mahogany Special Edition<br /></h6>
                                                <h6 className='pl-3 font-weight-bolder mod-cyan'>Pledge $200 or more</h6>
                                            </div>
                                        </div>
                                        <h6 className="text-muted font-weight-light pb-4 pt-3" style={{ lineHeight: '1.5rem', width: '100%' }}>
                                            You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
                                            to our Backer member list. Shipping is included.
                                        </h6>
                                        <p style={{ fontSize: '20px' }}>
                                            <b>0</b>
                                            <span className='ml-2 dark-gray' style={{ fontSize: '14px' }}>left</span>
                                        </p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalBack;