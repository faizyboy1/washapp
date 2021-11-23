<?php

// @formatter:off
/**
 * A helper file for your Eloquent Models
 * Copy the phpDocs from this file to the correct Model,
 * And remove them from this file, to prevent double declarations.
 *
 * @author Barry vd. Heuvel <barryvdh@gmail.com>
 */


namespace App\Models{
/**
 * App\Models\Address
 *
 * @mixin IdeHelperAddress
 * @property int $id
 * @property string|null $name
 * @property int $user_id
 * @property string|null $latitude
 * @property string|null $longitude
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\User $user
 * @method static \Database\Factories\AddressFactory factory(...$parameters)
 * @method static \Illuminate\Database\Eloquent\Builder|Address newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Address newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Address query()
 * @method static \Illuminate\Database\Eloquent\Builder|Address whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Address whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Address whereLatitude($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Address whereLongitude($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Address whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Address whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Address whereUserId($value)
 */
	class IdeHelperAddress extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Booking
 *
 * @mixin IdeHelperBooking
 * @property int $id
 * @property int $client_id
 * @property int $washer_id
 * @property int $address_id
 * @property int $payment_method_id
 * @property int $car_type_id
 * @property int $booking_status_id
 * @property int $slot_id
 * @property \Illuminate\Support\Carbon $booking_date
 * @property float $amount
 * @property float $vat
 * @property float $total_amount
 * @property string|null $note
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\User $client
 * @property-read \App\Models\PaymentMethod $payment_method
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Service[] $services
 * @property-read int|null $services_count
 * @property-read \App\Models\Slot $slot
 * @property-read \App\Models\BookingStatus $status
 * @property-read \App\Models\User $washer
 * @method static \Database\Factories\BookingFactory factory(...$parameters)
 * @method static \Illuminate\Database\Eloquent\Builder|Booking newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Booking newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Booking query()
 * @method static \Illuminate\Database\Eloquent\Builder|Booking whereAddressId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Booking whereAmount($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Booking whereBookingDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Booking whereBookingStatusId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Booking whereCarTypeId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Booking whereClientId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Booking whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Booking whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Booking whereNote($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Booking wherePaymentMethodId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Booking whereSlotId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Booking whereTotalAmount($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Booking whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Booking whereVat($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Booking whereWasherId($value)
 */
	class IdeHelperBooking extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\BookingStatus
 *
 * @mixin IdeHelperBookingStatus
 * @property int $id
 * @property string $name
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Booking[] $bookings
 * @property-read int|null $bookings_count
 * @method static \Illuminate\Database\Eloquent\Builder|BookingStatus newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|BookingStatus newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|BookingStatus query()
 * @method static \Illuminate\Database\Eloquent\Builder|BookingStatus whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BookingStatus whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BookingStatus whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BookingStatus whereUpdatedAt($value)
 */
	class IdeHelperBookingStatus extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Car
 *
 * @mixin IdeHelperCar
 * @property int $id
 * @property string $name
 * @property string $color
 * @property string|null $plate_number
 * @property int $user_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\User $owner
 * @property-read \App\Models\CarType $type
 * @method static \Database\Factories\CarFactory factory(...$parameters)
 * @method static \Illuminate\Database\Eloquent\Builder|Car newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Car newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Car query()
 * @method static \Illuminate\Database\Eloquent\Builder|Car whereColor($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Car whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Car whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Car whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Car wherePlateNumber($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Car whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Car whereUserId($value)
 */
	class IdeHelperCar extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\CarType
 *
 * @mixin IdeHelperCarType
 * @property int $id
 * @property string $name
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Car[] $cars
 * @property-read int|null $cars_count
 * @method static \Illuminate\Database\Eloquent\Builder|CarType newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|CarType newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|CarType query()
 * @method static \Illuminate\Database\Eloquent\Builder|CarType whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CarType whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CarType whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CarType whereUpdatedAt($value)
 */
	class IdeHelperCarType extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Membership
 *
 * @mixin IdeHelperMembership
 * @method static \Illuminate\Database\Eloquent\Builder|Membership newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Membership newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Membership query()
 */
	class IdeHelperMembership extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\PaymentMethod
 *
 * @mixin IdeHelperPaymentMethod
 * @property int $id
 * @property string $name
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Booking[] $bookings
 * @property-read int|null $bookings_count
 * @method static \Illuminate\Database\Eloquent\Builder|PaymentMethod newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|PaymentMethod newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|PaymentMethod query()
 * @method static \Illuminate\Database\Eloquent\Builder|PaymentMethod whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PaymentMethod whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PaymentMethod whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PaymentMethod whereUpdatedAt($value)
 */
	class IdeHelperPaymentMethod extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Service
 *
 * @mixin IdeHelperService
 * @property int $id
 * @property string $name
 * @property float $price
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Booking[] $bookings
 * @property-read int|null $bookings_count
 * @method static \Illuminate\Database\Eloquent\Builder|Service newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Service newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Service query()
 * @method static \Illuminate\Database\Eloquent\Builder|Service whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Service whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Service whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Service wherePrice($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Service whereUpdatedAt($value)
 */
	class IdeHelperService extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Setting
 *
 * @mixin IdeHelperSetting
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|Setting newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Setting newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Setting query()
 * @method static \Illuminate\Database\Eloquent\Builder|Setting whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Setting whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Setting whereUpdatedAt($value)
 */
	class IdeHelperSetting extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Slot
 *
 * @mixin IdeHelperSlot
 * @property int $id
 * @property string $name
 * @property string $slot_date
 * @property int $booked_slots
 * @property int $capacity
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Booking[] $bookings
 * @property-read int|null $bookings_count
 * @method static \Database\Factories\SlotFactory factory(...$parameters)
 * @method static \Illuminate\Database\Eloquent\Builder|Slot newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Slot newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Slot query()
 * @method static \Illuminate\Database\Eloquent\Builder|Slot whereBookedSlots($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Slot whereCapacity($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Slot whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Slot whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Slot whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Slot whereSlotDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Slot whereUpdatedAt($value)
 */
	class IdeHelperSlot extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Team
 *
 * @mixin IdeHelperTeam
 * @property-read \App\Models\User $owner
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\TeamInvitation[] $teamInvitations
 * @property-read int|null $team_invitations_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\User[] $users
 * @property-read int|null $users_count
 * @method static \Database\Factories\TeamFactory factory(...$parameters)
 * @method static \Illuminate\Database\Eloquent\Builder|Team newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Team newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Team query()
 */
	class IdeHelperTeam extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\TeamInvitation
 *
 * @mixin IdeHelperTeamInvitation
 * @property-read \App\Models\Team $team
 * @method static \Illuminate\Database\Eloquent\Builder|TeamInvitation newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|TeamInvitation newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|TeamInvitation query()
 */
	class IdeHelperTeamInvitation extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\User
 *
 * @mixin IdeHelperUser
 * @property int $id
 * @property string $name
 * @property string|null $phone
 * @property int $is_verified
 * @property int $role_id
 * @property string|null $email
 * @property \Illuminate\Support\Carbon|null $email_verified_at
 * @property string $password
 * @property string|null $two_factor_secret
 * @property string|null $two_factor_recovery_codes
 * @property string|null $remember_token
 * @property string|null $profile_photo_path
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Address[] $addresses
 * @property-read int|null $addresses_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Car[] $cars
 * @property-read int|null $cars_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Booking[] $clientBookings
 * @property-read int|null $client_bookings_count
 * @property-read mixed $is_admin
 * @property-read mixed $is_client
 * @property-read mixed $is_washer
 * @property-read string $profile_photo_url
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection|\Illuminate\Notifications\DatabaseNotification[] $notifications
 * @property-read int|null $notifications_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\Laravel\Sanctum\PersonalAccessToken[] $tokens
 * @property-read int|null $tokens_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Booking[] $washerBookings
 * @property-read int|null $washer_bookings_count
 * @method static \Illuminate\Database\Eloquent\Builder|User clientBookingsQry()
 * @method static \Database\Factories\UserFactory factory(...$parameters)
 * @method static \Illuminate\Database\Eloquent\Builder|User newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|User newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|User ofType($type)
 * @method static \Illuminate\Database\Eloquent\Builder|User popular()
 * @method static \Illuminate\Database\Eloquent\Builder|User query()
 * @method static \Illuminate\Database\Eloquent\Builder|User whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereEmailVerifiedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereIsVerified($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User wherePassword($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User wherePhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereProfilePhotoPath($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereRememberToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereRoleId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereTwoFactorRecoveryCodes($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereTwoFactorSecret($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereUpdatedAt($value)
 */
	class IdeHelperUser extends \Eloquent {}
}

