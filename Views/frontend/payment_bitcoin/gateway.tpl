{extends file='frontend/index/index.tpl'}

{block name='frontend_index_content_left'}{/block}

{* Breadcrumb *}
{block name='frontend_index_start' append}
    {$sBreadcrumb = [['name'=>"{s name=PaymentTitle}Pay with Bitcon{/s}"]]}
{/block}

{* Main content *}
{block name="frontend_index_content"}
    {if $receivedAddress == 'YES'}
        <h2 class="headingbox_dark largesize">{s name="UseBitcoinAddress"}Use Bitcoin Address{/s}:</h2>
        <br/>
        - {s name="Amount"}Amount{/s} :
        <span class="price"><strong>{$invoiceAmount} {$orderCurrency}</strong></span>
        <br/>
        - {s name="SendExactly"}Send exactly{/s}
        <strong>{$valueInBTC} BTC</strong>
        {s name="ToThisBitcoinAddress"}to this Bitcoin Address{/s}:
        <div style="padding: 5px">
            <a target="_blank" style="background-color: white;" href="bitcoin:{$bitcoinAddress}?amount={$valueInBTC}&label=Order%3A{$orderNumber}">{$bitcoinAddress}</a>
        </div>
        <div style="padding: 5px">
            <a target="_blank" style="background-color: white;" href="bitcoin:{$bitcoinAddress}?amount={$valueInBTC}&label=Order%3A{$orderNumber}">
                <img src="https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=bitcoin%3A{$bitcoinAddress}%3Famount%3D{$valueInBTC}%26label%3DOrder%3A{$orderNumber}">
            </a>
        </div>
        <br/>
        - {s name="EmailHasBeenSent"}An email has been sent to you with this information.{/s}
        <br/>
        -
        <strong>{s name="OrderWillBeSent"}Your order will be sent as soon as we receive your payment.{/s}</strong>
    {else}
        <br/>
        -
        <strong>{s name="UnrecoverableErrorOccured"}An unrecoverable error occurred: unable to obtain address, check your API key or xPub.{/s}</strong>
        <br/>
        - {$message}
        <br/>
        - {$description}
    {/if}{/block}

{block name='frontend_index_actions'}{/block}
