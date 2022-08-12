<?php

namespace Mako\CustomTableCard;

use Laravel\Nova\Card;

class CustomTableCard extends Card
{
    /**
     * The visual style used for the table. Available options are 'tight' and 'default'.
     *
     * @var string
     */
    public string $style = 'table-default';

    /**
     * The width of the card (1/3, 1/2, or full).
     *
     * @var string
     */
    public $width = 'full';

    /**
     * @param array $header
     * @param array $data
     * @param string $title
     * @param bool|array $viewAll
     */
    public function __construct(array $header = [], array $data = [], string $title = '', bool $viewAll = false)
    {
        parent::__construct();

        $this->withMeta([
            'header' =>  $header,
            'rows' =>  $data,
            'title' =>  $title,
            'viewAll' =>  $viewAll,
            'showBorders' => false,
        ]);
    }

    public function header(array $header): self
    {
        return $this->withMeta(['header' => $header]);
    }

    public function data(array $data): self
    {
        return $this->withMeta(['rows' => $data]);
    }

    public function title(string $title): self
    {
        return $this->withMeta(['title' => $title]);
    }

    public function viewAll(array $viewAll): self
    {
        return $this->withMeta(['viewAll' => $viewAll]);
    }

    /**
     * Get the component name for the element.
     *
     * @return string
     */
    public function component()
    {
        return 'nova-custom-table-card';
    }

    public function style(string $style): self
    {
        if (in_array($style, ['default', 'tight'])) {
            $this->style = 'table-' . $style;
        }

        return $this;
    }

    public function showBorders(bool $show): self
    {
        return $this->withMeta(['showBorders' => $show]);
    }

    public function jsonSerialize(): array
    {
        if (method_exists($this, 'fillTableData')) {
            $this->fillTableData();
        }

        return array_merge([
            'style' => $this->style,
        ], parent::jsonSerialize());
    }
}
