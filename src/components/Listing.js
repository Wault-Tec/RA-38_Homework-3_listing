import ListItem from "./ListItem";
import PropTypes from "prop-types";

const Listing = (props) => {
 const { items } = props;

  return (
    <div className="item-list">
      {items.map((item) => (
        item.state === "active" && <ListItem item={item} key={item.listing_id}/>
      ))}
    </div>
  )
}

Listing.propTypes = {
  items: PropTypes.array.isRequired
}

export default Listing
