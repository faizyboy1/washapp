<?php

namespace App\Actions;

use App\Mail\GeneralEmail;
use App\User;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Mail;


class Notifier
{

    public static function sendNotification($body = '', $title = '', $to = '/topics/all')
    {
        $fcmUrl = 'https://fcm.googleapis.com/fcm/send';


        $firebaseKey = config('services.firebase.key');

        $headers = [
            "Authorization: key=$firebaseKey",
            'Content-Type: application/json'
        ];


        $fcmNotification = [
            'content_available' => true,
            'priority' => 'high',
            'notification' => [
                'title' => $title,
                'sound' => true,
                'text' => $body,
                'body' => $body
            ],
        ];

        is_array($to) ? $fcmNotification['registration_ids'] = $to : $fcmNotification['to'] = '/topics/all';

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $fcmUrl);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($fcmNotification));
        curl_exec($ch);
        curl_close($ch);
    }
}
