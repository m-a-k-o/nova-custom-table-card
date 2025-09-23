<?php

namespace Mako\CustomTableCard\Table;

use JsonSerializable;
use Laravel\Nova\Makeable;

class Row implements JsonSerializable
{
    use Makeable;

    public array $columns;

    public ?string $viewLink = null;

    public array $classes = [];

    public function __construct(...$columns)
    {
        foreach($columns as $column) {
            $this->columns[] = $column;
        }
    }

    public function viewLink(string $link): self
    {
        $this->viewLink = $link;

        return $this;
    }

    public function class(string $class): self
    {
        $this->classes[] = $class;

        return $this;
    }

    public function jsonSerialize(): mixed
    {
        return [
            'columns'   =>  $this->columns,
            'class'     =>  implode(' ', $this->classes),
            'view'      =>  $this->viewLink,
        ];
    }
}
