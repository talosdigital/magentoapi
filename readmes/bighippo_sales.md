# BigHippo API Checkout

Allows you to retrieve the required order information.

```js
magento.bighippoSales.createTransaction({
	orderId: val
	transactionId: val,
	addInfo: val,
	type: val,
	failsafe: val,
	isClosed: val
}, callback);
```

Allows you to retrieve the list of transactions.

```js
magento.bighippoSales.listTransactions({
	orderId: val
	type: val
}, callback);
```
