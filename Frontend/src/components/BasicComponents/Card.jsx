import img_avatar from './img_avatar.png';

export const CardComponent = ()=>{
    return <div style={{background:"rgba(34,34,34,255)"}}>
        <h2>Card</h2>
        <div className="card" style={{  background:"rgba(34,34,34,255)",
                                        border:"0",
                                        transition: "0.3s",
                                        width: "20%"}}>
            <img src={img_avatar} alt="Avatar" style={{ 
                                                        "box-shadow":"0 4px 8px 0 rgba(0,0,0,0.2)",
                                                        "border-radius":"55px"}}/>
            <div className="container" style={{padding: "2px 16px",color:"white"}}>
                <h4><b>One8</b></h4> 
                <span style={{position:"absolute",right:"0%"}}>Rs.899/-</span>
                <div>
                    <span style={{position:"absolute",left:"0%"}}>Style-MM5</span><br></br>
                    <span style={{position:"absolute",left:"0%"}}>Brand : One8</span>
                </div>
                <br /> 
            </div>
            </div>
    </div>
}