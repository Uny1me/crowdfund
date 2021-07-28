import React from 'react';

import check from './icon-check.svg'

function ModalThanks(props) {
    return (
        <div className={props.display}>

            <div className="p-fix card thanks col-11 col-sm-8 col-lg-4 col-md-6" style={{ top: '0', transform: 'translate(-50%, 20%)', zIndex: '99' }}>
                <div className="card-body d-flex flex-column justify-content-center align-items-center bg-white pb-5" style={{
                    borderRadius: '11px',
                    borderWidth: '8px',
                    // paddingRight: '27px',
                    // paddingLeft: '27px',
                    // paddingBottom: '28px'
                }}>
                    <img src={check} alt='icon-check'></img>
                    <h4 className="text-center font-weight-bolder card-title" style={{
                        marginTop: '19px'
                    }}>Thanks for your support !</h4>
                    <p className="text-center card-text col-12" style={{
                        width: 'auto',
                        fontSize: '15px',
                    }}                        >
                        Your&nbsp;pledge&nbsp;brings&nbsp;us&nbsp;one&nbsp;step&nbsp;closer&nbsp;to sharing&nbsp;Mastercraft&nbsp;Bamboo&nbsp;Monitor&nbsp;Riser&nbsp;worldwide.&nbsp;You&nbsp;will&nbsp;get&nbsp;&nbsp;an&nbsp;email&nbsp;once&nbsp;our&nbsp; campaign&nbsp;is&nbsp;completed.<br />
                    </p>
                    <a className="card-link btn-continue text-center btn text-light" href="/" style={{
                        paddingRight: '22px',
                        fontWeight: '500', paddingLeft: '22px',
                        background: 'hsl(176, 50%, 47%)',
                        borderRadius: '39px', paddingTop: '10px',
                        paddingBottom: '10px',

                    }}>Got it!</a>
                </div>
            </div>
        </div>
    );
}

export default ModalThanks;