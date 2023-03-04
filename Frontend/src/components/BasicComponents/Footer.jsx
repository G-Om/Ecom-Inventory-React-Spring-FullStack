import { Link } from "react-router-dom"

export const FooterComponent =()=>{
    return(
            <footer className="page-footer font-small" style={{background:"rgb(61,61,61)",color:"white"}}>
                {/* Links section */}
                <div className="container text-center text-md-left">
                    {/* Single Row */}
                    <div className="row">
                        {/* Column 1 */}
                        <div className="col-md-2.5 mx-auto " style={{color:"white"}}>
                        <h6 class="font-weight text-uppercase mt-3 mb-4">Products</h6>
                        <ul class="list-unstyled">
                            <li><Link to={""} style={{color:"white"}}>Trousers</Link></li>
                            <li><Link to={""} style={{color:"white"}}>Trousers</Link></li>
                            <li><Link to={""} style={{color:"white"}}>Trousers</Link></li>
                            <li><Link to={""} style={{color:"white"}}>Trousers</Link></li>
                            <li><Link to={""} style={{color:"white"}}>Trousers</Link></li>
                            <li><Link to={""} style={{color:"white"}}>Trousers</Link></li>
                        </ul>
                        </div>
                        {/* Column 2 */}
                        <div className="col-md-2.5 mx-auto">
                        <h6 class="font-weight text-uppercase mt-3 mb-4">Brands</h6>
                        <ul class="list-unstyled">
                            <li><Link to={""} style={{color:"white"}}>Trousers</Link></li>
                            <li><Link to={""} style={{color:"white"}}>Trousers</Link></li>
                            <li><Link to={""} style={{color:"white"}}>Trousers</Link></li>
                            <li><Link to={""} style={{color:"white"}}>Trousers</Link></li>
                            <li><Link to={""} style={{color:"white"}}>Trousers</Link></li>
                            <li><Link to={""} style={{color:"white"}}>Trousers</Link></li>
                        </ul>
                        </div>
                        {/* Column 3 */}
                        <div className="col-md-2.5 mx-auto">
                        <h6 class="font-weight text-uppercase mt-3 mb-4">Resources</h6>
                        <ul class="list-unstyled">
                            <li><Link to={""} style={{color:"white"}}>Trousers</Link></li>
                            <li><Link to={""} style={{color:"white"}}>Trousers</Link></li>
                            <li><Link to={""} style={{color:"white"}}>Trousers</Link></li>
                            <li><Link to={""} style={{color:"white"}}>Trousers</Link></li>
                            <li><Link to={""} style={{color:"white"}}>Trousers</Link></li>
                            <li><Link to={""} style={{color:"white"}}>Trousers</Link></li>
                        </ul>
                        </div>
                        {/* Column 4 */}
                        <div className="col-md-2.5 mx-auto">
                        <h6 class="font-weight text-uppercase mt-3 mb-4">Company</h6>
                        <ul class="list-unstyled">
                            <li><Link to={""} style={{color:"white"}}>Trousers</Link></li>
                            <li><Link to={""} style={{color:"white"}}>Trousers</Link></li>
                            <li><Link to={""} style={{color:"white"}}>Trousers</Link></li>
                            <li><Link to={""} style={{color:"white"}}>Trousers</Link></li>
                            <li><Link to={""} style={{color:"white"}}>Trousers</Link></li>
                            <li><Link to={""} style={{color:"white"}}>Trousers</Link></li>
                        </ul>
                        </div>
                        <div className="col-md-3 mx-auto">
                            <div className="row">
                                <div className="col">
                                <h5 class="font-weight text-uppercase mt-3 mb-4">Follow US</h5>
                                <div className="row">
                                    <div className="col-md-3">
                                        <i class="fa fa-facebook"></i>
                                    </div>
                                    <div className="col-md-3">
                                        <i class="fa fa-twitter"></i>
                                    </div>
                                    <div className="col-md-3">
                                        <i class="fa fa-instagram"></i>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="row"> 
                                <div className="col">
                                    <h5 class="font-weight text-uppercase mt-3 mb-4">Contact No</h5>
                                    <i className="fas fa-map-marker-alt"></i>   Address of the shop<br />
                                    <i className="fa fa-envelope"></i>    Mail Address
                                </div>
                            </div>
                
                        </div>
                    </div>
                </div>
                {/* <div className="container" style={{display: "grid",
                                                    "grid-template-columns": "auto auto auto auto",
                                                    "grid-template-rows": "100px"}}>
                    <div className="column">
                        <h4>Products</h4>
                        <ul>
                            <Link to={""} className="row">Trousers</Link>
                            <Link to={""} className="row">Trousers</Link>
                            <Link to={""} className="row">Trousers</Link>
                            <Link to={""} className="row">Trousers</Link>
                            <Link to={""} className="row">Trousers</Link>
                        </ul>
                    </div>
                    <div className="column">
                        <h4>Brands</h4>
                        <ul>
                            <Link to={""} className="row">Trousers</Link>
                            <Link to={""} className="row">Trousers</Link>
                            <Link to={""} className="row">Trousers</Link>
                            <Link to={""} className="row">Trousers</Link>
                            <Link to={""} className="row">Trousers</Link>
                        </ul>
                    </div>
                    <div className="column">
                        <h4>Resources</h4>
                        <ul>
                            <Link to={""} className="row">Trousers</Link>
                            <Link to={""} className="row">Trousers</Link>
                            <Link to={""} className="row">Trousers</Link>
                            <Link to={""} className="row">Trousers</Link>
                            <Link to={""} className="row">Trousers</Link>
                        </ul>
                    </div>
                    <div className="column">
                        <h4>Company</h4>
                        <ul>
                            <Link to={""} className="row">Trousers</Link>
                            <Link to={""} className="row">Trousers</Link>
                            <Link to={""} className="row">Trousers</Link>
                            <Link to={""} className="row">Trousers</Link>
                            <Link to={""} className="row">Trousers</Link>
                        </ul>
                    </div>
                    
                </div> */}
                
                <div className="footer-copyright text-center py-3">All rights Reserver © 2020 Copyright</div>
            </footer>
    )
        
    }