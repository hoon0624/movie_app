import React from "react";
import "./Details.css"

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if(location.state === undefined) {
            history.push("/");
        }
    }
    render() {
        const{ location } = this.props;
        if(location.state) {
            console.log(location);
            return (
                <div className="details__container">
                    <div className="details__poster">
                        <img src={location.state.poster} alt={location.state.title} title={location.state.title}/>
                    </div>
                    
                    <span>{location.state.title}</span>
                    <span className="details__year">{location.state.year}</span>
                    <span className="details__genres">{location.state.genres.map((genre, index) => (
                        <li key={index} className="genres__genre">{genre}</li>
                    ) )}</span>
                    <span>{location.state.summary}</span>
                </div>
            );
        }
        else{
            return null;
        }
        
    }
}

export default Detail;