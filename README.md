# Nova Custom Table Card

## Simple Nova Card for Custom Tables

Simple card table with data of you choice.

It can be useful as latest order list or latest posts, ...

![Nova Custom Table Card](https://raw.githubusercontent.com/m-a-k-o/nova-custom-table-card/master/screenshot.png)

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

        // all the parameters are required
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
            ['Id', 'Name', 'Date'], // header
            [
              [
                'view' => '/resources/orders/1',
                'columns' => [1, 'John Doe', '2018-08-28']
              ]
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

        // all the parameters are required
        (new \Mako\CustomTableCard\CustomTableCard())
            ->header(['Id', 'Name', 'Date'])
            ->data([
                [
                    'view' => '/resources/orders/1',
                    'columns' => [1, 'John Doe', '2018-08-28']
                ]
            ])
            ->title('Orders'),
        ),
    ];
}
```

Note: If you don't specify view, show icon will not be visible.


