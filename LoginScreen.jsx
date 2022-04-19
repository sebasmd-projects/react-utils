import React from 'react'
import './LoginScreen.css';

export const LoginScreen = () => {
    return (
        <div className="section auth">
            <div className="container">
                <div className="row full-height justify-content-center">
                    <div className="col-12 text-center align-self-center py-5">
                        <div className="section pb-5 pt-5 pt-sm-2 text-center">
                            <h6 class="h6Auth mb-0 pb-3" >
                            
                                <span className='ml-3'> Log In </span>
                                <span> Sign Up </span>
                            
                            </h6>
                            
                            <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" /><label htmlFor="reg-log"></label>

                            <div className="card-3d-wrap mx-auto">
                                <div className="card-3d-wrapper">

                                    {/* Login */}
                                    <div className="card-front">
                                        <div className="center-wrap">
                                            <div className="section text-center">
                                                <h4 className="h4Auth mb-4 pb-3">Log In</h4>
                                                <div className="form-group">
                                                    <input
                                                        type="email"
                                                        name="logemail"
                                                        className="form-style"
                                                        placeholder="Your Email"
                                                        id="logemail"
                                                        autoComplete="off"
                                                    />
                                                    <i className="input-icon uil uil-at"></i>
                                                </div>
                                                <div className="form-group mt-2">
                                                    <input
                                                        type="password"
                                                        name="logpass"
                                                        className="form-style"
                                                        placeholder="Your Password"
                                                        id="logpass"
                                                        autoComplete="off"
                                                    />
                                                    <i className="input-icon uil uil-lock-alt"></i>
                                                </div>
                                                <button className="btn btn-success mt-4">Login</button>
                                                <p className="paragraph mb-0 mt-4 text-center">
                                                    <a href='/' className="linkAuth anchor">Forgot your password?</a></p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Register */}
                                    <div className="card-back">
                                        <div className="center-wrap">
                                            <div className="section text-center">
                                                <h4 className="h4Auth mb-4 pb-3">Sign Up</h4>
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        name="regname"
                                                        className="form-style"
                                                        placeholder="Your Full Name"
                                                        id="regname"
                                                        autoComplete="off"
                                                    />
                                                    <i className="input-icon uil uil-user"></i>
                                                </div>
                                                <div className="form-group mt-2">
                                                    <input
                                                        type="email"
                                                        name="regemail"
                                                        className="form-style"
                                                        placeholder="Your Email"
                                                        id="regemail"
                                                        autoComplete="off"
                                                    />
                                                    <i className="input-icon uil uil-at"></i>
                                                </div>
                                                <div className="form-group mt-2">
                                                    <input
                                                        type="password"
                                                        name="regpass"
                                                        className="form-style"
                                                        placeholder="Password"
                                                        id="regpass"
                                                        autoComplete="off"
                                                    />
                                                    <i className="input-icon uil uil-lock-alt"></i>
                                                </div>
                                                <div className="form-group mt-2">
                                                    <input
                                                        type="password"
                                                        name="regpass2"
                                                        className="form-style"
                                                        placeholder="Repeat Password"
                                                        id="regpass2"
                                                        autoComplete="off"
                                                    />
                                                    <i className="input-icon uil uil-lock-alt"></i>
                                                </div>
                                                <button className="btn btn-success mt-4">Register</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
