<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Fortify\TwoFactorAuthenticatable;
use Laravel\Jetstream\HasProfilePhoto;
use Laravel\Jetstream\HasTeams;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Model;


/**
 * @mixin IdeHelperUser
 */
class User extends Authenticatable
{
    use HasApiTokens;
    use HasFactory;
    use HasProfilePhoto;
    use Notifiable;
    use TwoFactorAuthenticatable;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'phone',
        'role_id'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
        'two_factor_recovery_codes',
        'two_factor_secret',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = [
        'profile_photo_url','is_washer'
    ];

    public const ROLES = [
        'client' => 0,
        'washer' => 1,
        'admin' => 2,
    ];

    public function username()
    {
        return 'phone';
    }

    public function addresses()
    {
        return $this->hasMany(Address::class);
    }

    public function cars()
    {
        return $this->hasMany(Car::class);
    }

    public function ownsCar(Car $car): bool
    {
        return $this->cars->contains($car);
    }

    public function ownsAddress(Address $address): bool
    {
        return $this->addresses->contains($address);
    }

    public function scopeOfType($query, $type)
    {

        return $query->where('role_id', self::ROLES[$type]);
    }
//
//    public function getIsAttribute()
//    {
//
//    }

    public function getIsAdminAttribute()
    {
        return $this->role_id == self::ROLES['admin'];
    }

    public function getIsWasherAttribute()
    {
        return $this->role_id == self::ROLES['washer'];
    }

    public function getIsClientAttribute()
    {
        return $this->role_id == self::ROLES['client'];
    }

    public function washerBookings()
    {
        return $this->hasMany(Booking::class, 'washer_id');
    }

    public function clientBookings()
    {
        return $this->hasMany(Booking::class, 'client_id');
    }

    public function scopeClientBookingsQry($query)
    {
        return $query->clientBookings()->select(['id']);
    }

}
