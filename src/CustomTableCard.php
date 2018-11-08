<?php

namespace Mako\CustomTableCard;

use Laravel\Nova\Card;

class CustomTableCard extends Card
{
    /**
     * The width of the card (1/3, 1/2, or full).
     *
     * @var string
     */
    public $width = 'full';

    public function __construct(array $header = [], array $data = [], string $title = '')
    {
        parent::__construct();

        $this->withMeta([
            'header'    =>  $this->_convertToArray($header),
            'rows'      =>  $this->_convertToArray($data),
            'title'     =>  $title,
        ]);
    }

    public function header(array $header)
    {
        return $this->withMeta(['header' => $this->_convertToArray($header)]);
    }

    public function data(array $data)
    {
        return $this->withMeta(['rows' => $this->_convertToArray($data)]);
    }

    public function title(string $title)
    {
        return $this->withMeta(['title' => $title]);
    }

    private function _convertToArray(array $data) : array
    {
        return collect($data)
            ->map(function ($value) {
                return $value->toArray();
            })->toArray();
    }

    /**
     * Get the component name for the element.
     *
     * @return string
     */
    public function component()
    {
        return 'custom-table-card';
    }
}
