/*
 * (c) LX <lxhost.com@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

Ext.define('Shopware.apps.PaymentBitcoin.store.main.Detail', {
    extend: 'Ext.data.Store',
    model: 'Shopware.apps.PaymentBitcoin.model.main.Detail',
    proxy: {
        type: 'ajax',
        url : '{url action=getDetails}',
        reader: {
            type: 'json',
            root: 'data'
        }
    },
    remoteSort: true,
    remoteFilter: true
});