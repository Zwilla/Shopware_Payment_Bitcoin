/*
 * (c) LX <lxhost.com@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

Ext.define('Shopware.apps.PaymentBitcoin', {

    extend: 'Enlight.app.SubApplication',

    bulkLoad: true,
    loadPath: '{url action=load}',

    params: {},

    controllers: [ 'Main' ],

    stores: [ 'main.List' ],
    models: [ 'main.List' ],
    views: [ 'main.Window', 'main.List' ],

    launch: function() {
        return this.getController('Main').mainWindow;
    }
});