import "./works.scss"

export default function Works(){
    return (
        <div className="works" id="works">

        <div className="slider">
            <div className="container">
                <div className="item">
                    <div className="left">
                        <div className="leftContainer">
                            <div className="imgContainer">
                                <img src="assets/coding.png" alt="" />
                            </div>
                            <h2>Title</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus aspernatur labore ex, officia in, 
                            fugit tenetur ipsa corporis.</p>
                            <span>Projects</span>
                        </div>
                    </div>
                    <div className="right">
                        <img src="assets/groupz.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
        <img src="assets/down.png" className="arrow left" alt="" />
        <img src="assets/down.png" className="arrow right" alt="" />
        </div>
    );
}