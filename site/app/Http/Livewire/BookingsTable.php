<?php

namespace App\Http\Livewire;

use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use App\Models\Coupon;

class BookingsTable extends DataTableComponent
{

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
                ->searchable(),
            Column::make('discount')->sortable()
                ->searchable(),
            Column::make('note')->sortable()
                ->searchable(),
            Column::blank()->format(function ($value, $column, $row) {
                return view('components.actions')->withRow($row);
            })
        ];
    }

// Confirmed, Cancelled, Finished, Posted
    public array $bulkActions = [
        'setDone' => 'Change to Done',
        'setCancel' => 'Change to Cancel',
//        'showNotificationModal' => 'Send Notification',
    ];


    public function setDone()
    {
        $this->setStatus(3);
    }

    public function setCancel()
    {
        $this->setStatus(4);
    }

    public function setStatus($id)
    {
        $this->selectedRowsQuery()->update(['booking_status_id' => $id]);
    }

    public function query(): Builder
    {
        return Coupon::query();
    }
}
