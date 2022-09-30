# Nova Custom Table Card

## Simple Nova Card for Custom Tables

Simple card table with data of you choice.

It can be useful as latest order list or latest posts, ...

![Nova Custom Table Card](https://raw.githubusercontent.com/m-a-k-o/nova-custom-table-card/master/screenshot.png)

 ## This docs are only for v. > 2.*
 In version 2 added: refresh (reload), possiblity to add id and classes to cells

 In version 3: **REMOVED refresh**, fixed problem with multiple dashboards

Version 4: Add compatibility for Nova v. 4

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
            array $header, array $data, string $title, array $viewAll
        ),
    ];
}
```

Example of use:

```php
use Mako\CustomTableCard\Table\Cell;
use Mako\CustomTableCard\Table\Row;

// ...
public function cards()
{
    return [
        // ...

        // all the parameters are required
        new \Mako\CustomTableCard\CustomTableCard(
            [
               Cell::make('Order Number'),
                // Set sortable to true in a header Cell to allow its column's sorting
                (Cell::make('Price'))->sortable(true)->class('text-right'),
            ], // header
            [
                (Row::make(
                    Cell::make('2018091001'),
                    (Cell::make'20.50'))->class('text-right')->id('price-2')
                ))->viewLink('/resources/orders/1'), //Add viewLink to show clickable eye
                (Row::make(
                    Cell::make('2018091002'),
                    (Cell::make('201.25'))->class('text-right')->id('price-2')
                )),
            ], // data
            'Orders,' // title
            ['label' => 'View All', 'link' => '/resources/orders'], // View All
        ),
    ];
}
```

or:

```php
use Mako\CustomTableCard\Table\Cell;
use Mako\CustomTableCard\Table\Row;

// ...
public function cards()
{
    return [
        // ...

        // all the parameters are required except title
        (new \Mako\CustomTableCard\CustomTableCard)
            ->header([
                Cell::make('Order Number'),
                // Set sortable to true in a header Cell to allow its column's sorting
                (Cell::make('Price'))->sortable(true)->class('text-right'),
            ])
            ->data([
                (Row::make(
                    Cell::make('2018091001'),
                    (Cell::make('20.50'))->class('text-right')->id('price-2')
                ))->viewLink('/resources/orders/1'), //Add viewLink to show clickable eye
                (Row::make(
                    Cell::make('2018091002'),
                    (Cell::make('201.25'))->class('text-right')->id('price-2')
                )),
            ])
            ->title('Orders')
            ->viewAll(['label' => 'View All', 'link' => '/resources/orders']),
    ];
}
```

or:

You can create your own class which will extend \Mako\CustomTableCard\CustomTableCard in Nova/Cards directory on example.

In this separate class you are able to fetch data from models in nice clean way.

```php
<?php

namespace App\Nova\Cards;

use Mako\CustomTableCard\CustomTableCard;
use Mako\CustomTableCard\Table\Cell;
use Mako\CustomTableCard\Table\Row;

use App\Models\Order;

class LatestOrders extends CustomTableCard
{
    public function __construct()
    {
        $header = collect(['Date', 'Order Number', 'Status', 'Price', 'Name']);

        $this->title('Latest Orders');
        $this->viewAll(['label' => 'View All', 'link' => '/resources/orders']);

        // $orders = Order::take(10)->latest->get();
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
            // Make the Status column sortable
            return ($value === 'Status') ?
                (Cell::make($value))->sortable(true) :
                Cell::make($value);
        })->toArray());

        $this->data($orders->map(function($order) {
            return Row::make(
                Cell::make($order['date']),
                Cell::make($order['order_number']),
                // Instead of alphabetically ordering the status, set a sortableData value for better representation
                (Cell::make($order['status'])->sortableData($this->getStatusSortableData($order['status']))),
                Cell::make($order['price']),
                Cell::make($order['name'])
            );
        })->toArray());
    }

    private function getStatusSortableData (string $status) : int
    {
        switch ($status) {
            case 'Ordered':
                return 1;            
            default:
                return 0.
        } 
    }
}
```

Then register your custom class inside cards in NovaServiceProvider.php
```php
use App\Nova\Cards\LatestOrders;

protected function cards()
{
    return [
        ......
        new LatestOrders,
     ];
 }
```

Note: If you don't specify viewLink() on a row `Row::make()->viewLink()`, show icon will not be visible.
You can also show a viewAll on the table with `$this->viewAll()` 

## Table Style Customization
To show more data on your table, you can use the "tight" table style option designed to increase the visual density of your table rows.
```php
protected function cards()
{
    return [
        ...
        \Mako\CustomTableCard\CustomTableCard::make(
            ...
        )->style('tight'),
     ];
 }
```
Or override the `$style` property on your custom class:
```php
public $style = 'tight';
```
