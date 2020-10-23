import React, {Component} from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle } from 'reactstrap';


    
 

class DishdetailComponent extends Component{

    constructor(props){
        super(props)
        
    }

    
    renderDish(dish) {
    if (dish != null)
        return(
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    else
        return(
            <div></div>
        );
    }

    dateBuilder(monthAsNumberString){
    let monthArray = [];
        monthArray[0] = "Jan";
        monthArray[1] = "Feb";
        monthArray[2] = "Mar";
        monthArray[3] = "Apr";
        monthArray[4] = "May";
        monthArray[5] = "Jun";
        monthArray[6] = "Jul";
        monthArray[7] = "Aug";
        monthArray[8] = "Sep";
        monthArray[9] = "Oct";
        monthArray[10] = "Nov";
        monthArray[11] = "Dec";
        let monthAsNumberInt = parseInt(monthAsNumberString)-1
    return monthArray[monthAsNumberInt];
    }


    dishDescription(dish) {
        if (dish != null){
            const date = dish.comments;
            console.log(date)
            
            const commentsRaw = dish.comments
            const commentsToPublish = commentsRaw.map(selectedComment => {
                let [year, month, day] = selectedComment.date.slice(0,10).split("-")
                console.log(month)
                let finalDate = day+" "+this.dateBuilder(month)+", "+year
                return(
                    <p>
                        {selectedComment.comment}
                        <br></br>
                        -- {selectedComment.author}, {finalDate} 
                    </p>
                )    
            })
            return(
                <div>
                    {commentsToPublish}
                </div>
            );
        }
        else
            return(
                <div></div>
            );
        }

    render() {
        return (
            <div className="row text-left">
                <div  className="col-12 col-md-5 m-1">
                {this.renderDish(this.props.selectedDish)}
                </div>
                <div  className="col-12 col-md-5 m-1">
                <h1>Comments</h1>
                {this.dishDescription(this.props.selectedDish)}
                </div>
            </div>
        )
    }
}


export default DishdetailComponent;
