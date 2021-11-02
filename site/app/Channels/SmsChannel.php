<?php

namespace App\Channels;

use Illuminate\Notifications\Notification;
use Illuminate\Support\Facades\Http;
use function PHPUnit\Framework\throwException;

class SmsChannel
{
    /**
     * @var string
     */
    private $url;
    /**
     * @var \Illuminate\Config\Repository|\Illuminate\Contracts\Foundation\Application|mixed
     */
    private $key;
    /**
     * @var \Illuminate\Config\Repository|\Illuminate\Contracts\Foundation\Application|mixed
     */
    private $username;
    /**
     * @var \Illuminate\Config\Repository|\Illuminate\Contracts\Foundation\Application|mixed
     */
    private $senderName;

    /**
     * Send the given notification.
     *
     * @param mixed $notifiable
     * @param \Illuminate\Notifications\Notification $notification
     * @return void
     */


    public function __construct()
    {
        $this->url = "https://www.msegat.com/gw/sendsms.php";

        $this->key = config('services.sms.key');
        $this->username = config('services.sms.username');
        $this->senderName = config('services.sms.sender_name');

    }

    public function send($notifiable, Notification $notification)
    {
        $message = $notification->toSms($notifiable);

        $data = [
            'userName' => $this->username,
            "apiKey" => $this->key,
            "numbers" => $notifiable->phone,
            "userSender" => "OTP",
            "msg" => $message,
            "msgEncoding" => "UTF8"
        ];

        $response = Http::asForm()->withHeaders([
            "Content-Type" => "application/json"
        ])->post($this->url, $data);

        if ($response->json()['code'] == "1") {
            return true;
        }

        return $response->json()['code'] . ":" . $response->json()['message'];
    }
}
