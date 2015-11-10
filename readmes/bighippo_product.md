## BigHippo API Product

Allows you to retrieve the list of grouped products with its information.

```js
magento.bighippoSales.listSimpleProducts({
	product_id: val,
	arguments: val, //filter (Array -> product_value), page (integer, default 1), pageSize (integer, default 8), sort (roduct_value [ASC|DESC])
	inlude_media: val // boolean
}, callback);
```

Allows you to retrieve the list of transactions.

```js
magento.bighippoSales.listGroupedProducts({
	arguments_grouped_products: val, //filter (Array -> product_value), page (integer, default 1), pageSize (integer, default 8), sort (roduct_value [ASC|DESC])
	arguments_simple_products: val,//filter (Array -> product_value), page (integer, default 1), pageSize (integer, default 8), sort (roduct_value [ASC|DESC])
	include_media: val //boolean
}, callback);
```

Allows you to retrieve the list of transactions.

```js
magento.bighippoSales.listImages({
	product_id: val //integer
}, callback);
```