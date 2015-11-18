# BigHippo API Payment retry information

Allows you to create the payment retry information.

```js
magento.bighippoPaymentRetryInformation.create({
    playmentRetryId: Integer,
    informationData: Array //name, value
}, callback);
```

Allows you to update the payment retry information.

```js
magento.bighippoPaymentRetryInformation.update({
    paymentRetryId: Integer,
    informationData: Array // name, value
}, callback);
```

Allows you to retrieve the info of payment retry information.

```js
magento.bighippoPaymentRetryInformation.info({
    informationId: Integer
}, callback);
```

Allows you to retrieve the list of payment retry information.

```js
magento.bighippoPaymentRetryInformation.list({
    paymentretryId: Integer,
    page: Integer, //(optional)
    pageSize: Integer //(optional)
}, callback);
```

Allows you to delete the info of payment retry information.

```js
magento.bighippoPaymentRetryInformation.deleteOne({
    data: Array
}, callback);
```

Allows you to delete the info of payment retry information.

```js
magento.bighippoPaymentRetryInformation.deleteTwo({
    informationId: Integer
}, callback);
```