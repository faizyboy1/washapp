<?php

namespace App\Http\Livewire;

use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use App\Models\Booking;
use Rappasoft\LaravelLivewireTables\Views\Filter;

class BookingsTable extends DataTableComponent
{

    public bool $columnSelect = true;
    public bool $perPageAll = true;
    public string $defaultSortColumn = 'id';
    public string $defaultSortDirection = 'desc';
    public $currentModal;
    public $refresh = true;

    public function columns(): array
    {
        return [
<<<<<<< HEAD
            Column::make('ID', 'id')->searchable()->sortable()->selected(),
            Column::make('Status', 'status.name')
                ->searchable()
                ->selected(),
            Column::make('Booked On', 'booked_at')->sortable(),
            Column::make('Started On', 'started_at')->sortable(),
            Column::make('Finished On', 'finished_at')->sortable(),
=======
            Column::make('ID', 'id')->searchable()->selected(),
            Column::make('Status', 'status.name')->searchable()->selected(),
            Column::make('Started On', 'started_at'),
            Column::make('Finished On', 'finished_at'),
>>>>>>> 30f4ccb49b2741bf907e9fab972cd287caf50382
            Column::make('Amount (Inc. VAT)', 'total_amount')->selected(),
            Column::make('Amount (Exc. VAT)', 'amount'),
            Column::make('Slot Date', 'slot.slot_date')->searchable()->selected(),
            Column::make('Slot Time', 'slot.name')->searchable(),
            Column::make('Car', 'car.name')->searchable()->selected(),
            Column::make('Car Number', 'car.plate_number')->searchable(),
//            Column::make('Car Type', 'car.type.name')->searchable(),
            Column::make('Notes', 'note')->searchable(),
        ];
    }

    // Confirmed, Cancelled, Finished, Posted
    public array $bulkActions = [
        'setDone' => 'Change to Finished',
        'setCancel' => 'Change to Cancel',
        'setConfirm' => 'Change To Confirm',
    ];


    public function setDone()
    {
        $this->setStatus(3);
    }

    public function setCancel()
    {
        $this->setStatus(4);
    }

    public function setConfirm()
    {
        $this->setStatus(2);
    }

    public function setStatus($id)
    {
        $this->selectedRowsQuery()->update(['booking_status_id' => $id]);
        $this->resetAll();
    }

    public function filters(): array
    {
        return [
            'status' => Filter::make('Status')
                ->multiSelect([
                    '1' => 'Posted',
                    '2' => 'Confirmed',
                    '3' => 'Finished',
                    '4' => 'Canceled',
                ]),
        ];
    }

    public function query(): Builder
    {
        return Booking::query()
            ->when($this->getFilter('status'), fn ($query, $status) => $query->where('booking_status_id', $status));
    }

//    public function query(): Builder
//    {
//        return Booking::query();
//    }
}
