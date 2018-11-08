# Nova Custom Table Card

## Simple Nova Card for Custom Tables

Simple card table with data of you choice.

It can be useful as latest order list or latest posts, ...

![Nova Custom Table Card](https://raw.githubusercontent.com/m-a-k-o/nova-custom-table-card/master/screenshot.png)

 ## This docs are only for v. 2.*
 In version 2 added: refresh (reaload), possiblity to add id and classes to cells

 ## Installation

You can install the package in to a Laravel app that uses [Nova](https://nova.laravel.com) via composer:

```bash
composer require m-a-k-o/nova-custom-table-card
```

You must register the card with NovaServiceProvider.

```php
// in app/Providers/NovaServiceProvder.php

// ...
public function cards()
{
    return [
        // ...

        // all the parameters are required excelpt title
        new \Mako\CustomTableCard\CustomTableCard(
            array $header, array $data, string $title
        ),
    ];
}
```

Example of use:

```php
// ...
public function cards()
{
    return [
        // ...

        // all the parameters are required
        new \Mako\CustomTableCard\CustomTableCard(
            [
                new \Mako\CustomTableCard\Table\Cell('Order Number'),
                (new \Mako\CustomTableCard\Table\Cell('Price'))->class('text-right'),
            ], // header
            [
                (new \Mako\CustomTableCard\Table\Row(
                    new \Mako\CustomTableCard\Table\Cell('2018091001'),
                    (new \Mako\CustomTableCard\Table\Cell('20.50'))->class('text-right')->id('price-2')
                ))->viewLink('/resources/orders/1'),
                (new \Mako\CustomTableCard\Table\Row(
                    new \Mako\CustomTableCard\Table\Cell('2018091002'),
                    (new \Mako\CustomTableCard\Table\Cell('201.25'))->class('text-right')->id('price-2')
                )),
            ], // data
            'Orders' //title
        ),
    ];
}
```

or:

```php
// ...
public function cards()
{
    return [
        // ...

        // all the parameters are required except title
        (new \Mako\CustomTableCard\CustomTableCard)
            ->header([
                new \Mako\CustomTableCard\Table\Cell('Order Number'),
                (new \Mako\CustomTableCard\Table\Cell('Price'))->class('text-right'),
            ])
            ->data([
                (new \Mako\CustomTableCard\Table\Row(
                    new \Mako\CustomTableCard\Table\Cell('2018091001'),
                    (new \Mako\CustomTableCard\Table\Cell('20.50'))->class('text-right')->id('price-2')
                ))->viewLink('/resources/orders/1'),
                (new \Mako\CustomTableCard\Table\Row(
                    new \Mako\CustomTableCard\Table\Cell('2018091002'),
                    (new \Mako\CustomTableCard\Table\Cell('201.25'))->class('text-right')->id('price-2')
                )),
            ])
            ->title('Orders')
            ->refresh(5), // If you need refresh your card data (in seconds)
    ];
}
```

Note: If you don't specify view, show icon will not be visible.


