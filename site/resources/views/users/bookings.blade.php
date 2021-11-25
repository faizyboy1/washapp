<x-jet-dialog-modal wire:model="viewingModal">
    <x-slot name="title">
        @lang('My Modal')
    </x-slot>

    <x-slot name="content">
        {{dump($currentModal)}}
    </x-slot>

    <x-slot name="footer">
        <x-jet-secondary-button wire:click="resetModal" wire:loading.attr="disabled">
            @lang('Done')
        </x-jet-secondary-button>
    </x-slot>
</x-jet-dialog-modal>
