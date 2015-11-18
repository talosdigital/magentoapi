# BigHippo API Payment retry

Allows you to create the payment plan.

```js
magento.bighippoPaymentPlan.create({
    playmentPlanData: Array //name, destination
}, callback);
```

Allows you to update the payment plan.

```js
magento.bighippoPaymentPlan.update({
    paymentPlanId: Integer,
    playmentPlanData: Array //name, destination
}, callback);
```

Allows you to retrieve the info of payment plan.

```js
magento.bighippoPaymentPlan.info({
    playmentPlanId: Integer
}, callback);
```

Allows you to retrieve the list of payment plan.

```js
magento.bighippoPaymentPlan.list({
    filters: Array, //(optional)
    page: Integer, //(optional)
    pageSize: Integer //(optional)
}, callback);
```

Allows you to delete the info of payment plan.

```js
magento.bighippoPaymentPlan.del({
    playmentPlanId: Integer
}, callback);
```

Allows you to createFull the info of payment plan.

```js
magento.bighippoPaymentPlan.createFull({
    paymentPlan: Array
}, callback);
```

Allows you to infoFull the info of payment plan.

```js
magento.bighippoPaymentPlan.infoFull({
    playmentPlanId: Integer
}, callback);
```
