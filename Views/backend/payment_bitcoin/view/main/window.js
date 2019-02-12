/*
 * (c) LX <lxhost.com@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

Ext.define('Shopware.apps.PaymentBitcoin.view.main.Window', {
    extend: 'Enlight.app.Window',
    alias: 'widget.bitcoin-main-window',

    width: 1200,
    height: 500,
    layout: 'border',

    title: '{s name=window/title}Bitcoin Payments{/s}',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: me.getItems()
        });

        me.callParent(arguments);
    },

    getItems: function() {
        var me = this;
        return [{
            region: 'east',
            xtype: 'bitcoin-main-detail'
        }, {
            region: 'center',
            xtype: 'bitcoin-main-list'
        }];
    }
});