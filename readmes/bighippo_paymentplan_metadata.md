# BigHippo API Payment plan metadata

Allows you to create the payment plan metadata information.

```js
magento.bighippoPaymentPlanMetadata.create({
    paymentPlanId: Integer,
    metadataData: Array //name, value
}, callback);
```

Allows you to update the payment plan metadata.

```js
magento.bighippoPaymentPlanMetadata.update({
    paymentPlanId: Integer,
    metadataData: Array // name, value
}, callback);
```

Allows you to retrieve the info of payment plan metadata.

```js
magento.bighippoPaymentPlanMetadata.info({
    metadataId: Integer
}, callback);
```

Allows you to retrieve the list of payment plan metadata.

```js
magento.bighippoPaymentPlanMetadata.list({
    paymentplanId: Integer,
    page: Integer, //(optional)
    pageSize: Integer //(optional)
}, callback);
```

Allows you to delete the info of payment plan metadata.

```js
magento.bighippoPaymentPlanMetadata.deleteOne({
    data: Array
}, callback);
```

Allows you to delete the info of payment plan metadata.

```js
magento.bighippoPaymentPlanMetadata.deleteTwo({
    metadataId: Integer
}, callback);
```