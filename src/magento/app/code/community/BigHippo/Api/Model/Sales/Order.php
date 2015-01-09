<?php
/**
 * Ipascual Core Api
 *
 * Sort of exposing or serving as API version of app/Mage.php file
 *
 * @category   Ipascual
 * @package    Ipascual_Customapi
 * @author     www.talosdigital.com
 */
class BigHippo_Api_Model_Sales_Order extends Mage_Api_Model_Resource_Abstract
{

	/**
	 *
	 * Create a transaction to an order payment.
	 * @return string
	 */
	public function createTransaction($orderId, $transactionId = null, $addInfo = null, $type = null, $failsafe = false, $isClosed = true)
	{
    if(! $transactionId) {
      $transactionId = uniqid();
    }

    if(! $type) {
      $type = Mage_Sales_Model_Order_Payment_Transaction::TYPE_CAPTURE;
    }

    $order = Mage::getModel("sales/order")->load($orderId);


    // set transaction parameters
    $transaction = false;
    if (!$transaction) {
        $transaction = Mage::getModel('sales/order_payment_transaction')->setTxnId($transactionId);
    }
    $transaction
        ->setOrderPaymentObject($order->getPayment())
        ->setTxnType($type)
        ->isFailsafe($failsafe);

    $transaction->setIsClosed($isClosed);

    //set transaction addition information
    if ($addInfo) {
      $transaction->setAdditionalInformation(Mage_Sales_Model_Order_Payment_Transaction::RAW_DETAILS, $addInfo);
    }

    // link with sales entities
    $order->getPayment()->setLastTransId($transactionId);
    $order->getPayment()->setCreatedTransaction($transaction);
    $order->addRelatedObject($transaction);
    $order->setTransactionId($transactionId);

    // link with parent transaction
    $parentTransactionId = false;

    $order->save();
    $order->getPayment()->save();
    $transaction->save();

    return array("transactionId" => $transaction->getId());
	}

  protected function isJson($string) {
    json_decode($string);
    return (json_last_error() == JSON_ERROR_NONE);
  }

  protected function fixJson( $s ){
    $s = str_replace(
        array('"',  "'"),
        array('\"', '"'),
        $s
    );
    $s = preg_replace('/(\w+):/i', '"\1":', $s);
    return json_decode(sprintf('{%s}', $s));
   }
}
