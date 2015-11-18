# BigHippo API Payment plan schedule

Allows you to create the payment plan schedule information.

```js
magento.bighippoPaymentPlanSchedule.create({
    paymentPlanId: Integer,
    scheduleData: Array //name
}, callback);
```

Allows you to update the payment plan schedule.

```js
magento.bighippoPaymentPlanSchedule.update({
    scheduleId: Integer,
    scheduleData: Array // name
}, callback);
```

Allows you to retrieve the info of payment plan schedule.

```js
magento.bighippoPaymentPlanSchedule.info({
    scheduleId: Integer
}, callback);
```

Allows you to retrieve the list of payment plan schedule.

```js
magento.bighippoPaymentPlanSchedule.list({
    scheduleId: Integer, //(optional)
    page: Integer, //(optional)
    pageSize: Integer //(optional)
}, callback);
```

Allows you to delete the info of payment plan schedule.

```js
magento.bighippoPaymentPlanSchedule.deleteOne({
    data: Array
}, callback);
```

Allows you to delete the info of payment plan schedule.

```js
magento.bighippoPaymentPlanSchedule.deleteTwo({
    paymentPlanId: Integer
}, callback);
```