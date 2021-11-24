<x-jet-dialog-modal wire:model="viewingModal">
    <x-slot name="title">
        {{__('Send Notification')}}
    </x-slot>

    <form wire:submit.prevent="submit">


        <x-slot name="content">

            <x-jet-label for="notificationType" value="{{$notificationType}}"/>
            <hr class="mt-2">
            <div class="my-2">

                <x-jet-label for="notificationTitle" value="{{ __('Title') }}"/>
                <x-jet-input id="notificationTitle" wire:model.defer="notificationTitle" class="block mt-1 w-full"
                             type="text"
                             name="notificationTitle"
                             autofocus/>
            </div>
            <div class="my-2">
                <x-jet-label for="notificationDescription" value="{{ __('Description') }}"/>
                <x-jet-input id="notificationDescription" wire:model.defer="notificationDescription"
                             class="block mt-1 w-full"
                             type="text"
                             name="notificationDescription" required autofocus/>

            </div>
        </x-slot>

        <x-slot name="footer">
            <x-jet-button type="submit" wire:click="sendNotification" wire:loading.attr="disabled">
                @lang('Send')
            </x-jet-button>

            <x-jet-secondary-button wire:click="resetModal" wire:loading.attr="disabled">
                @lang('Cancel')
            </x-jet-secondary-button>
        </x-slot>
    </form>
</x-jet-dialog-modal>
