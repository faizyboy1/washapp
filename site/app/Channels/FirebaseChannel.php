<?php

namespace App\Channels;

use Illuminate\Notifications\Notification;

class FirebaseChannel
{


    /**
     * @var string
     */
    private $url;
    /**
     * @var string[]
     */
    private $headers;


    public function __construct()
    {
        $this->url = 'https://fcm.googleapis.com/fcm/send';

        $firebaseKey = config('services.firebase.key');

        $this->headers = [
            "Authorization: key=$firebaseKey",
            'Content-Type: application/json'
        ];
    }

    /**
     * Send the given notification.
     *
     * @param  mixed  $notifiable
     * @param  \Illuminate\Notifications\Notification  $notification
     * @return void
     */
    public function send($notifiable, Notification $notification)
    {
        $message = $notification->toFirebase($notifiable);

//        $query = User::query();
//        if ($users) {
//            $users = is_array($users) ? $users : explode($users, ',');
//            $query = $query->whereIn('id', $users);
//        }
//
//        $selectedUsers = $query->get();
//
//        foreach ($selectedUsers as $selectedUser) {


            $fcmNotification = [
                'to' => $notifiable->fcm_token,
                'content_available' => true,
                'notification' => [
                    'title' => config('APP_NAME'),
                    'sound' => true,
                    'text' => $message
                ],
            ];


//@todo replace by https://laravel.com/docs/8.x/http-client
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, $this->url);
            curl_setopt($ch, CURLOPT_POST, true);
            curl_setopt($ch, CURLOPT_HTTPHEADER, $this->headers);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
            curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($fcmNotification));
            curl_exec($ch);
            curl_close($ch);
//        }
//        return redirect('notifications.index')->withMessage(__('send_successfully'));
    }


}
