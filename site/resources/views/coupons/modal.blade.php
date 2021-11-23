<x-jet-dialog-modal wire:model="viewingModal">
    <x-slot name="title">
        {{__('Create Coupon')}}
    </x-slot>

    <form wire:submit.prevent="submit">


        <x-slot name="content">
            <div class="my-2">

                <x-jet-label for="name" value="{{ __('Name') }}"/>
                <x-jet-input id="name" wire:model.lazy="coupon.name" class="block mt-1 w-full" type="text"
                             name="coupon.name"
                             required autofocus/>
                @error('coupon.name')
                <p class="text-red-700 my-1"> {{$message}}</p>
                @enderror
            </div>
            <div class="my-2">
                <x-jet-label for="discount" value="{{ __('Discount') }} %"/>
                <x-jet-input id="discount" wire:model.lazy="coupon.discount" class="block mt-1 w-full" type="number"
                             min="0"
                             max="100"
                             name="coupon.discount" required autofocus/>
                @error('coupon.discount') <p class="text-red-700 my-1"> {{$message}}</p> @enderror

            </div>

            <div class="my-2">
                <x-jet-label for="note" value="{{ __('Note') }}"/>
                <x-jet-input id="note" wire:model="coupon.note" class="block mt-1 w-full" type="number" min="0"
                             max="100"
                             name="coupon.note" required autofocus/>
            </div>
        </x-slot>

        <x-slot name="footer">
            <x-jet-button type="submit" wire:click="store" wire:loading.attr="disabled">
                @lang('Done')
            </x-jet-button>

            <x-jet-secondary-button wire:click="resetModal" wire:loading.attr="disabled">
                @lang('Cancel')
            </x-jet-secondary-button>
        </x-slot>
    </form>
</x-jet-dialog-modal>
