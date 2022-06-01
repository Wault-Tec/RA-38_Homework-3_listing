import PropTypes from "prop-types";

const ListItem = (props) => {
    const { item } = props;
    const Currency = (currencyCode, price) => {
        if(currencyCode === "USD") {
            return ('$' + price)
        } else if(currencyCode === "EUR") {
            return ('€' + price)
        } else {
            return (price + ' ' + currencyCode)
        }
    }

    const QuantityClass = (quantity) => {
        if (quantity <=10) {
            return 'item-quantity level-low'
        } else if (quantity > 10 && quantity <=20) {
            return 'item-quantity level-medium'
        } else if (quantity > 20) {
            return 'item-quantity level-high'
        }
    }

    return (
    <div className="item">
    <div className="item-image">
        <a href={item.url}>
            {<img src={item.MainImage.url_570xN} />}
        </a>
    </div>
    <div className="item-details">
        <p className="item-title">{
            item.title.length > 50 
            ? (item.title.substring(0,50) + '...') 
            : item.title}
        </p>
        <p className="item-price">
            {Currency(item.currency_code, item.price)}
        </p>
        <p className={QuantityClass(item.quantity)}>
            {item.quantity + ' left'}
        </p>
    </div>
  </div>
    )
}

ListItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default ListItem