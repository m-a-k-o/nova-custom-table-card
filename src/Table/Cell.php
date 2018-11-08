<?php

namespace Mako\CustomTableCard\Table;

use Mako\CustomTableCard\ToArrayInterface;

class Cell implements ToArrayInterface
{
    public $data;

    public $classes = null;

    public $id = null;

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

    public function toArray() : array
    {
        return [
            'data'      =>  $this->data,
            'class'     =>  implode(' ', $this->classes ?? ['text-left']),
            'id'        =>  $this->id,
        ];
    }
}
