<?php

namespace Mako\CustomTableCard\Table;

use Laravel\Nova\Makeable;
use Mako\CustomTableCard\ToArrayInterface;

class Row implements ToArrayInterface
{
    use Makeable;

    public $columns;

    public $viewLink;

    public $classes = [];

    public function __construct(...$columns)
    {
        foreach($columns as $column) {
            $this->columns[] = $column->toArray();
        }
    }

    public function viewLink(string $link) : Row
    {
        $this->viewLink = $link;

        return $this;
    }

    public function class(string $class): Row
    {
        $this->classes[] = $class;

        return $this;
    }

    public function toArray() : array
    {
        return [
            'columns'   =>  $this->columns,
            'class'     =>  implode(' ', $this->classes),
            'view'      =>  $this->viewLink,
        ];
    }
}
