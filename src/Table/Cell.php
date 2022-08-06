<?php

namespace Mako\CustomTableCard\Table;

use JsonSerializable;
use Laravel\Nova\Makeable;

class Cell implements JsonSerializable
{
    use Makeable;

    public string $data;

    public ?array $classes = null;

    public $id = null;

    public bool $sortable = false;

    public $sortableData = null;

    public function __construct(string $data)
    {
        $this->data = $data;
    }

    public function class(string $class): self
    {
        $this->classes[] = $class;

        return $this;
    }

    public function id($id): self
    {
        $this->id = $id;

        return $this;
    }

    public function sortable(bool $bool): self
    {
        $this->sortable = $bool;

        return $this;
    }

    public function sortableData($data): self
    {
        $this->sortableData = $data;

        return $this;
    }

    public function jsonSerialize()
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
