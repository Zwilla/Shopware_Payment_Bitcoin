/*
 * (c) LX <lxhost.com@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

Ext.define('Shopware.apps.PaymentBitcoin.model.main.Detail', {
    extend: 'Ext.data.Model',
	fields: [
        { name: 'number', type: 'int' },
        { name: 'transaction_hash', type: 'string' },
        { name: 'confirmations', type: 'int' },
        { name: 'value_in_btc', type: 'float' },
		{ name: 'crdate',  type: 'date' },
        { name: 'update',  type: 'date' }
	]
});