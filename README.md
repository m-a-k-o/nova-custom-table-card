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

or:

You can create your own class which will extend \Mako\CustomTableCard\CustomTableCard in Nova/Cards directory on example.

In this separate class you are able to fetch data from models in nice clean way.

```php
<?php

namespace App\Nova\Cards;

use App\Models\Order;

class LatestOrders extends \Mako\CustomTableCard\CustomTableCard
{
    public function __construct()
    {
        $header = collect(['Date', 'Order Number', 'Status', 'Price', 'Name']);

        $this->title('Latest Orders');
        $this->refresh(5); // If you need refresh your card data (in seconds)

        // $orders = Order::all();
        // Data from you model
        $orders = collect([
            ['date' => '2018-12-01', 'order_number' => '2018120101', 'status' => 'Ordered', 'price' => '20.55', 'name' => 'John Doe'],
            ['date' => '2018-12-01', 'order_number' => '2018120101', 'status' => 'Ordered', 'price' => '20.55', 'name' => 'John Doe'],
            ['date' => '2018-12-01', 'order_number' => '2018120101', 'status' => 'Ordered', 'price' => '20.55', 'name' => 'John Doe'],
            ['date' => '2018-12-01', 'order_number' => '2018120101', 'status' => 'Ordered', 'price' => '20.55', 'name' => 'John Doe'],
            ['date' => '2018-12-01', 'order_number' => '2018120101', 'status' => 'Ordered', 'price' => '20.55', 'name' => 'John Doe'],
            ['date' => '2018-12-01', 'order_number' => '2018120101', 'status' => 'Ordered', 'price' => '20.55', 'name' => 'John Doe'],
        ]);

        $this->header($header->map(function($value) {
            return new \Mako\CustomTableCard\Table\Cell($value);
        })->toArray());

        $this->data($orders->map(function($order) {
            return new \Mako\CustomTableCard\Table\Row(
                new \Mako\CustomTableCard\Table\Cell($order['date']),
                new \Mako\CustomTableCard\Table\Cell($order['order_number']),
                new \Mako\CustomTableCard\Table\Cell($order['status']),
                new \Mako\CustomTableCard\Table\Cell($order['price']),
                new \Mako\CustomTableCard\Table\Cell($order['name'])
            );
        })->toArray());
    }
}
```

Then register your custom class inside cards in NovaServiceProvider.php
```php
protected function cards()
{
    return [
        ......
        new \App\Nova\Cards\LatestOrders,
     ];
 }
```

Note: If you don't specify view, show icon will not be visible.


