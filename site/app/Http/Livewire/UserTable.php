<?php

namespace App\Http\Livewire;

use App\Actions\Notifier;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use App\Models\User;

class UserTable extends DataTableComponent
{
    public function columns(): array
    {
        return [
            Column::make('Name')
                ->sortable()
                ->searchable(),
            Column::make('E-mail', 'email')
                ->sortable()
                ->searchable(),
            Column::make('Verified', 'email_verified_at')
                ->sortable(),
        ];
    }

    public array $bulkActions = [
        'exportSelected' => 'Export',
        'showNotificationModal' => 'Send Notification',
    ];

    public function query(): Builder
    {
        return User::query();
    }

    public function exportSelected()
    {
        // Do something with the selected rows.
    }


    private $modalName = 'notifications.modal';
    public bool $viewingModal = false;
    public $currentModal;

    public function modalsView(): string
    {

        return $this->modalName;
    }

    public function resetModal(): void
    {
        $this->reset('viewingModal', 'currentModal');
    }

    public function showNotificationModal()
    {
        if ($this->selectedRowsQuery->count() > 0) {
            $this->notificationType = __('Send To: Selected') . " (" . count($this->selected) . ")";
            // Do something with the selected rows
        }
        $this->modalName = 'notifications.modal';
        $this->viewingModal = true;
    }


    public $notificationTitle = '', $notificationDescription = '', $notificationType = 'Send To: All';

    public function sendNotification()
    {

        if ($this->selectedRowsQuery->count() > 0) {
            $tokens = $this->selectedRowsQuery()->pluck('fcm_token')->toArray();
            return Notifier::sendNotification($this->notificationDescription, $this->notificationTitle, $tokens);
        }
        Notifier::sendNotification($this->notificationDescription, $this->notificationTitle);
    }


    public function getTableRowUrl(): string
    {
        return '#';
    }

    public function viewModal($modelId): void
    {
        $this->modalName = 'users.bookings';
        $this->viewingModal = true;
        $this->currentModal = User::findOrFail($modelId)->clientBookings;
    }

    public function setTableRowAttributes($row): array
    {
        return ['wire:click.prevent' => 'viewModal(' . $row->id . ')'];
    }


}
