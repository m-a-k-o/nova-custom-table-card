<?php

namespace Mako\CustomTableCard\Table;

use Mako\CustomTableCard\ToArrayInterface;

class Row implements ToArrayInterface
{
    public $columns;

    public $viewLink;

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

    public function toArray() : array
    {
        return [
            'columns'   =>  $this->columns,
            'view'      =>  $this->viewLink,
        ];
    }
}
