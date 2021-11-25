<?php

namespace App\Http\Livewire;

use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use App\Models\Coupon;

class CouponTable extends DataTableComponent
{

    public bool $columnSelect = true;
    public $createEnabled = true;
// To show/hide the modal
    public bool $viewingModal = false;

// The information currently being displayed in the modal
    public string $defaultSortColumn = 'name';
    public string $defaultSortDirection = 'desc';
    public $currentModal;

    public function delete(Coupon $coupon)
    {
        $coupon->delete();
    }

    public Coupon $coupon;

    protected $rules = ['coupon.name' => 'required|unique:coupons,name', 'coupon.discount' => 'integer|required|between:0,100', 'coupon.note' => 'nullable'];

    public function create()
    {
        $this->coupon = new Coupon;
        $this->viewingModal = true;
    }

    public function mount()
    {
        $this->coupon = new Coupon;
    }

    public function store()
    {
        $this->validate();

        $this->coupon->save();
        $this->reset('viewingModal', 'currentModal');

    }

    public function modalsView(): string
    {
        return 'coupons.modal';
    }

    public function resetModal(): void
    {
        $this->reset('viewingModal', 'currentModal');
    }

    public function columns(): array
    {
        return [
            Column::make('name')
                ->sortable()
                ->searchable()
                ->selected(),
            Column::make('discount')->sortable()
                ->searchable()
                ->selected(),
            Column::make('note')->sortable()
                ->searchable()
                ->selected(),
            Column::blank()->format(function ($value, $column, $row) {
                return view('components.actions')->withRow($row);
            })->selected()
        ];
    }

    public function query(): Builder
    {
        return Coupon::query();
    }
}
