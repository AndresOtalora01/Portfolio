import "./testimonials.scss"

export default function Testimonials(){
    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                <div className="card">
                    <div className="top">
                        <img src="assets/smilics.png" alt="" className="user" />
                    </div>
                    <div className="center">    
                    Andrés is an honest, trustworthy person, with the ability to work in a team, showing a constant interest in learning and implementing new technologies
                    and development methodologies.
                    </div>
                    <div className="bottom">
                        <h3>Joan Villalta</h3>
                        <h4>R&D Director</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}