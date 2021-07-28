import React, { Component } from 'react';
import mastercraft from './logo-mastercraft.svg'
import bookmark from './icon-bookmark.svg'
import ModalBack from './ModalBack';
import ModalThanks from './ModalThanks';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // Display for Back this project Modal
            modalBack: 'd-none',
            // Display for Thanks Modal
            modalThanks: 'd-none',
        }
        this.backProject = this.backProject.bind(this)
        this.closeBackProject = this.closeBackProject.bind(this)
        this.openSuccess = this.openSuccess.bind(this)
    }
    // Function to Open Back Project Modal
    backProject() {
        this.setState({
            modalBack: 'modal-back'
        })
    }

    // Function to close Back Project Modal
    closeBackProject() {
        this.setState({
            modalBack: 'd-none',
        })
    }
    // Function to bring out the success modal
    openSuccess(displayData) {
        var jan = document.getElementsByClassName('user-input')
        for (let i = 0; i < jan.length; i++) {
            console.log(jan[i].value)
            if (jan[i].value !== "") {

                this.setState({
                    modalThanks: displayData
                })
            }
            else {
                alert('Enter a Value')
            }

        }


    }


    render() {
        return (
            <div className='d-flex align-items-center justify-content-center flex-column'>
                {/* We are going to bring Thank you modal so that we can add the fix property to it */}
                <ModalBack reCallback={this.openSuccess} mod={this.state.modalBack} closemod={this.closeBackProject} />

                <ModalThanks display={this.state.modalThanks} />

                <div className="d-flex flex-column align-content-center justify-content-center" style={{
                    marginTop: '-89px',
                }}>

                    <div className="d-flex align-items-center justify-content-center">
                        <img src={mastercraft} alt='mastercraft' style={{ marginBottom: '-19px', zIndex: '9' }} />
                    </div>
                    <div className="card mr-auto ml-auto text-center col-lg-12 col-11 pb-4 pt-4" >
                        <div className="card-body pb-4">
                            <h3 className="card-title font-weight-bolder">Mastercraft Bamboo Monitor Riser</h3>
                            <p className="text-muted card-subtitle mt-3" style={{ lineHeight: '1.7rem', fontWeight: '450' }}>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>

                            <div className='d-flex align-items-end justify-content-center justify-content-lg-between col-12 pt-4 mr-auto ml-auto'>
                                <button className="card-link btn btn-continue text-white mt-2" onClick={this.backProject} style={{
                                    padding: '10px 18px',
                                    borderRadius: '38px',
                                    backgroundColor: 'hsl(176, 50%, 47%)',
                                    borderStyle: 'none'
                                }} >Back this project</button>
                                <button className="btn card-link bookmark">
                                    <img src={bookmark} alt='bookmark-icon' />
                                </button>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default About;