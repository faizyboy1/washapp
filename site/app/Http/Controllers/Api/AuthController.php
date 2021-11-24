<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Notifications\GeneralMessage;
use App\Notifications\VerificationMessage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Log;
use Tzsk\Otp\Facades\Otp;

class AuthController extends Controller
{
    //this method adds new users
    public function register(Request $request)
    {
        $attr = $request->validate([
            'name' => 'required|string|max:255',
            'phone' => 'required|unique:users|string|max:255',
            'password' => 'required|string|min:6|confirmed'
        ]);

        $user = User::create([
            'name' => $attr['name'],
            'password' => bcrypt($attr['password']),
            'phone' => $attr['phone']
        ]);

        auth()->login($user);
        return $this->user($request);
//        $this->generateOtp($user);

//        return $this->verify();
//        return [
//            'token' => $user->createToken('tokens')->plainTextToken
//        ];
    }


//    public function generateOtp($user)
//    {
//        // send OTP code
////        $code = Otp::digits(4)->generate($user->phone);
//        //     $user->notify(new VerificationMessage($code));
//    }

    public function verify(Request $request)
    {
        $request->validate(['code' => 'digits:4|required', 'phone' => 'required']);

        $isMatched = Otp::check($request->input('code'), $request->input('phone'));
//dd($request->input(),$isMatched);
        if ($isMatched) {
            $user = User::where('phone', $request->input('phone'))->first();
            auth()->login($user);
            $token = auth()->user()->createToken('mobileApp')->plainTextToken;
            return ['token' => $token];
        }

        return response()->json([
            "message" => __("The given data was invalid."),
        ], 422);

        // verify code and log the user
//        \auth()->user()->ver
    }

    //use this method to login users
    public function login(Request $request)
    {
//        $payload = json_decode($request->getContent(), true);
//dd($payload);
        $attr = $request->validate([
            'phone' => 'required|string',
            'password' => 'required|string|min:6'
        ]);

        if (!Auth::attempt($attr)) {
            return response()->json(['message' => 'Credentials not match'], 401);
        }

        return $this->user($request);
//        return ['token' => auth()->user()->createToken('mobileApp')->plainTextToken,'user'=>$userData];

    }

    public function user(Request $request)
    {
        $user = auth()->user()->load('cars', 'addresses');
        if ($request->fcm_token && $user->fcm_token != $request->fcm_token) {
            $user->update(['fcm_token' => $request->fcm_token]);
        }

        $user->isWasher ? $user->load('washerBookings') : $user->load('clientBookings');
        $user->token = auth()->user()->createToken('mobileApp')->plainTextToken;

//        $user->isWasher ? $user->load('washerBookings') : $user->load('clientBookings');

        return $user;
    }

    // this method signs out users by removing tokens
    public function logout()
    {
        auth()->user()->tokens()->delete();

        return [
            'message' => 'Tokens Revoked'
        ];
    }

    public function refreshFCM(Request $request)
    {

        $this->validate(['token' => 'required']);

        auth()->user()->update(['fcm_token' => $request->token]);

        return response()->json(['message' => __('token was updated successfully')]);
    }

}
