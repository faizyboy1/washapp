<?php

namespace App\Actions;

use App\Mail\GeneralEmail;
use App\User;
use Illuminate\Support\Facades\Mail;


class Notifier
{


    public static function sendSMS($text, $users = null)
    {

        $query = User::query();

        if ($users) {
            $users = is_array($users) ? $users : explode($users, ',');
            $query = $query->whereIn('id', $users);
        }

        $selectedUsers = $query->get();

        $mobiles = '';
        foreach ($selectedUsers as $selectedUser) {
            $mobiles .= ',966' . substr($selectedUser->phone, 1);
        }
        $mobiles = substr($mobiles, 1); // to remove first comma

        $UC = 'E';

        $format = mb_detect_encoding($text);
        if ($format == 'UTF-8') {
            $UC = 'U';
            $text = self::ToUnicode($text);
        }

        $username = "Alsyahi2468";
        $password = "Alsyahi@246810";
        $urlGateway = "http://www.sTrust.com/httpSmsProvider.aspx";
        $sender = 'alahsaAp-AD';

        $URL = "$urlGateway?username=$username&password=$password&mobile=$mobiles&sender=$sender&message=$text&unicode=$UC";
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, $URL);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_HEADER, false);
        $result = curl_exec($curl);
        curl_close($curl);

        $result = (integer)str_replace(" ", "", $result);

        return !$result; // as 0 is OK, otherwise it has an error
    }


    public static function ToUnicode($Text)
    {
        $Backslash = "\ ";
        $Backslash = trim($Backslash);

        $UniCode = Array
        (
            "،" => "060C",
            "؛" => "061B",
            "؟" => "061F",
            "ء" => "0621",
            "آ" => "0622",
            "أ" => "0623",
            "ؤ" => "0624",
            "إ" => "0625",
            "ئ" => "0626",
            "ا" => "0627",
            "ب" => "0628",
            "ة" => "0629",
            "ت" => "062A",
            "ث" => "062B",
            "ج" => "062C",
            "ح" => "062D",
            "خ" => "062E",
            "د" => "062F",
            "ذ" => "0630",
            "ر" => "0631",
            "ز" => "0632",
            "س" => "0633",
            "ش" => "0634",
            "ص" => "0635",
            "ض" => "0636",
            "ط" => "0637",
            "ظ" => "0638",
            "ع" => "0639",
            "غ" => "063A",
            "ف" => "0641",
            "ق" => "0642",
            "ك" => "0643",
            "ل" => "0644",
            "م" => "0645",
            "ن" => "0646",
            "ه" => "0647",
            "و" => "0648",
            "ى" => "0649",
            "ي" => "064A",
            "ـ" => "0640",
            "ً" => "064B",
            "ٌ" => "064C",
            "ٍ" => "064D",
            "َ" => "064E",
            "ُ" => "064F",
            "ِ" => "0650",
            "ّ" => "0651",
            "ْ" => "0652",
            "!" => "0021",
            '"' => "0022",
            "#" => "0023",
            "$" => "0024",
            "%" => "0025",
            "&" => "0026",
            "'" => "0027",
            "(" => "0028",
            ")" => "0029",
            "*" => "002A",
            "+" => "002B",
            "," => "002C",
            "-" => "002D",
            "." => "002E",
            "/" => "002F",
            "0" => "0030",
            "1" => "0031",
            "2" => "0032",
            "3" => "0033",
            "4" => "0034",
            "5" => "0035",
            "6" => "0036",
            "7" => "0037",
            "8" => "0038",
            "9" => "0039",
            ":" => "003A",
            ";" => "003B",
            "<" => "003C",
            "=" => "003D",
            ">" => "003E",
            "?" => "003F",
            "@" => "0040",
            "A" => "0041",
            "B" => "0042",
            "C" => "0043",
            "D" => "0044",
            "E" => "0045",
            "F" => "0046",
            "G" => "0047",
            "H" => "0048",
            "I" => "0049",
            "J" => "004A",
            "K" => "004B",
            "L" => "004C",
            "M" => "004D",
            "N" => "004E",
            "O" => "004F",
            "P" => "0050",
            "Q" => "0051",
            "R" => "0052",
            "S" => "0053",
            "T" => "0054",
            "U" => "0055",
            "V" => "0056",
            "W" => "0057",
            "X" => "0058",
            "Y" => "0059",
            "Z" => "005A",
            "[" => "005B",
            $Backslash => "005C",
            "]" => "005D",
            "^" => "005E",
            "_" => "005F",
            "`" => "0060",
            "a" => "0061",
            "b" => "0062",
            "c" => "0063",
            "d" => "0064",
            "e" => "0065",
            "f" => "0066",
            "g" => "0067",
            "h" => "0068",
            "i" => "0069",
            "j" => "006A",
            "k" => "006B",
            "l" => "006C",
            "m" => "006D",
            "n" => "006E",
            "o" => "006F",
            "p" => "0070",
            "q" => "0071",
            "r" => "0072",
            "s" => "0073",
            "t" => "0074",
            "u" => "0075",
            "v" => "0076",
            "w" => "0077",
            "x" => "0078",
            "y" => "0079",
            "z" => "007A",
            "{" => "007B",
            "|" => "007C",
            "}" => "007D",
            "~" => "007E",
            "©" => "00A9",
            "®" => "00AE",
            "÷" => "00F7",
            "×" => "00F7",
            "§" => "00A7",
            " " => "0020",
            "\n" => "000D",
            "\r" => "000A",
            "\t" => "0009",
            "é" => "00E9",
            "ç" => "00E7",
            "à" => "00E0",
            "ù" => "00F9",
            "µ" => "00B5",
            "è" => "00E8"
        );

        $Result = "";
        $StrLen = strlen($Text);
        for ($i = 0; $i < $StrLen; $i++) {
            $currect_char = mb_substr($Text, $i, 1);
            if (array_key_exists($currect_char, $UniCode)) {
                $Result .= $UniCode[$currect_char];
            }
        }
        return $Result;
    }

    public static function sendTweet($text, $users = null)
    {
        // dump($text);
    }

    /**
     * @description sending firebase notification
     * @example Notifier::sendFirebase('hi, Saleh') -- all users
     * @example Notifier::sendFirebase('hi, Saleh','1,2,3,4')  only for 1,2,3,4 users
     * @example Notifier::sendFirebase('hi, Saleh',[1,2,3,4])  only for 1,2,3,4 users
     * @param $text string
     * @param null $users array|string
     */

    /**
     * @param $text
     * @param $users
     */
    public function sendEmail($text, $receivers = null)
    {
//        $user = User::where(1)->get();
//        $user->toify
//       $receivers= $receivers??User::admins();
//
//       foreach ($receivers as $receiver){
//           $receiver->no
//       }
    }

//    public function send(Request $request)
//    {
//        $this->validate($request,
//            [
//                'name' => 'string',
//                'email' => 'string|required',
//                'subject' => 'string|required',
//                'message' => 'string|required',
//            ]
//        );
//
//        $name = $request->name;
//        $email = $request->email;
//        $subject = $request->subject;
//        $text = $request->message;
//
//        Mail::send('email', compact('name', 'email', 'subject', 'text'), function ($m) use ($name, $email, $subject, $text) {
//            $m->from($email, $name);
//            $m->subject($subject);
//            $m->to('takafulalkhalijia1@gmail.com');
//        });
//        //\App\Management::pluck('email')->first()
//        if (Mail::failures()) {
//            return redirect('/contact_us')->with('message',  ' شكرا لك , تم إرسال ردك بنجاح');
//        }
//
//        return redirect('/contact_us')->with('message', ' عذرا , لم يتم إرسال ردك بنجاح . يرجى المحاولة لاحقا');
//    }

    public static function sendNotification($model, $type)
    {
        $fcmUrl = 'https://fcm.googleapis.com/fcm/send';

        if ($type == 'locations') {
            $notification = [
                'title' => 'تم إضافة مكان جديد :: New Place Added',
                'sound' => true,
                'text' => $model->name_en . ' :: ' . $model->name_ar,

            ];
        } else {
            $notification = [
                'title' => 'تم إضافةإعلان جديد :: New Offer Added',
                'sound' => true,
                'text' => $model->description_en . ' :: ' . $model->description_ar
            ];
        }
        $fcmNotification = [
            // 'to' => 'ePTXKReWErE:APA91bFT0iO9-NNlkiPWOoMrSKxmGtl6pakDWzo36HdGR5W6fnFudMshahWFJajR9unKG0oTdWGmuVPDFjlw_ZGjZS0IqNOHxvNY5rGB0A8O50yv-eE45JSPP2eCTeE9TawDl8RFMxAC',
            'to' => '/topics/all',
            'content_available' => true,
            'notification' => $notification,
            'data' => [
                "id" => $model->id,
                "type" => $type
            ]
        ];

        $headers = [
            'Authorization: key=AIzaSyCr30DbBrXs5VvEC6yPEfEv19g2ivQ4W9g',
            'Content-Type: application/json'
        ];

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

    public static function notifyUser($email=null, $text = 'new Location was submitted',$subject='تنويه من موقع alahsa.app')
    {
        if(!$email) return;
        Mail::to($email)->queue(new GeneralEmail($text,$subject));
    }

    public static function notifyAdmin($text = 'new Location was submitted',$subject='تنويه من موقع alahsa.app')
    {
        Mail::to('contact@alahsa.app')->queue(new GeneralEmail($text,$subject));
    }
}
