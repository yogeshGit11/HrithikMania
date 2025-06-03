export default function Contact() {
    return (
        <div>
            <div
                className="contactpage"
                style={{
                    backgroundImage: `url('hrcontact.jpg')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <h1 className="text-light mt-2 text-center offset-3" style={{ backgroundColor: 'purple', borderRadius: '15px' }}>
                                CONTACT & FOLLOW
                            </h1>

                            <div className="form offset-3 p-2">
                                <form>
                                    <label className="h6">Name:</label>
                                    <input type="text" placeholder="Your Name" name="name" className="form-control" />

                                    <label className="h6 mt-2">Email:</label>
                                    <input type="email" placeholder="Your Email" name="email" className="form-control" />

                                    <label className="h6 mt-2">Message:</label>
                                    <textarea placeholder="Enter something..." rows="5" className="form-control" />

                                    <input type="button" value="Send" className="btn btn-dark mt-2" />
                                </form>
                            </div>

                            <div className="social offset-3 p-2 mt-4">
                                <h3 className="text-center bg-warning mt-2">Follow Hrithik on Social Media</h3>

                                <a
                                    href="https://www.instagram.com/hrithikroshan/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-danger h1 offset-2"
                                >
                                    <i className="fa-brands fa-square-instagram"></i>
                                </a>

                                <a
                                    href="https://twitter.com/iHrithik/status/1673274249841369090"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary h1 offset-2"
                                >
                                    <i className="fa-brands fa-twitter"></i>
                                </a>

                                <a
                                    href="https://www.facebook.com/hrithikroshan/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary h1 offset-2"
                                >
                                    <i className="fa-brands fa-square-facebook"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
