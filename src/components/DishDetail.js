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

    dateBuilder(monthAsNumber){
    let monthArray = new Array;
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
    return monthArray[monthAsNumber];
    }


    dishDescription(dish) {
        if (dish != null){
            console.log(dish)
            const date = this.props.selectedDish.date;
            let [year, month, day] = date.slice(0,10).split("-")
            let finalDate = day+this.dateBuilder(month)+year
            const commentsRaw = this.props.selectedDish.comments
            const commentsToPublish = commentsRaw.map(comments => {
                return(
                    <p>
                        {comments.comment}
                        <br></br>
                        -- {comments.author}, {finalDate} 
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
            <div className="row">
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
