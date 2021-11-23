<div x-data>

    <button x-on:click="Swal.fire({
        title: '{{__('Confirm Deleting')}}',
        type: 'warning',
        text: '{{__('Are you sure you want to delete?')}}',
        icon: 'error',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: '{{__('Yes, Delete')}}',
        confirmButtonAriaLabel: '{{__('Yes, Delete')}}',
        cancelButtonText: '{{__('Cancel')}}' ,
        cancelButtonAriaLabel: '{{__('Cancel')}}',
        confirmButtonColor: '#D61F36',
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete.isConfirmed) {
            $wire.delete({{$row->id}})
            }
        });

">

        <x-heroicon-o-trash
            class="text-red-600 hover:text-red-700 h-6 transition duration-500 hover:scale-125"/>

    </button>
</div>

