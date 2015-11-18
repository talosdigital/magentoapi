# BigHippo API Payment plan schedule information

Allows you to create the payment plan schedule information.

```js
magento.bighippoPaymentPlanScheduleInformation.create({
    scheduleId: Integer,
    informationData: Array //name, value
}, callback);
```

Allows you to update the payment plan schedule information.

```js
magento.bighippoPaymentPlanScheduleInformation.update({
    paymentPlanId: Integer,
    informationData: Array // name, value
}, callback);
```

Allows you to retrieve the info of payment plan schedule information.

```js
magento.bighippoPaymentPlanScheduleInformation.info({
    informationId: Integer
}, callback);
```

Allows you to retrieve the list of payment plan schedule information.

```js
magento.bighippoPaymentPlanScheduleInformation.list({
    scheduleId: Integer, //(optional)
    page: Integer, //(optional)
    pageSize: Integer //(optional)
}, callback);
```

Allows you to delete the info of payment plan schedule information.

```js
magento.bighippoPaymentPlanScheduleInformation.deleteOne({
    data: Array
}, callback);
```

Allows you to delete the info of payment plan schedule information.

```js
magento.bighippoPaymentPlanScheduleInformation.deleteTwo({
    informationId: Integer
}, callback);
```