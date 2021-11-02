<?php

namespace App\Notifications;

use App\Channels\FirebaseChannel;
use App\Channels\SmsChannel;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class GeneralMessage extends Notification
{
    use Queueable;

    public $message;
    /**
     * @var string
     */
    private $channel;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($message, $channel = 'sms')
    {
        $this->message = $message;
        $this->channel = $channel;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param mixed $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        if ($this->channel == 'firebase') return [FirebaseChannel::class];
        return [SmsChannel::class];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param mixed $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toSms($notifiable)
    {
        return $this->message;
    }


    /**
     * Get the mail representation of the notification.
     *
     * @param mixed $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toFirebase($notifiable)
    {
        return $this->message;
    }

}
