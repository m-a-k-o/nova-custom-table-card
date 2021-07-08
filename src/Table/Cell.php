<?php

namespace Mako\CustomTableCard\Table;

use Laravel\Nova\Makeable;
use Mako\CustomTableCard\ToArrayInterface;

class Cell implements ToArrayInterface
{
    use Makeable;

    public $data;

    public $classes = null;

    public $id = null;

    public $sortable = false;

    public $sortableData = null;

    public function __construct($data)
    {
        $this->data = $data;
    }

    public function class(string $class) : Cell
    {
        $this->classes[] = $class;

        return $this;
    }

    public function id($id) : Cell
    {
        $this->id = $id;

        return $this;
    }

    public function sortable(bool $bool) : Cell
    {
        $this->sortable = $bool;

        return $this;
    }

    public function sortableData($data) : Cell
    {
        $this->sortableData = $data;

        return $this;
    }

    public function toArray() : array
    {
        return [
            'data'      =>  $this->data,
            'class'     =>  implode(' ', $this->classes ?? ['text-left']),
            'id'        =>  $this->id,
            'sortable'  =>  $this->sortable,
            'sortableData'  =>  $this->sortableData,
        ];
    }
}
