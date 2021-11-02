<?php

namespace App\Http\Controllers;


use App\Actions\Notifier;
use App\Channels\FirebaseChannel;
use App\Notifications\FirebaseMessage;
use App\Notifications\GeneralMessage;
use http\Client\Curl\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Notification;

class NotificationController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function index()
    {
        $user = \App\Models\User::first();
        $user->notify(new GeneralMessage("رمز التحقق: 2245",'firebase'));
//        Notification::route('firebase', '966535010102')->notify(new GeneralMessage("رمز التحقق: 2245",'firebase'));
//        $user->notify(new GeneralMessage("رمز التحقق: 2245"));
//        $users = User::with('city','country')->get();
//        $countries = Country::all();
//        $cities = City::all();
//        return view('notifications.index', compact('users','countries','cities'));
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function create()
    {
        $users = User::with('city', 'country')->get();
        $countries = Country::all();
        $cities = City::all();
        return view('notifications.index', compact('users', 'countries', 'cities'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if ($request->firebase) {
            Notifier::sendFirebase($request->message, $request->users);
            return redirect('notifications')->withMessage(__('Sent Successfully'));
        }

        if ($request->sms) {
            Notifier::sendSMS($request->message, $request->users);
            return redirect('notifications')->withMessage(__('Sent Successfully'));
        }
        return redirect('notifications')->withMessage(__('Sent Successfully'));
    }

}
