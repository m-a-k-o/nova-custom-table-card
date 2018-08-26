# Nova Custom Table Card

## Simple Nova Card for Custom Tables 

This will add a simple table card with specified data.

It can be useful as latest order list or latest posts, ...


 ## Installation

You can install the package in to a Laravel app that uses [Nova](https://nova.laravel.com) via composer:

```bash
composer require m-a-k-o/nova-custom-table-card
```

Youy must register the card with NovaServiceProvider.

```php
// in app/Providers/NovaServiceProvder.php

// ...
public function cards()
{
    return [
        // ...

        // all the parameters are required
        new \Mako\CustomTableCard\CustomTableCard(
            array $header, array $data
        ),
    ];
}
```

Usage is simple:

```php
// ...
public function cards()
{
    return [
        // ...

        // all the parameters are required
        new \Mako\CustomTableCard\CustomTableCard(
            ['Id', 'Name', 'Date'], // header
            [
              [
                'view' => '/resources/orders/1',
                'columns' => [1, 'John Doe', '2018-08-28']
              ]
            ] // data
        ),
    ];
}
```

If you don't specify view, show icon will not be visible.


