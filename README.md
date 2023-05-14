Bu projede, react.js kullanarak Erasmus programına başvuracak öğrencilerin, başvuru için gerekli olan bilgilerinin alınabilmesi için bir portal yapılması amaçlanmıştır.
Kullanıcı kayıt oluşturarak portal sayfasına giriş yapabilir. Kayıt bilgileri sessionStorage’ta tutulmaktadır. Kayıt oluşturulurken mail ve 6 karakterli şifre girildiğine dair kontrol yapılmaktadır. Ayrıca kullanıcıya şifresini tekrar ettirerek doğru şifre ile hesap oluşturulması sağlanmaktadır. 
Kayıt formu oluşturulduktan sonra kullanıcı, useNavigate kullanılarak giriş sayfasına yönlendirilmektedir. Giriş sayfasından yapılacak login işlemi esnasında kullanıcının sessionStorage’taki hesap bilgileri kontrol edilmekte, bilgilerin örtüşmesi halinde portal sayfasına giriş yapılabilmektedir. 
Portal sayfasında kullanılan useEffect ile kullanıcının login yapıp yapmadığı kontrol edilmektedir. Bu sayede kullanıcının login olmadan, portal linkini yazarak portal sayfasına girmesi önlenmektedir.
Portal sayfasına giriş yapıldığında kullanıcının tutulan kullanıcı adı sağ üst köşede çıkmaktadır.
Portal sayfasından kullanıcı Erasmus programına başvururken kendisinden istenen bilgileri başvuru formunu doldurarak gönderebilir. 
Kullanıcı başvuru bilgilerini başvuru görüntüle kısmından görüntüleyebilmektedir.
Son olarak kullanıcı hesap kullanıcı adını ve şifresini kayıt bilgilerini düzenle kısmından güncelleyebilmektedir. Bu aşama ilk olarak kullanıcıdan eski bilgilerinin girilmesi istenmektedir. Girdiği bilgiler doğruysa yeni bilgilerin istediği sayfa açılmaktadır. 

------
npm install
npm start
