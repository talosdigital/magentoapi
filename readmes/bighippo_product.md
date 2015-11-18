# BigHippo API Product

Allows you to retrieve the list of grouped products with its information.

```js
magento.bighippoProduct.listSimpleProducts({
	productId: Integer,
	arguments: Array, //filter (Array -> product_value), page (integer, default 1), pageSize (integer, default 8), sort (roduct_value [ASC|DESC])
	inludeMedia: Bool
}, callback);
```

Allows you to retrieve the list of transactions.

```js
magento.bighippoProduct.listGroupedProducts({
	argumentsGroupedProducts: Array, //filter (Array -> product_value), page (integer, default 1), pageSize (integer, default 8), sort (roduct_value [ASC|DESC])
	argumentsSimpleProducts: Array,//filter (Array -> product_value), page (integer, default 1), pageSize (integer, default 8), sort (roduct_value [ASC|DESC])
	includeMedia: val //boolean
}, callback);
```

Allows you to retrieve the list of transactions.

```js
magento.bighippoProduct.listImages({
	productId: Integer
}, callback);
```