# BigHippo API Payment retry

Allows you to create the payment retry.

```js
magento.bighippoPaymentRetry.create({
    playmentRetryData: Array //name, orderId, incrementId
}, callback);
```

Allows you to update the payment retry.

```js
magento.bighippoPaymentRetry.update({
    paymentRetryId: Integer,
    playmentRetryData: Array //name, orderId, incrementId
}, callback);
```

Allows you to retrieve the info of payment retry.

```js
magento.bighippoPaymentRetry.info({
    paymentRetryId: Integer
}, callback);
```

Allows you to retrieve the list of payment retry.

```js
magento.bighippoPaymentRetry.list({
    filters: Array, //(optional)
    page: Integer, //(optional)
    pageSize: Integer //(optional)
}, callback);
```

Allows you to delete the info of payment retry.

```js
magento.bighippoPaymentRetry.del({
    paymentRetryId: Integer
}, callback);
```

Allows you to createFull the info of payment retry.

```js
magento.bighippoPaymentRetry.createFull({
    paymentRetry: Array
}, callback);
```

Allows you to infoFull the info of payment retry.

```js
magento.bighippoPaymentRetry.infoFull({
    informationId: Integer
}, callback);
```
