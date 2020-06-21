import mastercard from '../../assets/cards/mastercard.png';
import amex from '../../assets/cards/amex.png';
import alipay from '../../assets/cards/alipay.png';
import cirrus from '../../assets/cards/cirrus.png';
import cvv from '../../assets/cards/cvv.png';
import defaultCard from '../../assets/cards/default.png';
import diners from '../../assets/cards/diners.png';
import discover from '../../assets/cards/discover.png';
import elo from '../../assets/cards/elo.png';
import hipercard from '../../assets/cards/hipercard.png';
import jcb from '../../assets/cards/jcb.png';
import maestro from '../../assets/cards/maestro.png';
import paypal from '../../assets/cards/paypal.png';
import union from '../../assets/cards/union.png';
import verve from '../../assets/cards/verve.png';

import visa from '../../assets/cards/visa.png';

import creditCardType from 'credit-card-type';

const getCardImage = (cardNumber='') => {

    cardNumber = cardNumber.replace(/ /g, '');
    let cardType = creditCardType(cardNumber);
    cardType = cardType.length === 1 ? cardType[0].type : '';

    switch(cardType){
        case 'visa':
            return visa;
        case 'mastercard':
            return mastercard;
        case 'unionpay':
            return union;
        case 'maestro':
            return maestro;
        case 'elo':
            return elo;
        case 'hipercard':
            return hipercard;
        case 'american-express':
            return amex;
        case 'diners-club':
            return diners;
        case 'discover':
            return discover;
        case 'jcb':
            return jcb;
        default:
            return defaultCard
    }
}


export default getCardImage;
