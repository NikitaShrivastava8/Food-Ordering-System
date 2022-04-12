import React from "react";
import '../Css/basket.css';
import GooglePayButton from '@google-pay/button-react';


function Cart({items, removeItem}) {
    const closeNav = () => {
        document.getElementById("mySidenav").style.width = "100%";
        document.getElementById("mySidenav").style.height = "0";
    };
    const handleClick=()=>
    {
  
      
      
      localStorage.clear();
    window.location.href = '/payment';
      
    }




    
    
    
    // Calculate total price
    const totalPrice = items.reduce((accumulator, currentValue) => accumulator + currentValue.qty * currentValue.price, 0);
    const GST = totalPrice * 0.18;

    return (
        <div id="mySidenav" className="sidenav">
            <a href="#" className="closebtn" onClick={closeNav}>&times;</a>
            <div className="container" id="container">
                <div className="row">
                    <div className="col-md-6">
                        <h3>Cart</h3>
                        <hr/>
                        <div className="table-responsive" id="table">
                            <table className="table">
                                <thead id="table-header">
                                <tr>
                                    <th>Item</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Remove</th>
                                </tr>
                                </thead>
                                <tbody id="table-body">
                                {items.map((foodItem) => (
                                    <tr key={foodItem.id}>
                                        <td><strong>{foodItem.title}</strong></td>
                                        <td>{foodItem.qty}</td>
                                        <td>₹{foodItem.price}</td>
                                        <td>
                                            {/* <i onClick={() => removeItem(foodItem)} className="far fa-trash-alt"/> */}
                                            <button className="btn1" onClick={() => removeItem(foodItem)}
                                            
                                            
                                            >Remove</button>
                                  
                                        </td>
                                    </tr>
                                ))}

                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h3>Checkout</h3>
                        <hr/>
                        <div className="d-flex justify-content-between">
                            <p className="lead">Subtotal</p>
                            <p className="lead">₹{totalPrice}</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p>GST</p>
                            <p>₹{GST}</p>
                        </div>
                        <hr/>
                        <button className="btn btn-success d-flex justify-content-between align-items-baseline"
                                id="checkout" type="button" onClick={handleClick}>Total:<span
                            className="badge bg-success">₹{totalPrice + GST}</span>
                        </button><br/>
                        <GooglePayButton
        environment="TEST"
        paymentRequest={{
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods: [
            {
              type: 'CARD',
              parameters: {
                allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                allowedCardNetworks: ['MASTERCARD', 'VISA'],
              },
              tokenizationSpecification: {
                type: 'PAYMENT_GATEWAY',
                parameters: {
                  gateway: 'example',
                  gatewayMerchantId: 'exampleGatewayMerchantId',
                },
              },
            },
          ],
          merchantInfo: {
            merchantId: '12345678901234567890',
            merchantName: 'Demo Merchant',
          },
          transactionInfo: {
            totalPriceStatus: 'FINAL',
            totalPriceLabel: 'Total',
            totalPrice: '1',
            currencyCode: 'USD',
            countryCode: 'US',
          },
          shippingAddressRequired: true,
          callbackIntents: ['SHIPPING_ADDRESS', 'PAYMENT_AUTHORIZATION'],
        }}
        onLoadPaymentData={paymentRequest => {
          console.log('Success', paymentRequest);
        }}
        onPaymentAuthorized={paymentData => {
            console.log('Payment Authorised Success', paymentData)
            return { transactionState: 'SUCCESS'}
          }
        }
        onPaymentDataChanged={paymentData => {
            console.log('On Payment Data Changed', paymentData)
            return { }
          }
        }
        existingPaymentMethodRequired='false'
        buttonColor='black'
        buttonType='Buy'
      />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
