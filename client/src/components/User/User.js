import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Card, Image } from "semantic-ui-react";
import { deleteOneUser } from "../../JS/Actions/ActionUsers";

const User = ({ el }) => {
  const dispatch = useDispatch()
  const handleDelete=()=>{
    dispatch(deleteOneUser(el._id))
  }
  return (
    <div style={{ margin:"50px"}}>
      <Card>
        <Card.Content>
          <Image
            floated="right"
            size="mini"
            src={
              el.fullName == "khouloud"
                ? "https://media.istockphoto.com/vectors/female-avatar-profile-icon-round-woman-face-vector-id897379486?k=20&m=897379486&s=170667a&w=0&h=YsVELdii1n435JxbFdn3tbagAcxinN0A6GcQzTIlR4s="
                : "https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg"
            }
          />
          <Card.Header>{el.fullName}</Card.Header>
          <Card.Meta>{el.email}</Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Link to={`/edit/${el._id}`} ><Button basic color="green">
              Edit
            </Button></Link>
            <Button basic color="red" onClick={handleDelete}>
              Delete
            </Button>
          </div>
        </Card.Content>
      </Card>
    </div>
  );
};

export default User;
