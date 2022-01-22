module.exports = () => {
	return {
		customers: require('./Customer'),
		deliveryVehicles: require('./DeliveryVehicle'),
		items: require('./Item'),
		orders: require('./Order'),
	};
};
